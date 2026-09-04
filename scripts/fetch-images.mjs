import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Wikimedia Commons titles + local destinations (PD / free license art). */
const downloads = [
  ["public/images/figures/tokugawa-ieyasu.jpg", "File:Tokugawa Ieyasu2.JPG", 800],
  ["public/images/figures/ishida-mitsunari.jpg", "File:Ishida Mitsunari.jpg", 800],
  ["public/images/figures/mori-terumoto.jpg", "File:Mori Terumoto.jpg", 800],
  ["public/images/figures/kobayakawa-hideaki.jpg", "File:Kobayakawa Hideaki cropped.jpg", 800],
  ["public/images/figures/fukushima-masanori.jpg", "File:Masanori Fukushima.JPG", 800],
  ["public/images/figures/otani-yoshitsugu.jpg", "File:\u014ctani Yoshitsugu.jpg", 800],
  ["public/images/figures/ukita-hideie.jpg", "File:Ukita Hideie.jpg", 800],
  ["public/images/figures/honda-tadakatsu.jpg", "File:Portrait-Honda-Tadakatsu.jpg", 800],
  ["public/images/places/osaka-castle.jpg", "File:The Siege of Osaka Castle 1615 cropped.jpg", 1200],
  ["public/images/places/sekigahara-byobu.jpg", "File:Sekigahara Kassen By\u014dbu-zu (Gifu History Museum).jpg", 1400],
  ["public/images/hero/sekigahara-battle.jpg", "File:Sekigahara Kassen By\u014dbu-zu (Gifu History Museum).jpg", 1600],
];

async function thumbUrl(title, width) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.search = new URLSearchParams({
    action: "query",
    titles: title,
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: String(width),
    format: "json",
  });
  const res = await fetch(api, {
    headers: { "User-Agent": "SekigaharaLearning/1.0 (educational)" },
  });
  if (!res.ok) throw new Error("API " + res.status);
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  const info = page.imageinfo[0];
  return (info.thumburl || info.url).split("?")[0];
}

async function main() {
  for (const [rel, title, width] of downloads) {
    const dest = path.join(root, rel);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log("skip", rel);
      continue;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    let lastErr;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        await new Promise((r) => setTimeout(r, 1500 + attempt * 2000));
        const url = await thumbUrl(title, width);
        const img = await fetch(url, {
          headers: { "User-Agent": "SekigaharaLearning/1.0 (educational)" },
        });
        if (!img.ok) throw new Error("GET " + img.status);
        const buf = Buffer.from(await img.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log("wrote", rel, buf.length);
        lastErr = null;
        break;
      } catch (e) {
        lastErr = e;
        console.warn("retry", rel, attempt, e.message);
      }
    }
    if (lastErr) throw lastErr;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
