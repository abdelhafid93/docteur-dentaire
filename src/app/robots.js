export default function robots() {
  const baseUrl = 'https://doctormaroc.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/private',
        '/api/',      // ✅ منع أرشفة API routes
        '/studio',    // ✅ منع أرشفة Sanity Studio
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}