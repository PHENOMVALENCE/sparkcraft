/**
 * Abstract FinSpark hero mark: dispersed last-mile nodes on the left resolving
 * into an ordered ledger column on the right. Purely decorative — the hero
 * headline and supporting copy carry all meaning, so this is hidden from
 * assistive technology.
 */
export default function SignalMark({ className }: { className?: string }) {
  const nodes = [
    { x: 34, y: 46 },
    { x: 22, y: 118 },
    { x: 58, y: 186 },
    { x: 30, y: 254 },
    { x: 66, y: 318 },
    { x: 26, y: 372 },
  ];

  const ledgerRows = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <svg
      viewBox="0 0 420 420"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Convergence lines: scattered activity resolving toward a single record. */}
      <g stroke="#1FA0A8" strokeWidth="1" fill="none" opacity="0.55">
        {nodes.map((node) => (
          <path
            key={`link-${node.x}-${node.y}`}
            d={`M${node.x} ${node.y} C ${node.x + 90} ${node.y}, 150 210, 232 210`}
          />
        ))}
      </g>

      {/* Last-mile nodes. */}
      {nodes.map((node, index) => (
        <g key={`node-${node.x}-${node.y}`}>
          <circle cx={node.x} cy={node.y} r="5" fill="#1FA0A8" />
          {index % 2 === 0 && (
            <circle
              cx={node.x}
              cy={node.y}
              r="13"
              fill="none"
              stroke="#1FA0A8"
              strokeWidth="1"
              opacity="0.35"
            />
          )}
        </g>
      ))}

      {/* Junction: the point where dispersed activity becomes one file. */}
      <circle cx="232" cy="210" r="9" fill="#C8A951" />
      <circle
        cx="232"
        cy="210"
        r="22"
        fill="none"
        stroke="#C8A951"
        strokeWidth="1"
        opacity="0.4"
      />
      <line x1="232" y1="210" x2="288" y2="210" stroke="#C8A951" strokeWidth="1.5" />

      {/* Ordered ledger column. */}
      <rect
        x="288"
        y="86"
        width="108"
        height="248"
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1"
      />
      {ledgerRows.map((row) => (
        <g key={`row-${row}`}>
          <line
            x1="288"
            y1={86 + row * 31}
            x2="396"
            y2={86 + row * 31}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          <rect
            x="302"
            y={86 + row * 31 + 12}
            width={row % 3 === 0 ? 62 : row % 3 === 1 ? 44 : 78}
            height="6"
            fill={row === 3 ? "#C8A951" : "rgba(255,255,255,0.32)"}
          />
        </g>
      ))}
    </svg>
  );
}
