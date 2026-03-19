import Image from "next/image";

const REGISTER_URL = "https://fbfchallenge.com";

const glassCard = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
} as const;

/* ── NAV ── */
function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px clamp(20px, 5vw, 80px)",
        ...glassCard,
        borderRadius: 0,
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "20px",
          letterSpacing: "3px",
          color: "#BB945A",
        }}
      >
        FBF
      </span>
      <a
        href={REGISTER_URL}
        style={{
          display: "inline-block",
          padding: "10px 28px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#F0F0F0",
          textDecoration: "none",
          borderRadius: "50px",
          border: "1px solid #BB945A",
          background: "rgba(187,148,90,0.08)",
          letterSpacing: "0.5px",
        }}
      >
        Register Free
      </a>
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "120px clamp(20px, 5vw, 80px) 80px",
      }}
    >
      {/* subtle gold radial glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(187,148,90,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: text */}
        <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#BB945A",
              marginBottom: "20px",
            }}
          >
            Free Live Event &mdash; April 14&ndash;16, 2026
          </p>
          <h1
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#F0F0F0",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Kingdom Intelligence Master Class
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#A8A8A8",
              lineHeight: 1.5,
              marginBottom: "40px",
              maxWidth: "520px",
            }}
          >
            Where Faith-Driven Leaders Learn to Scale in the AI Era
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={REGISTER_URL}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #BB945A, #d4a96a)",
                color: "#050505",
                fontWeight: 600,
                padding: "18px 48px",
                borderRadius: "50px",
                border: "none",
                fontSize: "17px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Save Your Seat Free
            </a>
            <a
              href="#learn-more"
              style={{
                display: "inline-block",
                padding: "18px 48px",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                color: "#F0F0F0",
                fontWeight: 600,
                fontSize: "17px",
                textDecoration: "none",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              Learn More
            </a>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#A8A8A8",
              marginTop: "24px",
              letterSpacing: "0.03em",
            }}
          >
            3 Days Live Online &mdash; No Cost &mdash; April 14&ndash;16, 2026
          </p>
        </div>

        {/* Right: photo */}
        <div
          style={{
            flex: "0 1 380px",
            position: "relative",
          }}
        >
          <div
            style={{
              ...glassCard,
              padding: "8px",
              overflow: "hidden",
              transform: "translateY(-10px)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(187,148,90,0.05)",
            }}
          >
            <Image
              src="/images/staci-headshot-best.jpg"
              alt="Staci Wallace"
              width={380}
              height={475}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "14px",
                objectFit: "cover",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SOCIAL PROOF BAR ── */
const stats = [
  { number: "35+", label: "Years Business Experience" },
  { number: "5", label: "U.S. Presidents Shared Stages With" },
  { number: "Thousands", label: "Of Leaders Coached" },
];

function SocialProof() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)",
        padding: "0 clamp(20px, 5vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          ...glassCard,
          padding: "40px 48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 200px",
              textAlign: "center",
              padding: "16px 32px",
              borderRight:
                i < stats.length - 1
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
            }}
          >
            <p
              style={{
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "#BB945A",
                marginBottom: "8px",
              }}
            >
              {s.number}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#A8A8A8",
                letterSpacing: "0.03em",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── THE PROBLEM ── */
const painPoints = [
  {
    num: "01",
    title: "Your team depends on you for everything",
    desc: "Every decision, every approval, every crisis flows through you. You are the ceiling of your own company.",
  },
  {
    num: "02",
    title: "AI feels like one more thing you should be doing",
    desc: "You know it matters, but between running the business and leading your team, there is no margin left to figure it out.",
  },
  {
    num: "03",
    title: "Growth keeps adding complexity instead of clarity",
    desc: "More revenue, more people, more problems. The business is growing but it is not getting easier.",
  },
];

function Problem() {
  return (
    <section
      id="learn-more"
      style={{
        background: "linear-gradient(180deg, rgba(5,33,52,0.9) 0%, rgba(5,33,52,0.7) 100%)",
        padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#BB945A",
            marginBottom: "16px",
          }}
        >
          Who This Is For
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#F0F0F0",
            marginBottom: "56px",
            maxWidth: "700px",
          }}
        >
          You built a real business. So why does it still feel this heavy?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {painPoints.map((p) => (
            <div
              key={p.num}
              style={{
                ...glassCard,
                borderTop: "2px solid #BB945A",
                padding: "36px 32px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#BB945A",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {p.num}
              </span>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#F0F0F0",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#A8A8A8",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── THE SOLUTION ── */
const features = [
  {
    num: "01",
    title: "Increase Profit with Operational Clarity",
    desc: "Identify the hidden inefficiencies draining your revenue and replace them with streamlined systems that compound over time.",
  },
  {
    num: "02",
    title: "Integrate AI Without Compromising Your Values",
    desc: "Learn exactly which AI tools to use, where to deploy them, and how to keep your faith and ethics at the center of every decision.",
  },
  {
    num: "03",
    title: "Build Systems Your Team Can Run Without You",
    desc: "Create documented, repeatable processes that free you from daily operations so you can focus on vision and growth.",
  },
];

function Solution() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
        padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#BB945A",
            marginBottom: "16px",
          }}
        >
          The Framework
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#F0F0F0",
            marginBottom: "40px",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
        >
          AI increases speed. Kingdom Intelligence determines dominion.
        </h2>

        {/* Quote block */}
        <div
          style={{
            ...glassCard,
            padding: "48px 40px",
            maxWidth: "800px",
            margin: "0 auto 64px",
          }}
        >
          <p
            style={{
              fontSize: "17px",
              color: "#A8A8A8",
              lineHeight: 1.7,
            }}
          >
            Inside this free 3-day live event, you will learn how to combine
            Spirit-led discernment with the right systems and AI tools to build a
            company that grows without depending entirely on you. This is not
            another productivity hack. This is a framework for dominion &mdash;
            where faith meets strategy and your business finally works the way it
            was designed to.
          </p>
        </div>

        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            textAlign: "left",
          }}
        >
          {features.map((f) => (
            <div key={f.num}>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#BB945A",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                {f.num}
              </span>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#F0F0F0",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#A8A8A8",
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHAT YOU WILL LEARN ── */
const checklist = [
  "Increase profit without adding complexity",
  "Build systems your team actually follows",
  "Use AI in alignment with your calling and values",
  "Make faster, Spirit-led decisions",
  "Scale without becoming the bottleneck",
];

function Learn() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #060a10 0%, #080c14 100%)",
        padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#BB945A",
            marginBottom: "16px",
          }}
        >
          Inside the Master Class
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#F0F0F0",
            marginBottom: "56px",
            maxWidth: "600px",
          }}
        >
          Three days. No fluff. Everything you need.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px 48px",
            marginBottom: "56px",
          }}
        >
          {checklist.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "12px 0",
              }}
            >
              <span
                style={{
                  color: "#BB945A",
                  fontSize: "22px",
                  lineHeight: "28px",
                  flexShrink: 0,
                }}
              >
                &#10003;
              </span>
              <span
                style={{
                  fontSize: "17px",
                  color: "#F0F0F0",
                  lineHeight: 1.7,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <a
          href={REGISTER_URL}
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #BB945A, #d4a96a)",
            color: "#050505",
            fontWeight: 600,
            padding: "18px 48px",
            borderRadius: "50px",
            border: "none",
            fontSize: "17px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Register Free &mdash; April 14&ndash;16
        </a>
      </div>
    </section>
  );
}

/* ── ABOUT STACI ── */
function About() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)",
        padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 400px", minWidth: "280px", order: 1 }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#BB945A",
              marginBottom: "16px",
            }}
          >
            Your Host
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#F0F0F0",
              marginBottom: "8px",
            }}
          >
            Staci Wallace
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#BB945A",
              marginBottom: "28px",
              lineHeight: 1.5,
            }}
          >
            CEO, Fueled By Fire &mdash; 8x Best-Selling Author &mdash;
            International Speaker
          </p>
          <p
            style={{
              fontSize: "17px",
              color: "#A8A8A8",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Staci Wallace has shared stages with five U.S. Presidents and spoken
            to hundreds of thousands of leaders across the globe. She is the CEO
            of Fueled By Fire, one of the nation&rsquo;s leading faith-based
            business coaching companies, and the architect of the Kingdom
            Intelligence framework. For over 35 years she has helped
            faith-driven entrepreneurs build profitable, purposeful companies
            without sacrificing family, faith, or freedom.
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#BB945A",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Big Business. Bold Faith. No Compromise.
          </p>
        </div>

        {/* Photo */}
        <div
          style={{
            flex: "0 1 400px",
            order: 2,
          }}
        >
          <div
            style={{
              ...glassCard,
              padding: "8px",
              overflow: "hidden",
              transform: "rotate(-2deg)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/images/staci-speaking.jpg"
              alt="Staci Wallace speaking"
              width={400}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ── */
const testimonials = [
  {
    name: "Kyler Kropf",
    company: "Saddlebrooke Life",
    quote:
      "We grew to $1M in our first 9 months and hit $10M within 3 years. The frameworks Staci teaches changed everything about how we operate.",
  },
  {
    name: "Dallas Marley",
    company: "",
    quote:
      "I paid off $83,000 in debt in under 12 months. The clarity and systems I learned gave me a completely new trajectory for my business and my life.",
  },
  {
    name: "Vangel Roberts",
    company: "Wade Roberts Plumbing",
    quote:
      "The transformation wasn\u2019t just in our business \u2014 it was in every area. Our company, our marriage, our faith. Everything shifted to a higher level.",
  },
];

function Testimonials() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
        padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#BB945A",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Results That Speak
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#F0F0F0",
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          Real leaders. Real results.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                ...glassCard,
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  color: "#F0F0F0",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#BB945A",
                    marginBottom: "4px",
                  }}
                >
                  {t.name}
                </p>
                {t.company && (
                  <p style={{ fontSize: "14px", color: "#A8A8A8" }}>
                    {t.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #BB945A 0%, #a07840 100%)",
        padding: "clamp(80px, 10vw, 120px) clamp(20px, 5vw, 80px)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            color: "#050505",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}
        >
          Your seat is waiting.
        </h2>
        <p
          style={{
            fontSize: "19px",
            color: "#050505",
            lineHeight: 1.6,
            marginBottom: "40px",
            opacity: 0.8,
          }}
        >
          Three free days. April 14&ndash;16, 2026. Built for faith-driven
          leaders ready for the next level.
        </p>
        <a
          href={REGISTER_URL}
          style={{
            display: "inline-block",
            background: "#050505",
            color: "#F0F0F0",
            fontWeight: 600,
            padding: "18px 56px",
            borderRadius: "50px",
            border: "none",
            fontSize: "17px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Save My Free Seat Now
        </a>
        <p
          style={{
            fontSize: "14px",
            color: "#050505",
            marginTop: "20px",
            opacity: 0.55,
          }}
        >
          Free registration. No credit card. Live online event.
        </p>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
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
              color: "#BB945A",
            }}
          >
            FBF
          </span>
          <span
            style={{
              color: "#A8A8A8",
              fontSize: "14px",
              marginLeft: "16px",
            }}
          >
            &copy; 2026 Fueled By Fire
          </span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="#"
            style={{
              color: "#A8A8A8",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              color: "#A8A8A8",
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

/* ── PAGE ── */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Learn />
      <About />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
