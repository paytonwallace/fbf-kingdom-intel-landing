import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You Are Registered! | Kingdom Intelligence Masterclass",
  description: "You are registered for the Kingdom Intelligence Masterclass. Join our community and grab your bonus training videos.",
};

const COMMUNITY_URL = "https://www.facebook.com/groups/fueledbyfirealliance";
const WORKBOOK_URL = "https://fbfchallenge.com";

export default function ThankYou() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700;900&family=Work+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Work Sans', sans-serif", background: "#FFFFFF", color: "#111" }}>

        {/* TOP BANNER */}
        <div style={{ background: "#CC0000", padding: "20px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Frank Ruhl Libre', Georgia, serif", fontSize: "clamp(24px, 5vw, 40px)", fontWeight: 900, color: "#FFFFFF", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            You Are Registered!
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 24px" }}>

          {/* WAIT — one more step */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#C9A55A", marginBottom: "8px", fontFamily: "'Frank Ruhl Libre', Georgia, serif" }}>
              Wait, before you go&hellip;<br />
              <span style={{ color: "#111", fontStyle: "normal" }}>ONE MORE QUICK STEP:</span>
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E5E5", marginBottom: "48px" }} />

          {/* COMMUNITY INVITE */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Frank Ruhl Libre', Georgia, serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 900, color: "#111", marginBottom: "32px", lineHeight: 1.2 }}>
              Join our Kingdom Intelligence Community and get:
            </h2>

            <div style={{ display: "inline-flex", flexDirection: "column", gap: "16px", textAlign: "left", marginBottom: "40px" }}>
              {[
                "BONUS Training Video #1 (Mindset)",
                "BONUS Training Video #2 (Economy)",
                "BONUS Training Video #3 (Time Expansion)",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(204,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7.5L5.5 11L12 4" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "18px", fontWeight: 600, color: "#111", fontFamily: "'Work Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div style={{ marginBottom: "24px" }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ display: "inline-block" }}>
                <circle cx="20" cy="20" r="19" stroke="#CC0000" strokeWidth="2" />
                <path d="M20 12v16M13 21l7 7 7-7" stroke="#CC0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #C9A55A 0%, #E8D080 45%, #BB945A 100%)",
              color: "#120800",
              fontWeight: 800,
              padding: "18px 48px",
              borderRadius: "6px",
              fontSize: "17px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "'Work Sans', sans-serif",
              boxShadow: "0 6px 24px rgba(185,148,90,0.4)",
            }}>
              ! Click Here to Join the Community !
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E5E5", marginBottom: "48px" }} />

          {/* WORKBOOK SECTION — placeholder for second screenshot */}
          <div style={{ background: "#F7F6F4", borderRadius: "12px", padding: "48px 40px" }}>
            <h2 style={{ fontFamily: "'Frank Ruhl Libre', Georgia, serif", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#111", textAlign: "center", marginBottom: "36px" }}>
              Get Your Kingdom Intelligence Workbook:
            </h2>

            <div style={{ display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Left — text */}
              <div style={{ flex: "1 1 300px", minWidth: "260px" }}>
                <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "16px", fontFamily: "'Work Sans', sans-serif" }}>
                  Ready to take your journey to the next level? Enhance your experience with our exclusive Kingdom Intelligence Workbook. This comprehensive companion will guide you step-by-step through each lesson, helping you dive deeper into the strategies and principles you learn each day.
                </p>
                <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "28px", fontFamily: "'Work Sans', sans-serif" }}>
                  Reinforce your learning, set actionable goals, and track your progress with this essential tool. Don&rsquo;t miss the chance to maximize your transformation.
                </p>
                <a href={WORKBOOK_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #C9A55A 0%, #E8D080 45%, #BB945A 100%)",
                  color: "#120800",
                  fontWeight: 800,
                  padding: "16px 36px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: "'Work Sans', sans-serif",
                  boxShadow: "0 4px 18px rgba(185,148,90,0.35)",
                }}>
                  Grab Your Workbook
                </a>
                <p style={{ fontSize: "13px", color: "#999", marginTop: "8px", fontStyle: "italic", fontFamily: "'Work Sans', sans-serif" }}>Fill out this form to access the workbook!</p>
              </div>

              {/* Right — workbook cover */}
              <div style={{ flex: "0 0 auto" }}>
                <img
                  src="/images/staci-larry-hero.avif"
                  alt="Kingdom Intelligence Workbook"
                  style={{ width: "220px", height: "280px", objectFit: "cover", objectPosition: "center top", borderRadius: "8px", boxShadow: "0 12px 40px rgba(0,0,0,0.15)", display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div style={{ textAlign: "center", marginTop: "60px", paddingTop: "32px", borderTop: "1px solid #E5E5E5" }}>
            <img src="/images/fbf-logo-black.png" alt="Fueled By Fire" style={{ height: "36px", display: "inline-block", marginBottom: "16px" }} />
            <p style={{ fontSize: "13px", color: "#aaa", fontFamily: "'Work Sans', sans-serif" }}>&copy; 2026 Fueled By Fire. All Rights Reserved.</p>
          </div>
        </div>
      </body>
    </html>
  );
}
