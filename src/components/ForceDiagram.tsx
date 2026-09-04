export default function ForceDiagram() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="h-auto w-full rounded-xl border border-gold/20 bg-ink-deep"
      role="img"
      aria-label="関ヶ原 東西勢力の概念図"
    >
      <defs>
        <linearGradient id="eastGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="westGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a1515" />
          <stop offset="100%" stopColor="#1a0a0a" />
        </linearGradient>
      </defs>

      <rect x="30" y="40" width="340" height="320" rx="12" fill="url(#eastGrad)" stroke="#c9a227" strokeWidth="1.5" />
      <rect x="430" y="40" width="340" height="320" rx="12" fill="url(#westGrad)" stroke="#c9a227" strokeWidth="1.5" />

      <text x="200" y="78" textAnchor="middle" fill="#e8d5a3" fontSize="22" fontFamily="serif">
        東軍（徳川方）
      </text>
      <text x="600" y="78" textAnchor="middle" fill="#e8d5a3" fontSize="22" fontFamily="serif">
        西軍（石田方）
      </text>

      <text x="200" y="120" textAnchor="middle" fill="#94a3b8" fontSize="12">
        総大将：徳川家康
      </text>
      <text x="600" y="120" textAnchor="middle" fill="#94a3b8" fontSize="12">
        総大将（名目）：毛利輝元
      </text>

      {[
        ["福島正則", 160],
        ["黒田長政", 195],
        ["本多忠勝", 230],
        ["井伊直政", 265],
        ["その他譜代・外様", 300],
      ].map(([label, y]) => (
        <g key={label as string}>
          <rect x="70" y={(y as number) - 18} width="260" height="28" rx="6" fill="#0b1220" stroke="#334155" />
          <text x="200" y={y as number} textAnchor="middle" fill="#e2e8f0" fontSize="13">
            {label as string}
          </text>
        </g>
      ))}

      {[
        ["石田三成（中核）", 160],
        ["宇喜多秀家", 195],
        ["大谷吉継", 230],
        ["小早川秀秋※", 265],
        ["毛利・その他", 300],
      ].map(([label, y]) => (
        <g key={label as string}>
          <rect
            x="470"
            y={(y as number) - 18}
            width="260"
            height="28"
            rx="6"
            fill="#1a0f0f"
            stroke={String(label).includes("※") ? "#f59e0b" : "#7f1d1d"}
          />
          <text x="600" y={y as number} textAnchor="middle" fill="#e2e8f0" fontSize="13">
            {label as string}
          </text>
        </g>
      ))}

      <path d="M370 200 H430" stroke="#c9a227" strokeWidth="2" strokeDasharray="6 4" />
      <text x="400" y="190" textAnchor="middle" fill="#c9a227" fontSize="11">
        対陣
      </text>

      <text x="400" y="390" textAnchor="middle" fill="#fbbf24" fontSize="12">
        ※小早川秀秋は開戦後に東軍へ寝返り（学習上の注記）
      </text>
    </svg>
  );
}
