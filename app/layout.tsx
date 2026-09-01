import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl =
  process.env.SITE_URL ??
  'https://yang-ying-portfolio-2026.y26050266.chatgpt.site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '杨颖 | Game Environment & AI Visual Designer',
  description:
    '杨颖的个人作品集：游戏场景建模、AI 视觉设计与视觉叙事。',
  openGraph: {
    title: '杨颖 | Game Environment & AI Visual Designer',
    description: '游戏场景建模、AI 视觉设计与视觉叙事个人作品集。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '杨颖 | Game Environment & AI Visual Designer',
    description: '游戏场景建模、AI 视觉设计与视觉叙事个人作品集。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
