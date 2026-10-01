import ProjectDetails from '@/components/project/ProjectDetails';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { site } from '@/lib/site';
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  const socialDescription =
    project.description.length > 125
      ? `${project.description.slice(0, 122).trimEnd()}…`
      : project.description;
  return {
    title: project.title,
    description: socialDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Sushant Luitel`,
      description: socialDescription,
      url: `${site.url}/projects/${project.slug}`,
      siteName: 'Sushant Luitel Portfolio',
      images: [
        {
          url: project.hoverImage || project.images[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Sushant Luitel`,
      description: socialDescription,
      images: [project.hoverImage || project.images[0]],
    },
  };
}
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetails key={project.slug} project={project} />;
}
