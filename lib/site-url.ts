/**
 * Canonical site URL for metadata, sitemap, and robots.
 * On Vercel, VERCEL_URL is set at build time. Set NEXT_PUBLIC_SITE_URL when using a custom domain.
 */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
  );
}
