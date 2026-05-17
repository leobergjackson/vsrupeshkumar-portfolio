import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupesh Kumar V S — Building at the edge of what's possible",
  description:
    "3rd-year CSE engineer · LeetCode Knight · ZK protocols · RL benchmarks · LLM agents · Full Stack",
  keywords: [
    "Rupesh Kumar",
    "AI ML engineer",
    "Web3",
    "full stack",
    "portfolio",
    "LeetCode Knight",
    "ZK proofs",
    "RL benchmarks",
  ],
  authors: [{ name: "Rupesh Kumar V S" }],
  openGraph: {
    title: "Rupesh Kumar V S — Building at the Edge",
    description: "AI/ML Engineer · Web3 Builder · Full Stack · Open-Source Contributor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Kumar V S",
    description: "AI/ML Engineer · Web3 Builder · LeetCode Knight",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z' fill='%2300FFB2'/></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
