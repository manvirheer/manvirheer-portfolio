'use client'

import { Header } from '@/app/components/layout/Header'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'
import Link from 'next/link'
import { getAllPosts } from './posts'

const posts = getAllPosts()

export default function WritingPage() {
  return (
    <>
      <GridOverlay />
      <Header />

      <div className="min-h-screen pt-20">
        <main>
          {/* Hero */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 headline-mixed">
                  Technical <span className="accent">Writing</span>
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  Deep dives into infrastructure, performance optimization, and
                  lessons learned from production systems.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Posts */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider
                path="~/blog"
                command="ls -la posts/"
                className="mb-8"
              />

              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link href={`/writing/${post.slug}`}>
                      <article
                        className="p-6 border rounded-lg transition-all hover:border-[var(--page-primary)] group"
                        style={{
                          backgroundColor: 'var(--page-surface)',
                          borderColor: 'var(--page-border)',
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h2 className="text-xl font-bold group-hover:text-[var(--page-primary)] transition-colors">
                              {post.title}
                            </h2>
                            <p
                              className="text-sm"
                              style={{ color: 'var(--page-primary)' }}
                            >
                              {post.subtitle}
                            </p>
                          </div>
                          <div
                            className="text-sm terminal-text whitespace-nowrap"
                            style={{ color: 'var(--page-text-muted)' }}
                          >
                            {post.date} · {post.readTime}
                          </div>
                        </div>

                        <p
                          className="text-sm mb-4"
                          style={{ color: 'var(--page-text-muted)' }}
                        >
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded terminal-text"
                              style={{
                                backgroundColor: 'var(--page-background)',
                                border: '1px solid var(--page-border)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Subscribe CTA */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p
                  className="text-lg mb-4"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  More posts coming soon. Follow me on{' '}
                  <a
                    href="https://github.com/manvirheer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--page-primary)]"
                    style={{ color: 'var(--page-primary)' }}
                  >
                    GitHub
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://linkedin.com/in/manvirheer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--page-primary)]"
                    style={{ color: 'var(--page-primary)' }}
                  >
                    LinkedIn
                  </a>{' '}
                  for updates.
                </p>
              </motion.div>
            </div>
          </section>

          <TerminalStatus />
        </main>
      </div>
    </>
  )
}
