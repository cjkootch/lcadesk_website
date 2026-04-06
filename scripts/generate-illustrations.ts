/**
 * LCA Desk Illustration Generator
 *
 * Generates a consistent set of branded illustrations using DALL-E 3.
 * Run: OPENAI_API_KEY=sk-... npx tsx scripts/generate-illustrations.ts
 *
 * Style: "Compliance Blueprint"
 * - Flat geometric, no gradients or 3D
 * - Emerald (#059669) + teal (#0D9488) + amber (#D97706) + slate (#334155)
 * - White/light gray backgrounds
 * - Minimal, abstract, modern SaaS aesthetic
 * - Thin lines mixed with solid color blocks
 */

import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 120000, // 2 minute timeout for DALL-E generation
});

const OUTPUT_DIR = path.join(process.cwd(), "public", "illustrations");

// Consistent style prefix for all prompts
const STYLE = `Flat minimal vector illustration, solid colors only, no gradients, no shadows, no 3D.
Color palette: emerald green (#059669), teal (#0D9488), amber/gold (#D97706), dark slate (#334155), white background.
Clean geometric shapes, thin lines, modern SaaS aesthetic. No text, no words, no letters.
Simple, abstract, professional. Similar to Notion or Linear illustration style.`;

// Illustrations to generate
const illustrations: { name: string; prompt: string; size: "1792x1024" | "1024x1024" | "1024x1792" }[] = [
  // Hero / page headers (wide)
  {
    name: "hero-compliance",
    prompt: `${STYLE} A person at a desk with floating document icons, checkmarks, and a shield symbol. Represents compliance management and filing. Oil derrick silhouette in the far background. Clean workspace feel.`,
    size: "1792x1024",
  },
  {
    name: "hero-jobs",
    prompt: `${STYLE} Abstract illustration of people connecting — a bridge between a small figure (job seeker) and a large building (employer). Briefcase icon, handshake gesture. Oil platform silhouette subtle in background. Represents employment matching.`,
    size: "1792x1024",
  },
  {
    name: "hero-opportunities",
    prompt: `${STYLE} Multiple floating cards/tiles with different icons (gear, wrench, ship, truck) spreading outward from a central hub. Represents procurement opportunities. Magnifying glass examining one card. Oil and gas equipment silhouettes.`,
    size: "1792x1024",
  },
  {
    name: "hero-markets",
    prompt: `${STYLE} Abstract world map made of geometric shapes, with pin markers on West Africa, Caribbean, and South America. Connected by thin lines. Globe perspective, minimal continents. Oil drop icons at each marker.`,
    size: "1792x1024",
  },

  // Feature illustrations (square)
  {
    name: "feature-ai-analysis",
    prompt: `${STYLE} A document page with sparkle/star icons around it, suggesting AI analysis. Lines of text abstracted as colored bars. A magnifying glass with a brain/circuit pattern inside. Clean, minimal.`,
    size: "1024x1024",
  },
  {
    name: "feature-filing",
    prompt: `${STYLE} A calendar with a clock, surrounded by document icons stacking neatly into a filing cabinet. Check marks appearing. Represents automated filing and deadline tracking. Timer/countdown visual.`,
    size: "1024x1024",
  },
  {
    name: "feature-reporting",
    prompt: `${STYLE} Bar charts and pie charts on a dashboard screen, with a person figure reviewing data. Numbers going up. Represents half-yearly reporting and analytics. Clean data visualization.`,
    size: "1024x1024",
  },
  {
    name: "feature-register",
    prompt: `${STYLE} A list or registry with company icons/logos as abstract squares, each with a small shield/verified badge. Represents the Local Content Register. Search bar at top. Organized, structured.`,
    size: "1024x1024",
  },

  // Blog / content illustrations (square)
  {
    name: "blog-regulatory",
    prompt: `${STYLE} A gavel or legal scale with a document scroll and a flag (abstract, not country-specific). Represents regulatory updates and legal compliance. Government building silhouette.`,
    size: "1024x1024",
  },
  {
    name: "blog-guide",
    prompt: `${STYLE} An open book or manual with a compass/navigation icon, stepping stones leading forward. Represents guides and how-to content. Directional arrows, pathway visual.`,
    size: "1024x1024",
  },

  // Market page headers (wide)
  {
    name: "market-guyana",
    prompt: `${STYLE} Abstract representation of offshore oil platform with emerald green accents, simple wave patterns below. A shield with a checkmark floating above. Clean, modern, minimal. Caribbean/South American feel.`,
    size: "1792x1024",
  },
  {
    name: "market-nigeria",
    prompt: `${STYLE} Abstract representation of an oil refinery with amber/gold accents. Document with NCDMB text abstracted as bars. West African landscape silhouette, minimal. Professional.`,
    size: "1792x1024",
  },

  // CTA / email capture (wide)
  {
    name: "cta-signup",
    prompt: `${STYLE} A laptop screen showing a simple dashboard with green checkmarks, next to a rocket or upward arrow. Represents getting started, signing up. Optimistic, forward-moving energy.`,
    size: "1792x1024",
  },

  // Empty states (square)
  {
    name: "empty-no-results",
    prompt: `${STYLE} A magnifying glass over an empty page/card. Subtle question mark. Represents no search results or empty state. Calm, not negative. Light emerald accents.`,
    size: "1024x1024",
  },
];

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(filepath);
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location!, filepath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generateIllustration(name: string, prompt: string, size: "1792x1024" | "1024x1024" | "1024x1792") {
  const filepath = path.join(OUTPUT_DIR, `${name}.png`);

  if (fs.existsSync(filepath)) {
    console.log(`⏭  ${name}.png already exists, skipping`);
    return;
  }

  console.log(`🎨 Generating: ${name}...`);

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size,
      quality: "standard",
      style: "natural",
    });

    const imageUrl = response.data[0]?.url;
    if (!imageUrl) throw new Error("No image URL returned");

    await downloadImage(imageUrl, filepath);
    console.log(`✓  Saved: ${name}.png`);

    // Rate limit: DALL-E 3 allows ~5 req/min on most tiers
    await new Promise((r) => setTimeout(r, 15000));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`✗  Failed: ${name} — ${message}`);
  }
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY environment variable is required");
    console.error("Usage: OPENAI_API_KEY=sk-... npx tsx scripts/generate-illustrations.ts");
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`\nLCA Desk Illustration Generator`);
  console.log(`================================`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Illustrations: ${illustrations.length}`);
  console.log(`Style: Compliance Blueprint (flat, geometric, emerald/teal/amber)\n`);

  for (const ill of illustrations) {
    await generateIllustration(ill.name, ill.prompt, ill.size);
  }

  console.log(`\nDone! Generated illustrations are in /public/illustrations/`);
  console.log(`To regenerate a specific illustration, delete the file and run again.`);
}

main();
