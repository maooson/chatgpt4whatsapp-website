export function getDocSlug(entry: { slug?: string; id: string }) {
  return entry.slug ?? entry.id.replace(/\.(md|mdx)$/, "");
}
