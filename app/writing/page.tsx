import { Fragment } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../page.module.css'
import { SiteNav } from '../SiteNav'
import { getAllPosts } from './posts'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on AI infrastructure, performance, and lessons from shipping production systems.',
}

const posts = getAllPosts()

export default function WritingIndex() {
  return (
    <div className={styles.page}>
      <a href="#main" className="mh-skip">Skip to content</a>

      <header>
        <SiteNav variant="inner" />
      </header>

      <main id="main">
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Writing</h1>
            <p className={styles.heroText}>
              Notes on AI infrastructure, performance, and lessons from shipping
              production systems. Plain and practical.
            </p>
          </section>

          <section className={styles.section} aria-label="All posts">
            <div className={styles.grid}>
              {posts.map((post, i) => (
                <Fragment key={post.slug}>
                  <span className={styles.writeDate}>{post.date.replace(/-/g, '.')}</span>
                  <div
                    className={`${styles.writeEntry}${
                      i === posts.length - 1 ? ` ${styles.writeEntryLast}` : ''
                    }`}
                  >
                    <div className={styles.writeHead}>
                      <Link href={`/writing/${post.slug}`} className={styles.writeTitle}>
                        {post.title}
                      </Link>
                      <span className={styles.writeRead}>{post.readTime}</span>
                    </div>
                    <p className={styles.writeSub}>{post.subtitle}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
