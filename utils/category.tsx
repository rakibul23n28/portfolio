// utils/category.ts
import { notFound } from "next/navigation";

type CategoryData = {
  title: string;
};

const categories: Record<string, CategoryData> = {
  "landing-page": {
    title: "Landing Page",
  },
  portfolio: {
    title: "Portfolio",
  },
  "e-commerce": {
    title: "E-commerce",
  },
  blog: {
    title: "Blog",
  },
  "business-website": {
    title: "Business Website",
  },
  dashboard: {
    title: "Dashboard",
  },
  github: {
    title: "GitHub Projects",
  },
  figma: {
    title: "Figma Projects",
  },
};

export function getCategoryInfo(category: string): CategoryData {
  const categoryInfo = categories[category];
  if (!categoryInfo) notFound();
  return categoryInfo;
}
