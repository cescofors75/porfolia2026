import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 40%, #10b981 100%)',
          borderRadius: '10px',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(16, 185, 129, 0.18)',
            border: '1px solid rgba(255,255,255,0.28)',
            color: '#f8fafc',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '-0.08em',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          CF
        </div>
      </div>
    ),
    { ...size }
  );
}
