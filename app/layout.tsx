import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Script from "next/script";

export const metadata: Metadata = {
  title: "Geek Online | Official Support",
  description: `24/7 expert technical support from ${siteConfig.name}.`,
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
      <Script
          src="//code.jivosite.com/widget/vJqYrojBMM" 
          strategy="afterInteractive"
        />
        <Header />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Footer />
      </body>
    </html>
  )
}
