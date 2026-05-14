import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const publicDir = resolve(process.cwd(), "public");
const svgPath = resolve(publicDir, "og-image.svg");
const pngPath = resolve(publicDir, "og-image.png");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#10283E"/>
      <stop offset="1" stop-color="#1D5D83"/>
    </linearGradient>
    <radialGradient id="accent" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(920 80) rotate(30) scale(500 280)">
      <stop stop-color="#80D7FF" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#80D7FF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#accent)"/>

  <rect x="80" y="86" width="1040" height="458" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(220,245,255,0.32)"/>

  <text x="128" y="210" fill="#EAF7FF" font-size="72" font-family="Avenir Next, Segoe UI, Arial, sans-serif" font-weight="700">
    Morgane Rouvroy
  </text>
  <text x="128" y="286" fill="#BDE8FC" font-size="36" font-family="Avenir Next, Segoe UI, Arial, sans-serif" font-weight="600">
    Senior Software Engineer
  </text>
  <text x="128" y="350" fill="#EAF7FF" font-size="40" font-family="Avenir Next, Segoe UI, Arial, sans-serif" font-weight="600">
    Database Systems • Query Optimization
  </text>
  <text x="128" y="406" fill="#D7EEF9" font-size="35" font-family="Avenir Next, Segoe UI, Arial, sans-serif" font-weight="600">
    Metadata Interoperability
  </text>

  <circle cx="965" cy="420" r="14" fill="#DDF5FF"/>
  <circle cx="1030" cy="420" r="14" fill="#DDF5FF"/>
  <circle cx="1095" cy="420" r="14" fill="#DDF5FF"/>
  <path d="M979 420H1016M1044 420H1081" stroke="#DDF5FF" stroke-width="6" stroke-linecap="round"/>
</svg>`;

writeFileSync(svgPath, svg, "utf8");

try {
  execFileSync("sips", ["-s", "format", "png", svgPath, "--out", pngPath], {
    stdio: "inherit",
  });
} catch {
  const qlPng = `${svgPath}.png`;
  execFileSync("qlmanage", ["-t", "-s", "1200", "-o", publicDir, svgPath], {
    stdio: "inherit",
  });
  execFileSync("sips", ["-z", "630", "1200", qlPng, "--out", pngPath], {
    stdio: "inherit",
  });
}

console.log(`Generated ${pngPath}`);
