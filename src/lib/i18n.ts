export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/zh") ? "zh" : "en";
}

export function localizePath(path: string, locale: Locale): string {
  if (/^https?:\/\//.test(path) || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }

  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  if (locale === "en") {
    return normalizedPath || "/";
  }

  if (!normalizedPath) return "/zh";
  return `/zh${normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`}`;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const stripped = pathname.startsWith("/zh") ? pathname.slice(3) || "/" : pathname || "/";
  return localizePath(stripped, locale);
}

export const categoryLabels: Record<
  Locale,
  Record<"Get Started" | "Core Workflows" | "Use Cases" | "Troubleshooting" | "Admin & Ops", string>
> = {
  en: {
    "Get Started": "Get Started",
    "Core Workflows": "Core Workflows",
    "Use Cases": "Use Cases",
    "Troubleshooting": "Troubleshooting",
    "Admin & Ops": "Admin & Ops",
  },
  zh: {
    "Get Started": "快速开始",
    "Core Workflows": "核心工作流",
    "Use Cases": "使用场景",
    "Troubleshooting": "故障排查",
    "Admin & Ops": "运维与管理",
  },
};
