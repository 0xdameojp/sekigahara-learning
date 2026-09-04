# 関ヶ原の戦い 学習サイト

慶長5年（1600年）の関ヶ原の戦いを学ぶ、日本語の教育用 Web サイトです。
TVドキュメンタリー／参考番組風の章立てで、あらすじ・年表・勢力図・戦場マップ・人物・クイズを提供します。

**リポジトリ:** https://github.com/0xdameojp/sekigahara-learning

## 技術スタック

- Next.js（App Router）
- TypeScript
- Tailwind CSS

## 主なルート

| パス | 内容 |
|------|------|
| / | ホーム（ヒーロー・チャプター一覧） |
| /synopsis | あらすじ |
| /timeline | タイムライン（1598–1600） |
| /forces | 勢力図（東軍／西軍・寝返り注記） |
| /battlefield | 戦場マップ（学習用SVG） |
| /figures | 主要人物 |
| /battle-flow | 戦いの流れ |
| /glossary | 用語集 |
| /quiz | 確認クイズ（採点付き） |
| /references | 参考リンク・学習用免責 |

## ローカルでの起動

1. git clone https://github.com/0xdameojp/sekigahara-learning.git
2. cd sekigahara-learning
3. npm install
4. npm run dev

ブラウザで http://localhost:3000 を開きます。

本番ビルド確認: npm run build のあと npm start

## Vercel へのデプロイ

1. Vercel にログインし Add New Project
2. GitHub リポジトリ 0xdameojp/sekigahara-learning をインポート
3. Framework Preset は Next.js（自動検出）
4. Build Command は npm run build／Output はデフォルト
5. Deploy をクリック

CLI: npm i -g vercel のあと vercel

## デザイン方針

- 暗いシネマティックな基調色に、金／和紙色のアクセント
- オリジナルSVG図のみ（著作権のあるTV埋め込みなし）
- モバイル対応のチャプターナビ

## ライセンス・免責

教育目的のオリジナル教材です。歴史叙述には学説差があります。詳細はサイト内「参考リンク」ページの免責を参照してください。
