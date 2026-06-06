import { rmSync, existsSync } from "fs";
import { join } from "path";

const dirs = [".next", join("node_modules", ".cache")];

for (const dir of dirs) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`Removed ${dir}`);
  }
}

console.log("Cache cleared. Run: npm run dev");
