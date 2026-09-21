import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = path.join(root, "lib", "styles", "bridge-1km.css");
const dest = path.join(root, "dist", "bridge-1km.css");

if (!fs.existsSync(src)) {
  console.error(`bridge source missing: ${src}`);
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log("bridge-1km.css -> dist/bridge-1km.css");
