import { ImageResponse } from 'next/og';

export const alt = 'Sushant Luitel — Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 82px',
          background: 'linear-gradient(135deg, #0f0e0c 0%, #1b1714 58%, #3a2119 100%)',
          color: '#e8e4de',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: '#c45d3e',
              boxShadow: '0 0 36px rgba(196, 93, 62, 0.8)',
            }}
          />
          <span style={{ fontSize: 24, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Frontend Developer
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 800, letterSpacing: '-0.055em' }}>
            Sushant Luitel
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#b7aea5' }}>
            React · Next.js · Astro · TypeScript
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#c9b8aa' }}>
          <span>Kathmandu, Nepal</span>
          <span>sushantluitel.com.np</span>
        </div>
      </div>
    ),
    size,
  );
}
