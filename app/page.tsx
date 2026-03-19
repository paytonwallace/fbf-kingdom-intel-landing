const REGISTER_URL = "https://fbfchallenge.com";

const colors = {
  bg: "#050505",
  gold: "#BB945A",
  navy: "#052134",
  text: "#F0F0F0",
  muted: "#A8A8A8",
};

function GoldButton({
  children,
  large,
  dark,
}: {
  children: React.ReactNode;
  large?: boolean;
  dark?: boolean;
}) {
  return (
    <a
      href={REGISTER_URL}
      style={{
        display: "inline-block",
        backgroundColor: dark ? colors.bg : colors.gold,
        color: dark ? "#FFFFFF" : colors.bg,
        padding: large ? "20px 48px" : "16px 36px",
        fontSize: large ? "18px" : "16px",
        fontWeight: 700,
        letterSpacing: "0.5px",
        textDecoration: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: colors.gold,
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "3px",
        textTransform: "uppercase" as const,
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

function SectionHeadline({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      style={{
        fontSize: "clamp(28px, 4vw, 44px)",
        fontWeight: 700,
        lineHeight: 1.2,
        color: dark ? colors.bg : colors.text,
        marginBottom: "24px",
        maxWidth: "800px",
      }}
    >
      {children}
    </h2>
  );
}

function Section({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) {
  return (
    <section
      style={{
        backgroundColor: background,
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/* --- HERO --- */
function Hero() {
  return (
    <section
      style={{
        backgroundColor: colors.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px clamp(20px, 5vw, 80px)",
          maxWidth: "1260px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "2px",
            color: colors.text,
          }}
        >
          FBF
        </span>
        <a
          href={REGISTER_URL}
          style={{
            backgroundColor: colors.gold,
            color: colors.bg,
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            borderRadius: "4px",
            letterSpacing: "0.5px",
          }}
        >
          Register
        </a>
      </nav>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px clamp(20px, 5vw, 80px) 80px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: colors.gold,
            marginBottom: "20px",
          }}
        >
          Kingdom Intelligence Master Class
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: colors.muted,
            marginBottom: "32px",
            fontWeight: 400,
          }}
        >
          April 14{"\u2013"}16, 2026 | Free | Live Online
        </p>
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            color: colors.text,
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "700px",
          }}
        >
          The marketplace is changing faster than most leaders can keep up. AI is
          no longer optional. It is a necessity. The leaders who wait will not
          just plateau. They will be outpaced.
        </p>
        <GoldButton large>Save Your Seat {"\u2014"} Free</GoldButton>
        <p
          style={{
            fontSize: "13px",
            color: colors.muted,
            marginTop: "20px",
            letterSpacing: "0.5px",
          }}
        >
          April 14{"\u2013"}16, 2026 | 3 Days | No Cost | Faith-Driven Leaders
        </p>
      </div>
    </section>
  );
}

/* --- THE PROBLEM --- */
const painPoints = [
  {
    title: "Your team depends on you for everything",
    desc: "Every decision, every approval, every crisis flows through you. You are the ceiling of your own company.",
  },
  {
    title: "AI feels like one more thing you should be doing",
    desc: "You know it matters, but between running the business and leading your team, there is no margin left to figure it out.",
  },
  {
    title: "Growth keeps adding chaos instead of clarity",
    desc: "More revenue, more people, more problems. The business is growing but it is not getting easier.",
  },
];

function Problem() {
  return (
    <Section background={colors.navy}>
      <SectionLabel>Who This Is For</SectionLabel>
      <SectionHeadline>
        You built a real business. So why does it still feel this heavy?
      </SectionHeadline>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        {painPoints.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "rgba(5,5,5,0.5)",
              borderTop: `3px solid ${colors.gold}`,
              padding: "32px 28px",
              borderRadius: "4px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: colors.text,
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: colors.muted,
                lineHeight: 1.6,
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --- THE SOLUTION --- */
const features = [
  {
    num: "01",
    title: "Increase profit with operational clarity",
    desc: "Identify the hidden inefficiencies draining your revenue and replace them with streamlined systems that compound over time.",
  },
  {
    num: "02",
    title: "Integrate AI without compromising your values",
    desc: "Learn exactly which AI tools to use, where to deploy them, and how to keep your faith and ethics at the center of every decision.",
  },
  {
    num: "03",
    title: "Build systems your team can run without you",
    desc: "Create documented, repeatable processes that free you from daily operations so you can focus on vision and growth.",
  },
];

function Solution() {
  return (
    <Section background={colors.bg}>
      <SectionLabel>The Framework</SectionLabel>
      <SectionHeadline>
        AI increases speed. Kingdom Intelligence determines dominion.
      </SectionHeadline>
      <p
        style={{
          fontSize: "17px",
          color: colors.muted,
          lineHeight: 1.7,
          maxWidth: "750px",
          marginBottom: "48px",
        }}
      >
        Inside this free 3-day live event, you will learn how to combine
        Spirit-led discernment with the right systems and AI tools to build a
        company that grows without depending entirely on you.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
        }}
      >
        {features.map((f) => (
          <div key={f.num}>
            <span
              style={{
                fontSize: "48px",
                fontWeight: 700,
                color: colors.gold,
                lineHeight: 1,
                display: "block",
                marginBottom: "16px",
              }}
            >
              {f.num}
            </span>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: colors.text,
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: colors.muted,
                lineHeight: 1.6,
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --- WHAT YOU WILL LEARN --- */
const checklist = [
  "Increase profit without adding more complexity",
  "Build systems your team actually follows",
  "Use AI in a way that aligns with your calling and values",
  "Make faster, smarter, Spirit-led decisions",
  "Scale your company without becoming the bottleneck",
];

function Learn() {
  return (
    <Section background={colors.navy}>
      <SectionLabel>Inside the Master Class</SectionLabel>
      <SectionHeadline>
        Three days. No fluff. Everything you need to lead at the next level.
      </SectionHeadline>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: "48px" }}>
        {checklist.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: colors.gold,
                fontSize: "22px",
                lineHeight: "28px",
                flexShrink: 0,
              }}
            >
              {"\u2713"}
            </span>
            <span
              style={{
                fontSize: "17px",
                color: colors.text,
                lineHeight: 1.6,
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      <GoldButton>Register Free {"\u2014"} April 14-16</GoldButton>
    </Section>
  );
}

/* --- ABOUT STACI --- */
function About() {
  return (
    <Section background={colors.bg}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#1A1A1A",
            aspectRatio: "4 / 5",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: colors.muted,
            fontSize: "15px",
            border: "1px solid #2A2A2A",
            maxWidth: "440px",
            width: "100%",
          }}
        >
          Staci Wallace Photo
        </div>

        <div>
          <SectionLabel>Your Host</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: colors.text,
              marginBottom: "8px",
            }}
          >
            Staci Wallace
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: colors.gold,
              marginBottom: "24px",
              lineHeight: 1.5,
            }}
          >
            CEO, Fueled By Fire | 8x Best-Selling Author | International
            Speaker
          </p>
          <p
            style={{
              fontSize: "16px",
              color: colors.muted,
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            Staci Wallace has shared stages with five U.S. Presidents and spoken
            to hundreds of thousands of leaders across the globe. She is the CEO
            of Fueled By Fire, one of the nation{"\u2019"}s leading faith-based
            business coaching companies, and the architect of the Kingdom
            Intelligence framework. For over 35 years she has helped
            faith-driven entrepreneurs build profitable, purposeful companies
            without sacrificing family, faith, or freedom.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: colors.gold,
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Big Business. Bold Faith. No Compromise.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* --- FINAL CTA --- */
function FinalCTA() {
  return (
    <section
      style={{
        backgroundColor: colors.gold,
        padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: colors.bg,
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          Your seat is waiting.
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: colors.bg,
            lineHeight: 1.7,
            marginBottom: "36px",
            opacity: 0.85,
          }}
        >
          Three free days. April 14{"\u2013"}16, 2026. Built for faith-driven
          business owners ready to lead at the next level.
        </p>
        <GoldButton large dark>
          Save My Free Seat Now
        </GoldButton>
        <p
          style={{
            fontSize: "13px",
            color: colors.bg,
            marginTop: "20px",
            opacity: 0.6,
          }}
        >
          Free registration. No credit card required. Live online event.
        </p>
      </div>
    </section>
  );
}

/* --- FOOTER --- */
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.bg,
        borderTop: "1px solid #1A1A1A",
        padding: "40px clamp(20px, 5vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "2px",
              color: colors.text,
            }}
          >
            FBF
          </span>
          <span
            style={{
              color: colors.muted,
              fontSize: "14px",
              marginLeft: "16px",
            }}
          >
            {"\u00A9"} 2026 Fueled By Fire
          </span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="#"
            style={{
              color: colors.muted,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              color: colors.muted,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

/* --- PAGE --- */
export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Learn />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
