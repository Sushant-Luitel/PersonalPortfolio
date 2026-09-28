import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://sushantluitel.com.np'),
  title: {
    default: 'Sushant Luitel — Frontend Developer',
    template: '%s | Sushant Luitel',
  },
  description:
    'The personal portfolio of Sushant Luitel, a frontend developer in Nepal building production web applications with React, Next.js, Astro, and TypeScript.',
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
      'The personal portfolio of Sushant Luitel, a frontend developer building production web applications with React, Next.js, Astro, and TypeScript.',
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
      'The personal portfolio of Sushant Luitel, a frontend developer building production web applications with React, Next.js, Astro, and TypeScript.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

