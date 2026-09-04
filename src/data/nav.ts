export type NavItem = {
  href: string;
  label: string;
  chapter: string;
  description: string;
};

export const navItems: NavItem[] = [
  {
    href: "/",
    label: "ホーム",
    chapter: "OP",
    description: "番組の導入・全体像",
  },
  {
    href: "/synopsis",
    label: "あらすじ",
    chapter: "第1章",
    description: "豊臣政権崩壊から東西対立へ",
  },
  {
    href: "/timeline",
    label: "タイムライン",
    chapter: "第2章",
    description: "1598〜1600年の年表",
  },
  {
    href: "/forces",
    label: "勢力図",
    chapter: "第3章",
    description: "東軍・西軍と寝返り",
  },
  {
    href: "/battlefield",
    label: "戦場マップ",
    chapter: "第4章",
    description: "学習用簡易配置図",
  },
  {
    href: "/figures",
    label: "主要人物",
    chapter: "第5章",
    description: "キーパーソン紹介",
  },
  {
    href: "/battle-flow",
    label: "戦いの流れ",
    chapter: "第6章",
    description: "午前から決着まで",
  },
  {
    href: "/glossary",
    label: "用語集",
    chapter: "第7章",
    description: "戦国・関ヶ原の語彙",
  },
  {
    href: "/quiz",
    label: "確認クイズ",
    chapter: "第8章",
    description: "理解度チェック",
  },
  {
    href: "/references",
    label: "参考リンク",
    chapter: "ED",
    description: "学習用資料と免責",
  },
];
