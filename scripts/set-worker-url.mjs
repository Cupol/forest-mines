import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const endpoint = process.argv[2]?.replace(/\/+$/, "");
if (!endpoint || !/^https:\/\/[a-z0-9.-]+\.workers\.dev$/i.test(endpoint)) {
  console.error("Usage: node scripts/set-worker-url.mjs https://your-worker.workers.dev");
  process.exit(2);
}
await writeFile(resolve(here, "../public/config.js"), `window.MINES_CONFIG = { api: ${JSON.stringify(endpoint)} };\n`, "utf8");
console.log("Saved the public game API endpoint to public/config.js");
