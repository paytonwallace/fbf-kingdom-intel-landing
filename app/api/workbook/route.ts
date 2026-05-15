import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const BREVO_WORKBOOK_LIST_ID = Number(process.env.BREVO_WORKBOOK_LIST_ID || process.env.BREVO_KIM_WORKBOOK_LIST_ID || "16");

type WorkbookPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  whichOfTheFollowingBestDescribesYou?: string;
  oneThing?: string;
  outcomeImpact?: string;
  otherDecisionMakers?: string;
  wantResults?: string;
  helpAreas?: string[];
  sessionConnectionPreference?: string;
  attendedWorkshop?: string;
  monthlyIncomeRange?: string;
  stageOfGrowth?: string;
  leadershipExperience?: string;
  kingdomAlignment?: string;
  readyToInvest?: string;
};

function clean(value = "") {
  return value.trim();
}

function normalizeEmail(value = "") {
  return value.trim().toLowerCase();
}

async function readError(res: Response) {
  const text = await res.text();
  try {
    return JSON.stringify(JSON.parse(text));
  } catch {
    return text;
  }
}

async function fetchJson(url: string, init: RequestInit, label: string) {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(`${label} failed (${res.status}): ${await readError(res)}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

function required(value: string | string[] | undefined) {
  return Array.isArray(value) ? value.length > 0 : Boolean(clean(value || ""));
}

export async function POST(req: NextRequest) {
  try {
    if (!BREVO_API_KEY || !BREVO_WORKBOOK_LIST_ID) {
      return NextResponse.json({ error: "Workbook form is not configured" }, { status: 500 });
    }

    const payload = (await req.json()) as WorkbookPayload;
    const firstName = clean(payload.firstName);
    const lastName = clean(payload.lastName);
    const email = normalizeEmail(payload.email);
    const company = clean(payload.company);

    const missing = [
      ["email", email],
      ["company", company],
      ["whichOfTheFollowingBestDescribesYou", payload.whichOfTheFollowingBestDescribesYou],
      ["oneThing", payload.oneThing],
      ["outcomeImpact", payload.outcomeImpact],
      ["otherDecisionMakers", payload.otherDecisionMakers],
      ["wantResults", payload.wantResults],
      ["helpAreas", payload.helpAreas],
      ["attendedWorkshop", payload.attendedWorkshop],
      ["monthlyIncomeRange", payload.monthlyIncomeRange],
    ].filter(([, value]) => !required(value as string | string[] | undefined));

    if (missing.length > 0) {
      return NextResponse.json({ error: "Missing required fields", fields: missing.map(([name]) => name) }, { status: 400 });
    }

    const attributes: Record<string, string> = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      COMPANY: company,
    };

    await fetchJson(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          attributes,
          listIds: [BREVO_WORKBOOK_LIST_ID],
          updateEnabled: true,
        }),
      },
      "Brevo workbook contact"
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Workbook form submission failed" }, { status: 500 });
  }
}
