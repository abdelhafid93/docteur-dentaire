export default function sitemap() {
  return [
    {
      url: 'https://doctormaroc.com',
      lastModified: new Date().toISOString(), // ✅
      changeFrequency: 'monthly', // ✅ بدل yearly
      priority: 1,
    },
    {
      url: 'https://doctormaroc.com/service/dentaire',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://doctormaroc.com/reservations',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}