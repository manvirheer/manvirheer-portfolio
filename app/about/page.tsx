'use client'

import { Header } from '@/app/components/layout/Header'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'

const skills = {
  'Cloud & Infrastructure': ['AWS', 'Azure', 'Docker', 'PostgreSQL', 'PgBouncer', 'CI/CD'],
  'AI/ML': ['LlamaIndex', 'Qdrant', 'OpenAI API', 'RAG Systems', 'Vector Databases'],
  'Backend': ['Python', 'FastAPI', 'Node.js', 'NestJS', 'TypeScript'],
  'Frontend': ['React', 'Next.js', 'Tailwind CSS'],
  'Tools': ['Git', 'GitHub Actions', 'Bash', 'Linux'],
}

const values = [
  {
    title: 'Measure Everything',
    description: 'Performance improvements without metrics are just opinions. I benchmark before and after, document methodology, and make results reproducible.',
  },
  {
    title: 'Document for Transfer',
    description: 'Code is temporary, knowledge is permanent. I write documentation that helps the next engineer understand not just what, but why.',
  },
  {
    title: 'Connect Tech to Impact',
    description: 'Years in customer success taught me to translate technical work into business value. I build for users, not just systems.',
  },
]

export default function AboutPage() {
  return (
    <>
      <GridOverlay />
      <Header />

      <div className="min-h-screen pt-20">
        <main>
          {/* Hero */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 headline-mixed">
                  About <span className="accent">Me</span>
                </h1>
              </motion.div>
            </div>
          </section>

          {/* Bio */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~" command="cat bio.md" className="mb-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none space-y-6"
              >
                <p className="text-lg leading-relaxed" style={{ color: 'var(--page-text-muted)' }}>
                  I&apos;m a <strong style={{ color: 'var(--page-text)' }}>DevOps &amp; Infrastructure Engineer</strong> based
                  in Vancouver, finishing my Computing Science degree at Simon Fraser University. Currently building
                  healthcare infrastructure at <span style={{ color: 'var(--page-primary)' }}>Tenzr Health</span>,
                  where I work on everything from database optimization to production AI systems.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--page-text-muted)' }}>
                  What makes me different? I came to infrastructure through <strong style={{ color: 'var(--page-text)' }}>customer success</strong>.
                  Before I was optimizing database connections, I was in client meetings translating technical capabilities
                  into business value. That background shapes how I approach infrastructure work—I don&apos;t just make
                  systems faster, I connect improvements to user impact and document them for knowledge transfer.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--page-text-muted)' }}>
                  My recent work includes reducing database latency by <strong style={{ color: 'var(--terminal-green)' }}>99.4%</strong> through
                  connection pooling optimization and building Tenzr&apos;s first production RAG system—an AI exercise
                  plan generator that transforms 1,500+ exercises into personalized rehabilitation plans. Both
                  projects came with comprehensive documentation and reproducible benchmarking tools.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--page-text-muted)' }}>
                  I&apos;ve worked across <strong style={{ color: 'var(--page-text)' }}>healthcare, energy, and B2B SaaS</strong> domains,
                  with experience in both Azure and AWS cloud environments. Whether it&apos;s configuring Azure B2C
                  tenants, deploying Lambda functions, or setting up vector databases for semantic search—I focus
                  on building infrastructure that&apos;s not just functional, but observable and maintainable.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/values" command="cat principles.txt" className="mb-8" />

              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 border rounded-lg"
                    style={{
                      backgroundColor: 'var(--page-surface)',
                      borderColor: 'var(--page-border)',
                    }}
                  >
                    <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--page-primary)' }}>
                      {value.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~" command="cat skills.json" className="mb-8" />

              <div className="space-y-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <h3 className="text-sm terminal-text mb-3" style={{ color: 'var(--terminal-cyan)' }}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-3 py-1.5 rounded terminal-text"
                          style={{
                            backgroundColor: 'var(--page-surface)',
                            border: '1px solid var(--page-border)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Personal */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/personal" command="ls interests/" className="mb-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg" style={{ color: 'var(--page-text-muted)' }}>
                  Outside of work, I&apos;m interested in personal knowledge management systems (this portfolio is
                  backed by an Obsidian vault), voice-to-text tooling for Linux, and geospatial data analysis.
                  I run Fedora as my daily driver and believe in using AMD GPUs on Linux despite the pain.
                </p>
                <p className="text-lg" style={{ color: 'var(--page-text-muted)' }}>
                  I&apos;m currently exploring what comes after graduation in January 2026—whether that&apos;s a
                  full-time infrastructure role or continuing to build towards founding something of my own.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Connect CTA */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 headline-mixed">
                  Let&apos;s <span className="accent">Connect</span>
                </h2>
                <p className="text-lg mb-8" style={{ color: 'var(--page-text-muted)' }}>
                  I&apos;m always interested in discussing infrastructure challenges, performance optimization,
                  or potential opportunities.
                </p>
                <div className="flex justify-center gap-6 terminal-text">
                  <a
                    href="https://github.com/manvirheer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--page-primary)] transition-colors"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    [ GitHub ]
                  </a>
                  <a
                    href="https://linkedin.com/in/manvirheer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--page-primary)] transition-colors"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    [ LinkedIn ]
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <TerminalStatus />
        </main>
      </div>
    </>
  )
}
