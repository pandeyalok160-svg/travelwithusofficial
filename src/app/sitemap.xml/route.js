export const dynamic = "force-static";
export const dynamicParams = false;

const baseUrl = "https://travelwithusofficial.com";
const lastMod = new Date().toISOString().split("T")[0];

const pages = [
  { url: "" },
  { url: "dubai" },
  { url: "malaysia" },
  { url: "sri-lanka" },
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
