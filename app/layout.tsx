import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "showme.sites - Websites That Convert",
  description:
    "Premium landing pages, marketing sites, and SaaS MVPs built with Next.js, Supabase, and Vercel. Designed to convert. Built to scale.",
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
