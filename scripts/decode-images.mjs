import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "scripts/image-manifest.json");
if (!fs.existsSync(manifestPath)) {
  console.warn("No image manifest; skipping decode.");
  process.exit(0);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
for (const item of manifest) {
  const dest = path.join(root, item.path);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log("skip", item.path);
    continue;
  }
  const b64 = fs.readFileSync(path.join(root, item.b64), "utf8").trim();
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(b64, "base64"));
  console.log("wrote", item.path, fs.statSync(dest).size);
}
