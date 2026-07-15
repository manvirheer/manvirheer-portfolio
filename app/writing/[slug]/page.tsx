import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { posts, getPostBySlug } from '../posts'
import { SiteNav } from '../../SiteNav'
import styles from './article.module.css'

// Prerender every post at build time (SSG) — no client JS for content.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.subtitle,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className={styles.page}>
      <a href="#main" className="mh-skip">Skip to content</a>

      <header>
        <SiteNav variant="inner" />
      </header>

      <main id="main">
        <article className={styles.article}>
          <Link href="/writing" className={styles.back}>← Writing</Link>

          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>{post.subtitle}</p>
          <div className={styles.meta}>
            <span>{post.date.replace(/-/g, '.')}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
          {post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          <hr className={styles.divider} />

          <div className={styles.prose}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className={styles.articleFoot}>
            <Link href="/writing" className={styles.back}>← All posts</Link>
          </div>
        </article>
      </main>
    </div>
  )
}
