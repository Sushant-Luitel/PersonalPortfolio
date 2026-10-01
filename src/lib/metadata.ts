import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://sushantluitel.com.np'),
  title: {
    default: 'Sushant Luitel — Frontend Developer',
    template: '%s | Sushant Luitel',
  },
  description:
    'Frontend developer in Nepal building production web experiences with React, Next.js, Astro, and TypeScript. Explore my work.',
  keywords: [
    'Sushant Luitel',
    'Web Developer',
    'Frontend Developer',
    'Frontend Engineer',
    'Next.js',
    'React',
    'Astro',
    'TypeScript',
    'JavaScript',
    'Frontend Engineering',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Sushant Luitel',
      url: 'https://sushantluitel.com.np/',
    },
  ],
  creator: 'Sushant Luitel',
  publisher: 'Sushant Luitel',
  category: 'technology',
  alternates: {
    canonical: 'https://sushantluitel.com.np/',
  },
  icons: {
    icon: '/brand-logo.png',
    shortcut: '/brand-logo.png',
    apple: '/brand-logo.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Sushant Luitel — Frontend Developer',
    description:
      'Frontend developer in Nepal building production web experiences with React, Next.js, Astro, and TypeScript. Explore my work.',
    url: 'https://sushantluitel.com.np/',
    siteName: 'Sushant Luitel Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sushant Luitel — Frontend Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushant Luitel — Frontend Developer',
    description:
      'Frontend developer in Nepal building production web experiences with React, Next.js, Astro, and TypeScript. Explore my work.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

