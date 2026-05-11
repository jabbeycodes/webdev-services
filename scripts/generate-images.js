const FAL_KEY = process.env.FAL_KEY;
const fs = require("fs");
const path = require("path");

if (!FAL_KEY) {
  console.error("Set FAL_KEY env var to generate images.");
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(OUT_DIR, { recursive: true });

const IMAGES = [
  {
    name: "hero-abstract",
    prompt:
      "Abstract swirling streams of light and code particles, deep dark background with rich amber orange and teal blue gradients, volumetric fog, cinematic lighting, futuristic digital art, ultra-detailed, 4K, wide panoramic composition",
    size: "landscape_16_9",
  },
  {
    name: "mockup-laptop",
    prompt:
      "Sleek modern MacBook Pro floating in a dark studio environment, screen glowing with a beautiful website, warm amber rim lighting, subtle reflections on a polished surface, ultra photorealistic product photography, dramatic lighting",
    size: "landscape_16_9",
  },
  {
    name: "dashboard-dark",
    prompt:
      "Beautiful dark-themed analytics dashboard UI on a curved ultrawide monitor, glowing data visualizations, glassmorphism panels, neon orange and teal accent colors, sleek modern workspace, cinematic composition, photorealistic render",
    size: "landscape_16_9",
  },
  {
    name: "mobile-apps",
    prompt:
      "Multiple iPhones floating in a dreamy dark gradient space, displaying beautiful mobile app interfaces, soft shadows, studio lighting, amber and teal reflections, premium product photography style, ultra detailed",
    size: "landscape_16_9",
  },
  {
    name: "server-futuristic",
    prompt:
      "Futuristic server room corridor with glowing circuits, data streams flowing like rivers of light, dark atmosphere with volumetric fog, electric blue and warm amber accent lights, cinematic sci-fi photography, photorealistic",
    size: "landscape_16_9",
  },
  {
    name: "abstract-waves",
    prompt:
      "Flowing abstract 3D waves of glass and light, dark background, iridescent amber and teal reflections, smooth organic curves, cinematic lighting, luxury feel, ultra-detailed 3D render",
    size: "landscape_16_9",
  },
];

async function generateImage({ name, prompt, size }) {
  console.log(`\nGenerating: ${name}...`);

  const res = await fetch("https://fal.run/fal-ai/flux/schnell", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      negative_prompt: "blurry, low quality, distorted, watermark, text, ugly, deformed",
      image_size: size,
      num_inference_steps: 8,
      num_images: 1,
      enable_safety_checker: true,
      output_format: "jpeg",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Fal.ai ${res.status}: ${text}`);
  }

  const data = await res.json();
  const url = data?.images?.[0]?.url;
  if (!url) throw new Error("No image URL returned");

  const imgRes = await fetch(url);
  if (!imgRes.ok) throw new Error("Image download failed");

  const buffer = Buffer.from(await imgRes.arrayBuffer());
  const outPath = path.join(OUT_DIR, `${name}.jpg`);
  fs.writeFileSync(outPath, buffer);
  console.log(`  Saved ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

(async () => {
  for (const img of IMAGES) {
    try {
      await generateImage(img);
    } catch (err) {
      console.error(`  Failed: ${err.message}`);
    }
    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 1000));
  }
  console.log("\nDone.");
})();
