import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Sushant Luitel - Frontend Engineer',
    template: '%s | Sushant Luitel',
  },
  description:
    'Portfolio of Sushant Luitel, a frontend engineer building production React and Next.js applications.',
  keywords: [
    'Sushant Luitel',
    'Web Developer',
    'Frontend Developer',
    'Frontend Engineer',
    'Next.js',
    'React',
    'JavaScript',
    'Frontend Engineering',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Sushant Luitel',
    },
  ],
  creator: 'Sushant Luitel',
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/logo.webp',
  },
  openGraph: {
    title: 'Sushant Luitel - Frontend Engineer',
    description:
      'Portfolio of Sushant Luitel, Frontend Engineer specializing in React and Next.js.',
    siteName: 'Sushant Luitel Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sushant Luitel - Frontend Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushant Luitel - Frontend Engineer',
    description:
      'Portfolio of Sushant Luitel, Frontend Engineer specializing in React and Next.js.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

