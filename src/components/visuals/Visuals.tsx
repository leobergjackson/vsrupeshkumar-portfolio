"use client";

import { ProjectBg } from "@/lib/data";

export const StarMascot = ({ light = false }: { light?: boolean }) => {
  const accent = light ? "#0E0E0E" : "#00FFB2";
  const inner = light ? "#FFFFFF" : "#0C1A18";
  const stroke = light ? "#1A1D24" : "#00FFB2";
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={light ? "#FFFFFF" : "#1A1D24"} />
          <stop offset="0.5" stopColor={light ? "#E8EAE3" : "#0A0D12"} />
          <stop offset="1" stopColor={light ? "#FFFFFF" : "#13161E"} />
        </linearGradient>
        <radialGradient id="starGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={accent} stopOpacity="0.7" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      {!light && <circle cx="200" cy="200" r="180" fill="url(#starGlow)" />}
      <g transform="translate(200 200)">
        <path
          d="M 0 -180 L 30 -30 L 180 0 L 30 30 L 0 180 L -30 30 L -180 0 L -30 -30 Z"
          fill="url(#starGrad)"
          stroke={stroke}
          strokeWidth="1.2"
          strokeOpacity={light ? 0.25 : 0.7}
        />
        <path
          d="M 0 -120 L 22 -22 L 120 0 L 22 22 L 0 120 L -22 22 L -120 0 L -22 -22 Z"
          fill={inner}
          stroke={accent}
          strokeWidth="0.6"
          strokeOpacity={light ? 0.2 : 0.5}
        />
        <g stroke={accent} strokeWidth="0.6" strokeOpacity={light ? 0.15 : 0.45} fill="none">
          <line x1="-150" y1="0" x2="150" y2="0" />
          <line x1="0" y1="-150" x2="0" y2="150" />
          <line x1="-100" y1="-100" x2="100" y2="100" strokeOpacity={light ? 0.1 : 0.25} />
          <line x1="-100" y1="100" x2="100" y2="-100" strokeOpacity={light ? 0.1 : 0.25} />
          <circle cx="0" cy="0" r="40" />
          <circle cx="0" cy="0" r="70" strokeOpacity={light ? 0.08 : 0.2} />
        </g>
        <g fill={accent}>
          <circle cx="0" cy="0" r="3" />
          <circle cx="40" cy="0" r="1.6" />
          <circle cx="-40" cy="0" r="1.6" />
          <circle cx="0" cy="40" r="1.6" />
          <circle cx="0" cy="-40" r="1.6" />
        </g>
      </g>
    </svg>
  );
};

export const StarGlyph = ({ size = 22, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
      fill={color}
    />
  </svg>
);

const BgZK = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="zkbg" cx="0.5" cy="0.5" r="0.7">
        <stop offset="0" stopColor="#0E1E26" />
        <stop offset="1" stopColor="#06090D" />
      </radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#zkbg)" />
    <g stroke="#00FFB2" strokeOpacity="0.25" strokeWidth="0.7" fill="none">
      {Array.from({ length: 60 }).map((_, i) => {
        const x1 = (i * 73) % 800;
        const y1 = (i * 41) % 450;
        const x2 = ((i + 7) * 113) % 800;
        const y2 = ((i + 7) * 67) % 450;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
    <g fill="#00FFB2">
      {Array.from({ length: 40 }).map((_, i) => {
        const cx = (i * 97) % 800;
        const cy = (i * 53) % 450;
        const r = i % 5 === 0 ? 3.5 : 1.4;
        return <circle key={i} cx={cx} cy={cy} r={r} opacity={i % 3 === 0 ? 0.9 : 0.5} />;
      })}
    </g>
    <g transform="translate(400 225)">
      <circle r="80" fill="none" stroke="#6C63FF" strokeOpacity="0.6" strokeWidth="1" />
      <circle r="120" fill="none" stroke="#6C63FF" strokeOpacity="0.25" strokeWidth="0.5" />
      <circle r="6" fill="#6C63FF" />
    </g>
  </svg>
);

const BgPOMDP = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="pomdpbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0A1626" />
        <stop offset="1" stopColor="#060A12" />
      </linearGradient>
      <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3D8BFD" opacity="0.6" />
      </marker>
    </defs>
    <rect width="800" height="450" fill="url(#pomdpbg)" />
    <g stroke="#3D8BFD" strokeOpacity="0.45" strokeWidth="0.8" fill="none">
      <path d="M 150 120 Q 280 80 410 140" markerEnd="url(#arr)" />
      <path d="M 410 140 Q 540 200 660 130" markerEnd="url(#arr)" />
      <path d="M 150 120 Q 200 250 280 320" markerEnd="url(#arr)" />
      <path d="M 410 140 Q 380 280 460 340" markerEnd="url(#arr)" />
      <path d="M 280 320 Q 380 380 460 340" markerEnd="url(#arr)" />
      <path d="M 660 130 Q 700 250 620 350" markerEnd="url(#arr)" />
      <path d="M 460 340 Q 540 360 620 350" markerEnd="url(#arr)" />
    </g>
    <g fill="#0E1A2C" stroke="#3D8BFD" strokeWidth="1.5">
      {[[150,120],[410,140],[660,130],[280,320],[460,340],[620,350]].map(([x,y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" />
          <text x={x} y={y+4} textAnchor="middle" fill="#9CD6FF" fontFamily="monospace" fontSize="11">S{i+1}</text>
        </g>
      ))}
    </g>
  </svg>
);

const BgRegime = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="800" height="450" fill="#0A0D14" />
    <rect x="280" y="50" width="220" height="350" fill="#00FFB2" opacity="0.07" />
    <line x1="280" y1="50" x2="280" y2="400" stroke="#00FFB2" strokeOpacity="0.4" strokeDasharray="3 4" />
    <line x1="500" y1="50" x2="500" y2="400" stroke="#00FFB2" strokeOpacity="0.4" strokeDasharray="3 4" />
    {[
      { c: "#00FFB2", a: 0.85, amp: 50, freq: 0.04, ph: 0, off: 230 },
      { c: "#6CFFD8", a: 0.4, amp: 40, freq: 0.05, ph: 1, off: 200 },
      { c: "#FFFFFF", a: 0.18, amp: 28, freq: 0.07, ph: 2, off: 250 },
      { c: "#FF6B35", a: 0.35, amp: 45, freq: 0.03, ph: 0.5, off: 180 },
    ].map((w, idx) => {
      let d = `M 0 ${w.off}`;
      for (let x = 0; x <= 800; x += 8) {
        const y = w.off + Math.sin(x * w.freq + w.ph) * w.amp + Math.sin(x * w.freq * 2.7 + w.ph) * (w.amp * 0.3);
        d += ` L ${x} ${y.toFixed(1)}`;
      }
      return <path key={idx} d={d} fill="none" stroke={w.c} strokeOpacity={w.a} strokeWidth="1.5" />;
    })}
    <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 40} x2="800" y2={i * 40} />
      ))}
    </g>
  </svg>
);

const BgStack = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="stackbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#161108" />
        <stop offset="1" stopColor="#0A0805" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#stackbg)" />
    <g stroke="#FF6B35" strokeOpacity="0.2" strokeWidth="0.5">
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 25 + 30} x2="800" y2={i * 25 + 30} />
      ))}
    </g>
    <g stroke="rgba(255,107,53,0.4)" strokeWidth="0.8" fill="none">
      <rect x="100" y="80" width="200" height="60" rx="8" />
      <rect x="320" y="80" width="200" height="60" rx="8" />
      <rect x="540" y="80" width="160" height="60" rx="8" />
      <rect x="100" y="170" width="600" height="60" rx="8" />
      <rect x="100" y="260" width="280" height="120" rx="8" />
      <rect x="400" y="260" width="300" height="120" rx="8" />
    </g>
    <g fill="#FF6B35">
      <circle cx="120" cy="110" r="2" />
      <circle cx="340" cy="110" r="2" />
      <circle cx="560" cy="110" r="2" />
    </g>
    <g fontFamily="monospace" fontSize="9" fill="rgba(255,107,53,0.6)">
      <text x="116" y="113">api/auth</text>
      <text x="336" y="113">api/users</text>
      <text x="556" y="113">api/orgs</text>
      <text x="116" y="203">postgres :: schema.sql</text>
      <text x="116" y="290">jwt.session</text>
      <text x="416" y="290">oauth.flow</text>
    </g>
  </svg>
);

const BgTopology = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="topobg" cx="0.5" cy="0.5" r="0.7">
        <stop offset="0" stopColor="#15102A" />
        <stop offset="1" stopColor="#070510" />
      </radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#topobg)" />
    <g stroke="#6C63FF" strokeOpacity="0.35" strokeWidth="0.6" fill="rgba(108,99,255,0.05)">
      {Array.from({ length: 14 }).map((_, row) =>
        Array.from({ length: 18 }).map((__, col) => {
          const x = col * 48 + (row % 2 ? 24 : 0);
          const y = row * 36;
          const a = `${x},${y}`;
          const b = `${x + 24},${y + 36}`;
          const c = `${x + 48},${y}`;
          const d = `${x + 24},${y - 36}`;
          return (
            <g key={`${row}-${col}`}>
              <polygon points={`${a} ${b} ${c}`} />
              <polygon points={`${a} ${c} ${d}`} fillOpacity="0.02" />
            </g>
          );
        })
      )}
    </g>
    <g fill="#00FFB2">
      {Array.from({ length: 30 }).map((_, i) => {
        const cx = (i * 137) % 800;
        const cy = ((i * 89) % 450);
        return <circle key={i} cx={cx} cy={cy} r="1.6" opacity={(i % 4) * 0.25} />;
      })}
    </g>
  </svg>
);

const BgVectors = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="vecbg" cx="0.5" cy="0.5" r="0.6">
        <stop offset="0" stopColor="#0E1822" />
        <stop offset="1" stopColor="#05080D" />
      </radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#vecbg)" />
    {[
      { cx: 200, cy: 180, color: "#00FFB2", count: 28 },
      { cx: 540, cy: 140, color: "#6C63FF", count: 22 },
      { cx: 600, cy: 320, color: "#00FFB2", count: 26 },
      { cx: 280, cy: 340, color: "#FF6B35", count: 18 },
    ].map((cluster, idx) => (
      <g key={idx}>
        {Array.from({ length: cluster.count }).map((_, i) => {
          const angle = (i * 137.5) * Math.PI / 180;
          const r = Math.sqrt(i) * 12;
          const x = cluster.cx + Math.cos(angle) * r;
          const y = cluster.cy + Math.sin(angle) * r;
          return <circle key={i} cx={x} cy={y} r={1.6 + (i % 3) * 0.4} fill={cluster.color} opacity={0.55 + (i % 4) * 0.1} />;
        })}
        <circle cx={cluster.cx} cy={cluster.cy} r="3.5" fill={cluster.color} />
      </g>
    ))}
    <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.5">
      <line x1="200" y1="180" x2="540" y2="140" />
      <line x1="540" y1="140" x2="600" y2="320" />
      <line x1="600" y1="320" x2="280" y2="340" />
      <line x1="280" y1="340" x2="200" y2="180" />
    </g>
  </svg>
);

const BgNeural = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="neubg" cx="0.5" cy="0.5" r="0.7">
        <stop offset="0" stopColor="#003322" stopOpacity="1" />
        <stop offset="0.4" stopColor="#001A11" />
        <stop offset="1" stopColor="#040706" />
      </radialGradient>
    </defs>
    <rect width="800" height="450" fill="url(#neubg)" />
    <circle cx="400" cy="225" r="180" fill="rgba(0,255,178,0.18)" />
    <circle cx="400" cy="225" r="100" fill="rgba(0,255,178,0.25)" />
    <circle cx="400" cy="225" r="40" fill="#00FFB2" opacity="0.5" />
    <g stroke="#00FFB2" strokeOpacity="0.4" strokeWidth="0.5" fill="none">
      {[120, 200, 280, 360].map((y0, i0) =>
        [180, 260, 340].map((y1, i1) =>
          [240, 320].map((y2, i2) => (
            <g key={`${i0}-${i1}-${i2}`}>
              <line x1="120" y1={y0} x2="350" y2={y1} />
              <line x1="350" y1={y1} x2="580" y2={y2} />
            </g>
          ))
        )
      )}
    </g>
    <g fill="#00FFB2">
      {[120, 200, 280, 360].map((y, i) => <circle key={`a${i}`} cx="120" cy={y} r="5" />)}
      {[180, 260, 340].map((y, i) => <circle key={`b${i}`} cx="350" cy={y} r="5" />)}
      {[240, 320].map((y, i) => <circle key={`c${i}`} cx="580" cy={y} r="5" />)}
    </g>
  </svg>
);

export const BgMap: Record<ProjectBg, React.FC> = {
  zk: BgZK,
  pomdp: BgPOMDP,
  regime: BgRegime,
  stack: BgStack,
  topology: BgTopology,
  vectors: BgVectors,
  neural: BgNeural,
};

export const BgWorldMap = () => (
  <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="400" height="280" fill="#0A0D14" />
    <g fill="rgba(255,255,255,0.15)">
      {Array.from({ length: 600 }).map((_, i) => {
        const x = (i * 17) % 400;
        const y = ((i * 11) % 280);
        return <circle key={i} cx={x} cy={y} r="0.6" />;
      })}
    </g>
    {[
      { x: 280, y: 150 },
      { x: 180, y: 100 },
      { x: 330, y: 130 },
    ].map((p, i) => (
      <g key={i}>
        <circle cx={p.x} cy={p.y} r="14" fill="rgba(0,255,178,0.15)" />
        <circle cx={p.x} cy={p.y} r="6" fill="rgba(0,255,178,0.4)" />
        <circle cx={p.x} cy={p.y} r="3" fill="#00FFB2" />
      </g>
    ))}
    <g stroke="rgba(0,255,178,0.4)" strokeWidth="0.8" strokeDasharray="2 3" fill="none">
      <path d="M 280 150 Q 230 50 180 100" />
      <path d="M 280 150 Q 320 80 330 130" />
      <path d="M 180 100 Q 250 30 330 130" />
    </g>
  </svg>
);

export const BgTerminal = () => (
  <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="400" height="280" fill="#06090D" />
    <g fontFamily="monospace" fontSize="9" fill="#00FFB2">
      {[
        "$ git checkout -b feat/zk-proof",
        "$ npm install hydra-sdk@latest",
        "✓ compiling circuit...",
        "✓ generating proof...",
        "→ proof verified ✓",
        "$ python -m rl.train --env crisis",
        "  ep 0142  reward: 0.847",
        "  ep 0143  reward: 0.872",
        "$ docker compose up -d",
        "✓ hephaestus-api started",
        "$ curl /api/health",
        '{ "status": "ok" }',
        "$ leetcode submit 1100",
        "✓ accepted · 12 ms",
      ].map((line, i) => (
        <text
          key={i}
          x="18"
          y={24 + i * 17}
          opacity={Math.max(0.25, 1 - i * 0.06)}
        >
          {line}
        </text>
      ))}
    </g>
    <rect x="0" y="0" width="400" height="40" fill="rgba(0,0,0,0.4)" />
  </svg>
);

export const BgMascotTile = () => (
  <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="masGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#00FFB2" stopOpacity="0.35" />
        <stop offset="1" stopColor="#00FFB2" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="400" height="280" fill="#0A0D14" />
    <circle cx="200" cy="140" r="120" fill="url(#masGlow)" />
    <g transform="translate(200 140) scale(0.65)">
      <path
        d="M 0 -180 L 30 -30 L 180 0 L 30 30 L 0 180 L -30 30 L -180 0 L -30 -30 Z"
        fill="#1A1D24"
        stroke="#00FFB2"
        strokeWidth="1.2"
      />
      <path
        d="M 0 -120 L 22 -22 L 120 0 L 22 22 L 0 120 L -22 22 L -120 0 L -22 -22 Z"
        fill="#0C1A18"
        stroke="#00FFB2"
        strokeWidth="0.5"
        strokeOpacity="0.5"
      />
    </g>
  </svg>
);

export const BgSpeak = () => (
  <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <linearGradient id="speakbg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2A1810" />
        <stop offset="1" stopColor="#0A0805" />
      </linearGradient>
    </defs>
    <rect width="400" height="280" fill="url(#speakbg)" />
    <ellipse cx="200" cy="100" rx="180" ry="80" fill="rgba(255,180,80,0.18)" />
    <g fill="rgba(255,140,60,0.5)">
      <circle cx="200" cy="160" r="18" />
      <rect x="180" y="180" width="40" height="50" rx="4" />
    </g>
    <g fill="rgba(255,170,90,0.3)">
      {Array.from({ length: 50 }).map((_, i) => {
        const x = 60 + (i * 13) % 280;
        const y = 220 + ((i * 7) % 50);
        return <circle key={i} cx={x} cy={y} r="3" />;
      })}
    </g>
  </svg>
);
