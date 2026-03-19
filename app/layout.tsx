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
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          backgroundColor: "#050505",
          color: "#F0F0F0",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {children}
      </body>
    </html>
  );
}
