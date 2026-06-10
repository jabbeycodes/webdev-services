import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShowMe Web & App — Websites & Mobile Apps That Ship Fast",
  description:
    "ShowMe Web & App builds high-converting websites, marketing sites, and cross-platform mobile apps with Next.js, Flutter, Supabase, and Vercel. You own everything.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
