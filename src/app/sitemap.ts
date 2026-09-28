import type  MetadataRoute  from 'next';
import { getAllProjects } from '@/lib/projects';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${site.url}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projects,
  ];
}
