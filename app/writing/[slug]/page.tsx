'use client'

import { Header } from '@/app/components/layout/Header'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getPostBySlug } from '../posts'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <GridOverlay />
      <Header />

      <div className="min-h-screen pt-20">
        <main>
          {/* Hero */}
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-2 text-sm terminal-text mb-6 hover:text-[var(--page-primary)] transition-colors"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  ← Back to Writing
                </Link>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {post.title}
                </h1>
                <p
                  className="text-lg md:text-xl mb-6"
                  style={{ color: 'var(--page-primary)' }}
                >
                  {post.subtitle}
                </p>

                <div
                  className="flex flex-wrap items-center gap-4 text-sm terminal-text"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded terminal-text"
                      style={{
                        backgroundColor: 'rgba(0, 102, 255, 0.1)',
                        color: 'var(--page-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Content */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
              <SectionDivider
                path={`~/blog/${post.slug}`}
                command="cat article.md"
                className="mb-8"
              />

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2
                        className="text-2xl font-bold mt-12 mb-4 pt-4 border-t"
                        style={{
                          color: 'var(--page-text)',
                          borderColor: 'var(--page-border)',
                        }}
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3
                        className="text-xl font-bold mt-8 mb-3"
                        style={{ color: 'var(--page-primary)' }}
                      >
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4
                        className="text-lg font-bold mt-6 mb-2"
                        style={{ color: 'var(--page-text)' }}
                      >
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p
                        className="mb-4 leading-relaxed"
                        style={{ color: 'var(--page-text-muted)' }}
                      >
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-4 space-y-2 list-none pl-0">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mb-4 space-y-2 list-decimal pl-6">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li
                        className="flex gap-2"
                        style={{ color: 'var(--page-text-muted)' }}
                      >
                        <span style={{ color: 'var(--terminal-cyan)' }}>→</span>
                        <span>{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong style={{ color: 'var(--page-text)' }}>
                        {children}
                      </strong>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                        style={{ color: 'var(--page-primary)' }}
                      >
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote
                        className="border-l-4 pl-4 my-4 italic"
                        style={{
                          borderColor: 'var(--page-primary)',
                          color: 'var(--page-text-muted)',
                        }}
                      >
                        {children}
                      </blockquote>
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-6">
                        <table
                          className="w-full border-collapse text-sm"
                          style={{ borderColor: 'var(--page-border)' }}
                        >
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead
                        style={{ backgroundColor: 'var(--page-background)' }}
                      >
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th
                        className="border px-4 py-2 text-left font-bold"
                        style={{
                          borderColor: 'var(--page-border)',
                          color: 'var(--page-text)',
                        }}
                      >
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td
                        className="border px-4 py-2"
                        style={{
                          borderColor: 'var(--page-border)',
                          color: 'var(--page-text-muted)',
                        }}
                      >
                        {children}
                      </td>
                    ),
                    code: ({ className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match

                      if (isInline) {
                        return (
                          <code
                            className="px-1.5 py-0.5 rounded text-sm terminal-text"
                            style={{
                              backgroundColor: 'var(--page-background)',
                              color: 'var(--terminal-cyan)',
                            }}
                            {...props}
                          >
                            {children}
                          </code>
                        )
                      }

                      return (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg my-4 text-sm"
                          customStyle={{
                            backgroundColor: 'var(--page-background)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                          }}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      )
                    },
                    pre: ({ children }) => <>{children}</>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </motion.article>
            </div>
          </section>

          {/* Navigation */}
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
              <div className="flex justify-between items-center">
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-2 text-sm terminal-text hover:text-[var(--page-primary)] transition-colors"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  ← All Posts
                </Link>

                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://manvirheer.com/writing/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm terminal-text hover:text-[var(--page-primary)] transition-colors"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    Share on X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://manvirheer.com/writing/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm terminal-text hover:text-[var(--page-primary)] transition-colors"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    Share on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          <TerminalStatus />
        </main>
      </div>
    </>
  )
}
