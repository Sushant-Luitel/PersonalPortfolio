/**
 * @license
 * Copyright (c) 2026 Sushant Luitel. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 * Project: Portfolio
 * Author: Sushant Luitel
 */

import { Geist, Geist_Mono, Space_Grotesk, Instrument_Serif } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import { siteMetadata } from '@/lib/metadata';
import { GoogleAnalytics } from '@next/third-parties/google';
import AnalyticsLoader from '@/components/providers/AnalyticsLoader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  preload: true,
  display: 'swap',
});
export const metadata = siteMetadata;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="The personal portfolio of Sushant Luitel, a frontend engineer building production web applications with React, Next.js, Astro, and TypeScript."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased bg-cream`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ClientLayout>{children}</ClientLayout>
        <AnalyticsLoader enabled={enableAnalytics} />
        {enableAnalytics && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

