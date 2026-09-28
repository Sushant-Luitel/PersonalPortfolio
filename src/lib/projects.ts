export interface ProjectStat { value: string; label: string }
export interface Project {
  id: number; slug: string; title: string; type: string; role: string; tech: string[]; description: string;
  overview: string; architecture: string; implementation: string; stats: ProjectStat[]; accent: string;
  myRole: string[]; images: string[]; hoverImage: string; github: string; liveUrl: string;
}
const imageSets = {
  hoslog: ['/Projects/ecommerce/1.webp', '/Projects/ecommerce/2.webp'],
  amazon: ['/Projects/ecommerce/3.webp', '/Projects/ecommerce/4.webp'],
  spotify: ['/Projects/blogsite/1.webp', '/Projects/blogsite/2.webp'],
};
const projects: Project[] = [
  {
    id: 1, slug: 'hoslog', title: 'Hoslog', type: 'Production Web Platform', role: 'Frontend Engineer',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand'],
    description: 'A production multi-application platform for the Hoslog ecosystem, spanning customer-facing, administrative, affiliate, and SuperAdmin experiences.',
    overview: 'Hoslog is a production platform with customer, admin, affiliate, and SuperAdmin applications.',
    architecture: 'Worked across reusable frontend systems, API integrations, state management, localization, and responsive production workflows.',
    implementation: 'Implemented reservation workflows, customer experiences, administrative interfaces, Japanese and English localization, analytics, and event tracking.',
    stats: [{ value: '4', label: 'Frontend applications' }, { value: '2', label: 'Supported languages' }, { value: 'Production', label: 'Platform' }], accent: '#C45D3E',
    myRole: ['Owned frontend implementation from requirements analysis through production deployment.', 'Built reservation, customer, admin, affiliate, and platform-management workflows.', 'Maintained reusable component systems and complex server-state workflows using TanStack Query and Zustand.', 'Collaborated on API contracts, analytics, localization, code reviews, and technical guidance.'],
    images: imageSets.hoslog, hoverImage: '/Projects/hoslog/hover.jpg', github: '', liveUrl: 'https://hoslog.jp',
  },
  {
    id: 2, slug: 'amazon-inspired-ecommerce', title: 'Amazon-Inspired E-commerce Frontend', type: 'Frontend Project', role: 'Frontend Developer',
    tech: ['HTML', 'JavaScript', 'CSS'], description: "A responsive e-commerce frontend inspired by Amazon's user experience, featuring product browsing, search, cart management, and checkout flows.",
    overview: 'A responsive e-commerce frontend inspired by Amazon.', architecture: 'Built with HTML, JavaScript, and CSS.', implementation: 'Includes product browsing, search, cart management, and checkout flows.', stats: [], accent: '#2E7D6B', myRole: [], images: imageSets.amazon, hoverImage: '/Projects/amazon/hover.webp', github: '', liveUrl: 'https://sushant-luitel.github.io/Amazon-project/',
  },
  {
    id: 3, slug: 'spotify-inspired-music-ui', title: 'Spotify-Inspired Music Streaming UI', type: 'Frontend Project', role: 'Frontend Developer',
    tech: ['HTML', 'JavaScript', 'CSS'], description: 'A responsive music streaming interface inspired by Spotify, featuring playlist navigation, music player controls, and responsive layouts.',
    overview: 'A responsive music streaming interface inspired by Spotify.', architecture: 'Built with HTML, JavaScript, and CSS.', implementation: 'Includes playlist navigation, music player controls, and responsive layouts.', stats: [], accent: '#B08968', myRole: [], images: imageSets.spotify, hoverImage: '/Projects/spotify/hover.png', github: '', liveUrl: 'https://sushant-luitel.github.io/SpotifyClone/',
  },
];
export function getAllProjects(): Project[] { return projects; }
export function getProjectBySlug(slug: string): Project | undefined { return projects.find((p) => p.slug === slug); }
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } { const idx = projects.findIndex((p) => p.slug === slug); if (idx < 0) return {}; return { prev: projects[(idx - 1 + projects.length) % projects.length], next: projects[(idx + 1) % projects.length] }; }
