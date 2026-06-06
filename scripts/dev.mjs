import { rmSync, existsSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

function cleanCache() {
  const dirs = [".next", join("node_modules", ".cache")];
  for (const dir of dirs) {
    if (existsSync(dir)) {
      rmSync(dir, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
      console.log(`Removed ${dir}`);
    }
  }
}

cleanCache();
console.log("Starting Next.js dev server...\n");

execSync("npx next dev", { stdio: "inherit" });
