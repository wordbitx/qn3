import type { MetadataRoute } from "next";
import { COURSES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quranlightinstitute.com";
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/courses", priority: 0.9 },
    { path: "/teachers", priority: 0.8 },
    { path: "/pricing", priority: 0.8 },
    { path: "/fees", priority: 0.8 },
    { path: "/admission", priority: 0.8 },
    { path: "/faqs", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/terms-of-use", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.5 },
    { path: "/cookie-policy", priority: 0.5 },
  ];
  return [
    ...pages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...COURSES.map((c) => ({
      url: `${base}/courses/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
