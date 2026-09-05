/** Educational schematic positions for Battle of Sekigahara troop animation.
 * Coordinates are in SVG viewBox 0–900 / 0–560 (same as BattlefieldMap).
 * Not a survey map — conceptual learning aid only.
 */

export type AnimationPhaseId = "dawn" | "morning" | "noon" | "afternoon";

export type TroopSide = "east" | "west" | "defect";

export type TroopPoint = {
  x: number;
  y: number;
  /** 0–1; omitted = 1 */
  opacity?: number;
  note?: string;
};

export type TroopUnit = {
  id: string;
  label: string;
  shortLabel?: string;
  side: TroopSide;
  /** When true, unit is hesitant / inactive (e.g. Mōri) */
  hesitant?: boolean;
  positions: Record<AnimationPhaseId, TroopPoint>;
};

export type AnimationPhase = {
  id: AnimationPhaseId;
  time: string;
  title: string;
  narration: string;
};

export const animationPhases: AnimationPhase[] = [
  {
    id: "dawn",
    time: "早朝",
    title: "霧と布陣",
    narration:
      "関ヶ原一帯に霧が立ちこめ、両軍は山麓や街道沿いに布陣。東軍は正面、西軍は周囲の高地を含む配置となり、小早川は松尾山に位置した。",
  },
  {
    id: "morning",
    time: "午前",
    title: "本格交戦の開始",
    narration:
      "霧が晴れるにつれ射撃と白兵が激化。福島正則ら東軍先鋒と宇喜多・石田勢などが激しくぶつかる。戦線は膠着気味で、周辺諸将の動向が焦点となる。",
  },
  {
    id: "noon",
    time: "正午前後",
    title: "小早川の寝返り",
    narration:
      "小早川秀秋が松尾山から西軍側面（大谷方面）へ動き、東軍へ寝返る。決定打となり、西軍側の一部も動揺・離反し始める。",
  },
  {
    id: "afternoon",
    time: "午後",
    title: "西軍崩壊・東軍勝利",
    narration:
      "西軍主力は総崩れとなり敗走。東軍は西方へ追撃し、短時間で決着がつく。",
  },
];

export const troopUnits: TroopUnit[] = [
  {
    id: "tokugawa",
    label: "徳川本隊",
    shortLabel: "徳川",
    side: "east",
    positions: {
      dawn: { x: 280, y: 300, note: "東軍本陣付近" },
      morning: { x: 310, y: 295, note: "前線へ前進" },
      noon: { x: 340, y: 290, note: "圧力を強める" },
      afternoon: { x: 400, y: 285, note: "西方へ追撃" },
    },
  },
  {
    id: "fukushima",
    label: "福島先鋒",
    shortLabel: "福島",
    side: "east",
    positions: {
      dawn: { x: 200, y: 210, note: "先鋒布陣" },
      morning: { x: 280, y: 230, note: "宇喜多・石田と交戦" },
      noon: { x: 320, y: 235, note: "突破を試みる" },
      afternoon: { x: 390, y: 240, note: "西軍潰走を追う" },
    },
  },
  {
    id: "ishida",
    label: "石田三成",
    shortLabel: "石田",
    side: "west",
    positions: {
      dawn: { x: 480, y: 200, note: "西軍中核" },
      morning: { x: 450, y: 220, note: "東軍先鋒と激突" },
      noon: { x: 470, y: 210, note: "動揺が広がる" },
      afternoon: {
        x: 560,
        y: 160,
        opacity: 0.35,
        note: "敗走",
      },
    },
  },
  {
    id: "ukita",
    label: "宇喜多秀家",
    shortLabel: "宇喜多",
    side: "west",
    positions: {
      dawn: { x: 430, y: 320, note: "中央西寄り" },
      morning: { x: 380, y: 300, note: "福島勢と白兵" },
      noon: { x: 400, y: 310, note: "戦線維持に苦戦" },
      afternoon: {
        x: 520,
        y: 380,
        opacity: 0.3,
        note: "退却",
      },
    },
  },
  {
    id: "otani",
    label: "大谷吉継",
    shortLabel: "大谷",
    side: "west",
    positions: {
      dawn: { x: 560, y: 330, note: "小早川監視も兼ねる要所" },
      morning: { x: 540, y: 340, note: "防衛線を固める" },
      noon: { x: 580, y: 360, note: "寝返りの直撃を受ける" },
      afternoon: {
        x: 640,
        y: 400,
        opacity: 0.25,
        note: "崩壊",
      },
    },
  },
  {
    id: "kobayakawa",
    label: "小早川秀秋",
    shortLabel: "小早川",
    side: "defect",
    positions: {
      dawn: { x: 660, y: 420, note: "松尾山に布陣・様子見" },
      morning: { x: 655, y: 415, note: "なお動かず" },
      noon: { x: 580, y: 370, note: "大谷方面へ突撃＝寝返り" },
      afternoon: { x: 500, y: 340, note: "東軍として追撃に加わる" },
    },
  },
  {
    id: "mori",
    label: "毛利方面",
    shortLabel: "毛利",
    side: "west",
    hesitant: true,
    positions: {
      dawn: { x: 620, y: 220, note: "南宮山方面・待機気味" },
      morning: { x: 625, y: 218, note: "動かず（学習上の強調）" },
      noon: { x: 630, y: 215, note: "依然として不発" },
      afternoon: {
        x: 650,
        y: 200,
        opacity: 0.45,
        note: "戦局に寄与せず後退",
      },
    },
  },
  {
    id: "shimazu",
    label: "島津義弘",
    shortLabel: "島津",
    side: "west",
    positions: {
      dawn: { x: 520, y: 270, note: "西軍側翼" },
      morning: { x: 500, y: 280, note: "膠着戦に参加" },
      noon: { x: 510, y: 275, note: "混乱の中で踏ん張る" },
      afternoon: {
        x: 200,
        y: 340,
        opacity: 0.55,
        note: "敵中突破・退却（概念）",
      },
    },
  },
];

/** Dashed trail for Kobayakawa defection (Matsuo → Otani flank), noon phase. */
export const kobayakawaTrail: { x: number; y: number }[] = [
  { x: 700, y: 430 },
  { x: 640, y: 400 },
  { x: 580, y: 370 },
];

export const PHASE_DURATION_MS = 3500;

export function phaseIndex(id: AnimationPhaseId): number {
  return animationPhases.findIndex((p) => p.id === id);
}

export function sideStyles(side: TroopSide): {
  fill: string;
  stroke: string;
  text: string;
  legend: string;
} {
  switch (side) {
    case "east":
      return {
        fill: "#16324f",
        stroke: "#60a5fa",
        text: "#bfdbfe",
        legend: "東軍",
      };
    case "west":
      return {
        fill: "#4a1515",
        stroke: "#f87171",
        text: "#fecaca",
        legend: "西軍",
      };
    case "defect":
      return {
        fill: "#3d2a0a",
        stroke: "#fbbf24",
        text: "#fde68a",
        legend: "寝返り",
      };
  }
}
