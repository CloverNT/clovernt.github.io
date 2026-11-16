import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import { appName, siteDescription, siteUrl } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} 文档`,
    template: `%s | ${appName}`,
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    siteName: appName,
    locale: 'zh_CN',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
