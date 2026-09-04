export default function BattlefieldMap() {
  return (
    <svg
      viewBox="0 0 900 560"
      className="h-auto w-full rounded-xl border border-gold/20 bg-[#0b100e]"
      role="img"
      aria-label="関ヶ原戦場の学習用簡易配置図"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f2a24" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="900" height="560" fill="#0b100e" />
      <rect width="900" height="560" fill="url(#grid)" />

      {/* hills */}
      <ellipse cx="160" cy="120" rx="110" ry="55" fill="#1a2a20" stroke="#3d5a45" />
      <text x="160" y="125" textAnchor="middle" fill="#9cae9a" fontSize="13">
        北の山地
      </text>

      <ellipse cx="720" cy="140" rx="100" ry="50" fill="#1a2a20" stroke="#3d5a45" />
      <text x="720" y="145" textAnchor="middle" fill="#9cae9a" fontSize="13">
        東側丘陵
      </text>

      <ellipse cx="700" cy="430" rx="120" ry="60" fill="#243528" stroke="#c9a227" strokeWidth="2" />
      <text x="700" y="425" textAnchor="middle" fill="#e8d5a3" fontSize="14">
        松尾山
      </text>
      <text x="700" y="445" textAnchor="middle" fill="#fbbf24" fontSize="12">
        小早川秀秋
      </text>

      {/* road */}
      <path
        d="M80 300 C 250 280, 450 320, 820 290"
        fill="none"
        stroke="#6b5a3a"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.7"
      />
      <text x="450" y="275" textAnchor="middle" fill="#a89060" fontSize="12">
        中山道（概念）
      </text>

      {/* East army block */}
      <rect x="280" y="300" width="150" height="90" rx="8" fill="#16324f" stroke="#60a5fa" strokeWidth="2" />
      <text x="355" y="340" textAnchor="middle" fill="#bfdbfe" fontSize="14">
        東軍本隊
      </text>
      <text x="355" y="362" textAnchor="middle" fill="#93c5fd" fontSize="12">
        徳川家康方面
      </text>

      <rect x="200" y="210" width="120" height="55" rx="8" fill="#1e3a5f" stroke="#93c5fd" />
      <text x="260" y="242" textAnchor="middle" fill="#dbeafe" fontSize="12">
        福島など先鋒
      </text>

      {/* West army */}
      <rect x="480" y="200" width="130" height="70" rx="8" fill="#4a1515" stroke="#f87171" strokeWidth="2" />
      <text x="545" y="232" textAnchor="middle" fill="#fecaca" fontSize="13">
        石田三成
      </text>
      <text x="545" y="252" textAnchor="middle" fill="#fca5a5" fontSize="11">
        西軍中核
      </text>

      <rect x="430" y="320" width="120" height="55" rx="8" fill="#3f1212" stroke="#f87171" />
      <text x="490" y="352" textAnchor="middle" fill="#fecaca" fontSize="12">
        宇喜多秀家
      </text>

      <rect x="560" y="330" width="110" height="55" rx="8" fill="#3f1212" stroke="#fbbf24" />
      <text x="615" y="362" textAnchor="middle" fill="#fde68a" fontSize="12">
        大谷吉継
      </text>

      <rect x="620" y="220" width="100" height="50" rx="8" fill="#2a1810" stroke="#a78bfa" />
      <text x="670" y="250" textAnchor="middle" fill="#ddd6fe" fontSize="12">
        毛利方面
      </text>

      {/* legend */}
      <rect x="30" y="470" width="320" height="70" rx="8" fill="#121816" stroke="#33403a" />
      <text x="45" y="495" fill="#e8d5a3" fontSize="12">
        凡例（学習用・配置は簡略化）
      </text>
      <rect x="45" y="510" width="14" height="14" fill="#16324f" stroke="#60a5fa" />
      <text x="65" y="522" fill="#cbd5e1" fontSize="11">
        東軍
      </text>
      <rect x="110" y="510" width="14" height="14" fill="#4a1515" stroke="#f87171" />
      <text x="130" y="522" fill="#cbd5e1" fontSize="11">
        西軍
      </text>
      <rect x="175" y="510" width="14" height="14" fill="#243528" stroke="#c9a227" />
      <text x="195" y="522" fill="#cbd5e1" fontSize="11">
        寝返りの舞台
      </text>

      <text x="870" y="40" textAnchor="end" fill="#64748b" fontSize="11">
        Original SVG — educational schematic
      </text>
    </svg>
  );
}
