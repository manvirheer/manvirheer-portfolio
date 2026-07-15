import { MetadataRoute } from 'next'
import { getAllPosts } from './writing/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://manvirheer.com'
  const now = new Date()

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts,
  ]
}
