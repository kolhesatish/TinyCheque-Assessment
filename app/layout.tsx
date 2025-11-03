import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SEO Engine - Stop Wrestling with Content, Start Dominating Search",
  description: "Get 30 SEO-optimized articles published automatically each month, with your authentic brand voice intact—for less than what you'd pay a freelancer for one post.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
