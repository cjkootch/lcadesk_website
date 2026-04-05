"use client";

interface GeometricBgProps {
  variant?: "grid" | "topology" | "nodes" | "waves" | "hexagons" | "circuits";
  className?: string;
}

export default function GeometricBg({ variant = "grid", className = "" }: GeometricBgProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === "grid" && <GridPattern />}
      {variant === "topology" && <TopologyPattern />}
      {variant === "nodes" && <NodesPattern />}
      {variant === "waves" && <WavesPattern />}
      {variant === "hexagons" && <HexagonsPattern />}
      {variant === "circuits" && <CircuitsPattern />}
    </div>
  );
}

function GridPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        </pattern>
        <linearGradient id="grid-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="text-text-primary" />
      <rect width="100%" height="100%" fill="url(#grid-fade)" />
      <circle cx="25%" cy="30%" r="120" fill="var(--color-accent)" opacity="0.04" />
      <circle cx="75%" cy="70%" r="80" fill="var(--color-accent)" opacity="0.03" />
    </svg>
  );
}

function TopologyPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="topo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.02" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#topo-grad)" />
      {[200, 300, 400, 500, 600].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} Q300 ${y - 40 + i * 15} 600 ${y + 20 - i * 10} T1200 ${y - 10 + i * 8}`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          opacity={0.06 + i * 0.01}
        />
      ))}
      {[
        [180, 280], [420, 350], [680, 300], [950, 420], [300, 500],
        [550, 480], [820, 380], [150, 400], [700, 550], [1050, 300],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={2} fill="var(--color-accent)" opacity={0.15 + (i % 3) * 0.05} />
      ))}
    </svg>
  );
}

function NodesPattern() {
  const nodes = [
    { x: 150, y: 200 }, { x: 350, y: 150 }, { x: 550, y: 280 },
    { x: 750, y: 180 }, { x: 950, y: 300 }, { x: 250, y: 400 },
    { x: 450, y: 450 }, { x: 650, y: 380 }, { x: 850, y: 480 },
    { x: 1050, y: 200 }, { x: 100, y: 550 }, { x: 500, y: 600 },
    { x: 800, y: 580 }, { x: 1100, y: 450 }, { x: 300, y: 300 },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8],
    [1, 14], [14, 6], [3, 9], [4, 13], [5, 10], [6, 11], [7, 12],
    [2, 7], [8, 13], [10, 11], [11, 12],
  ];

  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 700">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.08"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="12" fill="var(--color-accent)" opacity="0.04" />
          <circle cx={n.x} cy={n.y} r="3" fill="var(--color-accent)" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

function WavesPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="wave-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.04" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={i}
          d={`M0 ${300 + i * 50} C200 ${250 + i * 50} 400 ${350 + i * 50} 600 ${300 + i * 50} S1000 ${250 + i * 50} 1200 ${300 + i * 50}`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.2"
          opacity={0.04 + i * 0.008}
        />
      ))}
      <rect width="100%" height="100%" fill="url(#wave-grad)" />
    </svg>
  );
}

function HexagonsPattern() {
  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M${pts.join("L")}Z`;
  };

  const hexes: [number, number][] = [];
  const r = 50;
  const dx = r * Math.sqrt(3);
  const dy = r * 1.5;
  for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 25; col++) {
      const x = col * dx + (row % 2 === 1 ? dx / 2 : 0);
      const y = row * dy;
      hexes.push([x, y]);
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {hexes.map(([x, y], i) => (
        <path
          key={i}
          d={hexPath(x, y, r)}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
          opacity={0.05 + (i % 7 === 0 ? 0.03 : 0)}
        />
      ))}
      <circle cx="40%" cy="50%" r="200" fill="var(--color-accent)" opacity="0.03" />
    </svg>
  );
}

function CircuitsPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 700">
      {[150, 250, 350, 450, 550].map((y, i) => (
        <g key={`h-${i}`}>
          <line x1={100 + i * 50} y1={y} x2={500 + i * 80} y2={y}
            stroke="var(--color-accent)" strokeWidth="1" opacity="0.06" />
          <rect x={500 + i * 80} y={y - 4} width="8" height="8" rx="2"
            fill="var(--color-accent)" opacity="0.1" />
        </g>
      ))}
      {[300, 500, 700, 900].map((x, i) => (
        <g key={`v-${i}`}>
          <line x1={x} y1={100 + i * 30} x2={x} y2={400 + i * 40}
            stroke="var(--color-accent)" strokeWidth="1" opacity="0.06" />
          <circle cx={x} cy={100 + i * 30} r="3" fill="var(--color-accent)" opacity="0.12" />
          <circle cx={x} cy={400 + i * 40} r="3" fill="var(--color-accent)" opacity="0.12" />
        </g>
      ))}
      {[
        "M300 250 L300 350 L500 350",
        "M500 150 L500 250 L700 250",
        "M700 350 L700 450 L900 450",
        "M900 250 L900 300 L1050 300",
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.07" />
      ))}
    </svg>
  );
}
