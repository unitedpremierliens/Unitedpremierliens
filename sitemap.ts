import { MetadataRoute } from "next";

const SITE_URL = "https://www.unitedpremierliens.com";

const routes = [
  "",
  "/about",
  "/how-it-works",
  "/for-attorneys",
  "/for-patients",
  "/for-providers",
  "/provider-network",
  "/coverage-areas",
  "/success-stories",
  "/faq",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
