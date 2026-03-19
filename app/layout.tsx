import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kingdom Intelligence Master Class | Fueled By Fire",
  description:
    "Free 3-day live online event for faith-driven business owners. April 14-16, 2026. Learn to combine Spirit-led discernment with AI and systems to scale your company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(184,148,63,0.3); }
  50% { box-shadow: 0 0 40px rgba(184,148,63,0.6); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes countPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes strokeDraw {
  from { stroke-dashoffset: 50; }
  to { stroke-dashoffset: 0; }
}
@keyframes gentleBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.nav-link { position: relative; text-decoration: none; color: #555555; font-size: 14px; font-weight: 500; transition: color 0.3s; }
.nav-link:hover { color: #B8943F; }
.nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #B8943F; transition: width 0.3s; }
.nav-link:hover::after { width: 100%; }

.nav-link-light { position: relative; text-decoration: none; color: #C8C8C8; font-size: 14px; font-weight: 500; transition: color 0.3s; }
.nav-link-light:hover { color: #B8943F; }
.nav-link-light::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #B8943F; transition: width 0.3s; }
.nav-link-light:hover::after { width: 100%; }

.fbf-logo { display: inline-block; font-weight: 700; font-size: 20px; letter-spacing: 3px; color: #B8943F; background: linear-gradient(90deg, #B8943F, #D4AD4A, #B8943F); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.fbf-logo:hover { animation: shimmer 2s linear infinite; }

.hero-cta { animation: pulse 3s ease-in-out infinite; }

.light-card-hover { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.light-card-hover:hover { transform: translateY(-4px); border-color: #B8943F !important; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }

.glass-card-hover { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.glass-card-hover:hover { transform: translateY(-8px); border-color: rgba(184,148,63,0.3) !important; box-shadow: 0 12px 40px rgba(184,148,63,0.2); }

.testimonial-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.testimonial-card:hover { transform: translateY(-8px); border-color: rgba(184,148,63,0.3) !important; box-shadow: 0 12px 40px rgba(184,148,63,0.2); }

.feature-col { position: relative; }
.feature-col::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, #B8943F, #D4AD4A); transition: width 0.4s ease; }
.feature-col:hover::after { width: 60px; }

.final-cta-btn { transition: all 0.3s ease; }
.final-cta-btn:hover { background: #B8943F !important; color: #0d0d0d !important; }

.section-reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
.section-reveal.visible { opacity: 1; transform: translateY(0); }
`,
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          backgroundColor: "#FAFAF8",
          color: "#111111",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {children}
      </body>
    </html>
  );
}
