import { readFileSync, writeFileSync } from "fs";

const lines = readFileSync("src/lib/i18n/content.ts", "utf8").split("\n");
const head = lines.slice(0, 17).join("\n");
const tail = lines.slice(131).join("\n");
const mid = `
import projectsJson from "./projects.json";

export const projectsContent = projectsJson as Record<
  Locale,
  Record<ProjectId, ProjectContent>
>;
`;
writeFileSync("src/lib/i18n/content.ts", head + mid + tail);
console.log("content.ts updated");
