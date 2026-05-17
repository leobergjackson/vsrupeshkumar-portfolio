import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/Navbar';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Rupesh Kumar V S — AI/ML Engineer, Web3 Builder, Full Stack',
  description:
    '3rd-year CSE engineer · LeetCode Knight · ZK protocols · RL benchmarks · LLM agents · Full Stack · Open-source contributor.',
  keywords: ['Rupesh Kumar', 'AI ML engineer', 'Web3', 'full stack', 'portfolio', 'LeetCode Knight'],
  authors: [{ name: 'Rupesh Kumar V S' }],
  openGraph: {
    title: 'Rupesh Kumar V S — Building at the Edge',
    description: 'AI/ML Engineer · Web3 Builder · Full Stack · Open-Source Contributor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rupesh Kumar V S',
    description: 'AI/ML Engineer · Web3 Builder · LeetCode Knight',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg-primary text-text-primary antialiased" data-theme="dark">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" disableTransitionOnChange>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
