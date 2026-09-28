export const site = {
  name: 'Sushant Luitel', firstName: 'Sushant', lastName: 'Luitel', handle: 'sushant-luitel', brand: 'Sushant Luitel',
  email: '', location: 'Kathmandu, Nepal', timeZone: 'Asia/Katmandu', timeZoneLabel: 'NPT', url: 'https://sushantluitel.com.np',
  tagline: 'Frontend Engineer building interactive digital experiences with React and Next.js.',
  roles: ['Frontend Engineer', 'React & Next.js Engineer', 'Creative Developer'],
} as const;
export type SocialKey = 'github' | 'linkedin' | 'instagram' | 'source';
export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/Sushant-Luitel' }, linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sushant-luitel/' }, instagram: { label: 'Instagram', href: '' }, source: { label: 'Source Code', href: 'https://github.com/Sushant-Luitel' },
};
export const socialList = Object.values(socials).filter((social) => social.href);
export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true }, { name: 'About', href: '/#about' }, { name: 'Services', href: '/#services' }, { name: 'Work', href: '/#projects' }, { name: 'Contact', href: '/#contact' },
] as const;
