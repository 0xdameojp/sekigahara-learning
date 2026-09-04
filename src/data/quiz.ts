export type QuizQuestion = {
  id: number;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "関ヶ原の戦いが行われた年号・日付として正しいのはどれか。",
    choices: [
      "天正18年7月",
      "慶長5年9月15日",
      "元和元年5月",
      "文禄元年4月",
    ],
    answerIndex: 1,
    explanation:
      "関ヶ原の戦いは慶長5年9月15日（西暦1600年10月21日）に行われた。",
  },
  {
    id: 2,
    question: "東軍の総大将は誰か。",
    choices: ["石田三成", "毛利輝元", "徳川家康", "上杉景勝"],
    answerIndex: 2,
    explanation: "東軍は徳川家康を中心に編成された。",
  },
  {
    id: 3,
    question: "西軍の実務的中心人物として最も適切なのは誰か。",
    choices: ["石田三成", "本多忠勝", "福島正則", "井伊直政"],
    answerIndex: 0,
    explanation: "石田三成が西軍の結集と指揮の中心となった。",
  },
  {
    id: 4,
    question: "西軍の名目上の総大将は誰か。",
    choices: ["宇喜多秀家", "大谷吉継", "毛利輝元", "小早川秀秋"],
    answerIndex: 2,
    explanation: "毛利輝元が西軍総大将に推された（実戦指揮は限定的とされる）。",
  },
  {
    id: 5,
    question: "開戦後に東軍へ寝返ったことで有名な武将は誰か。",
    choices: ["福島正則", "小早川秀秋", "本多忠勝", "前田利家"],
    answerIndex: 1,
    explanation: "松尾山の小早川秀秋の離反が戦局を大きく変えたとされる。",
  },
  {
    id: 6,
    question: "関ヶ原は現在のどの地域に近いか。",
    choices: [
      "京都府京都市中心部",
      "岐阜県不破郡関ケ原町付近",
      "大阪府大阪城周辺",
      "東京都江戸城跡",
    ],
    answerIndex: 1,
    explanation: "戦場は美濃国不破郡、現在の岐阜県関ケ原町付近とされる。",
  },
  {
    id: 7,
    question: "豊臣秀吉の死後、幼少の秀頼を支える合議体制として正しいのはどれか。",
    choices: [
      "征夷大将軍と関東管領",
      "五大老・五奉行",
      "摂関政治",
      "守護・地頭のみの体制",
    ],
    answerIndex: 1,
    explanation: "秀吉死後は五大老・五奉行による合議が想定された。",
  },
  {
    id: 8,
    question: "家康が東へ出陣した名目となったのはどの行動か。",
    choices: ["朝鮮出兵", "会津征伐", "本能寺の変", "大坂冬の陣"],
    answerIndex: 1,
    explanation: "上杉景勝に対する会津征伐が出陣の名目となった。",
  },
  {
    id: 9,
    question: "関ヶ原の戦いの結果として最も適切なのはどれか。",
    choices: [
      "西軍が勝利し豊臣政権が強化された",
      "引き分けで和睦した",
      "東軍が勝利し徳川覇権が確立へ向かった",
      "朝廷が直接全国を統治した",
    ],
    answerIndex: 2,
    explanation: "東軍勝利後、家康の覇権が強まり江戸幕府成立へつながる。",
  },
  {
    id: 10,
    question: "病を抱えつつ西軍で三成を支えた智将として知られるのは誰か。",
    choices: ["大谷吉継", "井伊直政", "加藤清正", "黒田長政"],
    answerIndex: 0,
    explanation: "大谷吉継は病をおして西軍に与し、小早川の動向も警戒した。",
  },
];
