/**
 * A scatter of noisy points with a least-squares line fitted through them.
 * The points are seeded so server and client always render the same picture,
 * and the line is computed from them rather than hand-drawn.
 */

const WIDTH = 480;
const HEIGHT = 360;
const PAD = 36;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildData() {
  const rand = mulberry32(2026);
  const points: { x: number; y: number }[] = [];
  const count = 44;

  for (let i = 0; i < count; i++) {
    const x = PAD + 8 + (i / (count - 1)) * (WIDTH - PAD * 2 - 16);
    const trend = HEIGHT - PAD - 24 - ((x - PAD) / (WIDTH - PAD * 2)) * (HEIGHT - PAD * 2 - 60);
    const noise = (rand() + rand() + rand() - 1.5) * 64;
    points.push({
      x: Math.round(x * 10) / 10,
      y: Math.round((trend + noise) * 10) / 10,
    });
  }

  const n = points.length;
  const mx = points.reduce((s, p) => s + p.x, 0) / n;
  const my = points.reduce((s, p) => s + p.y, 0) / n;
  const slope =
    points.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0) /
    points.reduce((s, p) => s + (p.x - mx) ** 2, 0);
  const intercept = my - slope * mx;

  const x1 = PAD;
  const x2 = WIDTH - PAD;

  return {
    points,
    line: {
      x1,
      y1: Math.round((intercept + slope * x1) * 10) / 10,
      x2,
      y2: Math.round((intercept + slope * x2) * 10) / 10,
    },
  };
}

const { points, line } = buildData();

export function FitPlot({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Scatter plot of noisy data points with a straight line fitted through them, trending upward."
        className="h-auto w-full"
      >
        <path
          d={`M${PAD} ${PAD / 2} V${HEIGHT - PAD} H${WIDTH - PAD / 2}`}
          fill="none"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        {[1, 2, 3].map((i) => (
          <line
            key={i}
            x1={PAD}
            x2={WIDTH - PAD / 2}
            y1={PAD / 2 + ((HEIGHT - PAD - PAD / 2) / 4) * i}
            y2={PAD / 2 + ((HEIGHT - PAD - PAD / 2) / 4) * i}
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.7"
          />
        ))}

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill="var(--signal)"
            opacity="0.85"
            className="fit-point"
            style={{ animationDelay: `${i * 18}ms` }}
          />
        ))}

        <line
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          className="fit-line"
        />
      </svg>
      <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
        {/* y = signal + noise */}
      </figcaption>
    </figure>
  );
}
