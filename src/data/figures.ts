export type Figure = {
  name: string;
  reading: string;
  side: "東軍" | "西軍" | "中立・複雑";
  role: string;
  summary: string;
  image?: string;
  imageCredit?: string;
};

export const figures: Figure[] = [
  {
    name: "徳川家康",
    reading: "とくがわ いえやす",
    side: "東軍",
    role: "東軍総大将",
    summary:
      "三河出身の戦国大名。秀吉死後に勢力を拡大し、関ヶ原で東軍を率いて勝利。のちに江戸幕府を開く。",
    image: "/images/figures/tokugawa-ieyasu.jpg",
    imageCredit: "Wikimedia Commons — Tokugawa_Ieyasu2.JPG（伝狩野探幽筆・大阪城天守閣所蔵）",
  },
  {
    name: "石田三成",
    reading: "いしだ みつなり",
    side: "西軍",
    role: "西軍の中心",
    summary:
      "豊臣政権の奉行として実務に長けた。家康に対抗して西軍を組織するが、関ヶ原で敗れる。",
    image: "/images/figures/ishida-mitsunari.jpg",
    imageCredit: "Wikimedia Commons — Ishida_Mitsunari.jpg（絹本著色石田三成像模本・東京大学史料編纂所蔵）",
  },
  {
    name: "毛利輝元",
    reading: "もうり てるもと",
    side: "西軍",
    role: "西軍総大将（名目）",
    summary:
      "中国地方の大大名。西軍の総大将に推されるが、戦線での積極的な采配は限定的とされ、戦後に大幅減封。",
    image: "/images/figures/mori-terumoto.jpg",
    imageCredit: "Wikimedia Commons — Mori_Terumoto.jpg（江戸時代初期の肖像）",
  },
  {
    name: "小早川秀秋",
    reading: "こばやかわ ひであき",
    side: "中立・複雑",
    role: "松尾山の軍勢",
    summary:
      "秀吉の養子系統に連なる若年の大名。開戦後に東軍へ寝返り、戦局を一気に傾かせたとされる。",
    image: "/images/figures/kobayakawa-hideaki.jpg",
    imageCredit: "Wikimedia Commons — Kobayakawa_Hideaki_cropped.jpg（小早川秀秋肖像・絹本着色）",
  },
  {
    name: "福島正則",
    reading: "ふくしま まさのり",
    side: "東軍",
    role: "東軍先鋒級の武将",
    summary:
      "豊臣恩顧でありながら家康方に与し、前線で激戦。秀吉死後の大名層の分裂を象徴する存在。",
    image: "/images/figures/fukushima-masanori.jpg",
    imageCredit: "Wikimedia Commons — Masanori_Fukushima.JPG",
  },
  {
    name: "大谷吉継",
    reading: "おおたに よしつぐ",
    side: "西軍",
    role: "西軍の智将",
    summary:
      "病を抱えつつも三成を支え、小早川の動向を警戒。裏切りの影響を最も受けた戦線の一つを担う。",
    image: "/images/figures/otani-yoshitsugu.jpg",
    imageCredit: "Wikimedia Commons — Ōtani_Yoshitsugu.jpg（『太平記英雄傳』錦絵）",
  },
  {
    name: "宇喜多秀家",
    reading: "うきた ひでいえ",
    side: "西軍",
    role: "西軍主力",
    summary:
      "備前の大大名で西軍の有力部隊を率いる。激戦の末に敗走し、のちに流罪となる。",
    image: "/images/figures/ukita-hideie.jpg",
    imageCredit: "Wikimedia Commons — Ukita_Hideie.jpg",
  },
  {
    name: "本多忠勝",
    reading: "ほんだ ただかつ",
    side: "東軍",
    role: "徳川四天王の一人",
    summary:
      "家康譜代の猛将。関ヶ原でも東軍の中核として戦う。徳川軍の精強さを象徴する武人。",
    image: "/images/figures/honda-tadakatsu.jpg",
    imageCredit: "Wikimedia Commons — Portrait-Honda-Tadakatsu.jpg（紙本著色本多忠勝像）",
  },
];

/** Lookup by name for avatars on forces page etc. */
export function figureByName(name: string): Figure | undefined {
  return figures.find((f) => f.name === name || name.includes(f.name));
}
