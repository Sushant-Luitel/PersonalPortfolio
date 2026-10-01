import { site, socialList } from '@/lib/site';

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;
const profilePageId = `${site.url}/#profile-page`;
const sameAs = socialList.map((social) => social.href).filter(Boolean);

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      url: `${site.url}/`,
      image: `${site.url}/sushant-luitel-portrait.png`,
      jobTitle: 'Frontend Engineer',
      description:
        'Frontend engineer in Kathmandu, Nepal, building production web applications with React, Next.js, Astro, and TypeScript.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressCountry: 'NP',
      },
      knowsAbout: [
        'Frontend Development',
        'Web Development',
        'React',
        'Next.js',
        'Astro',
        'TypeScript',
      ],
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${site.url}/`,
      name: `${site.name} Portfolio`,
      description: site.tagline,
      inLanguage: 'en',
      author: { '@id': personId },
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': profilePageId,
      url: `${site.url}/`,
      name: `${site.name} — Frontend Developer`,
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      inLanguage: 'en',
    },
  ],
};

export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
