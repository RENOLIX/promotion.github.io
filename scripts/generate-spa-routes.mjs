import fs from "node:fs/promises";
import path from "node:path";

const distPath = path.join(process.cwd(), "dist");
const staticRoutes = [
  "projets",
  "visite-3d",
  "a-propos",
  "contact",
  "auth/callback",
];

async function ensureStaticRoute(routePath, html) {
  const outputDir = path.join(distPath, routePath);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), html, "utf8");
}

async function main() {
  const indexHtml = await fs.readFile(path.join(distPath, "index.html"), "utf8");
  await fs.writeFile(path.join(distPath, "404.html"), indexHtml, "utf8");
  await Promise.all(staticRoutes.map((route) => ensureStaticRoute(route, indexHtml)));
  console.log(`Generated ${staticRoutes.length + 1} SPA static entries.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
