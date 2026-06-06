import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/*
          Set `js` on <html> before first paint. globals.css only hides
          `.reveal` elements under `html.js`, so visitors without JS (or if
          hydration fails) still see all content instead of a blank page.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
