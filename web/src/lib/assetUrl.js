/** Resolve a public/ path for both local dev (/) and GitHub Pages (/auxosure-landing/). */
export function assetUrl(path) {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
