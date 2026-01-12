'use client'

import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { Header } from '@/app/components/layout/Header'
import { StickyTabs, useScrollTabs } from '@/app/components/ui/SectionTabs'
import { TerminalWindow } from '@/app/components/ui/TerminalWindow'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { AnimatedComparison } from '@/app/components/ui/AnimatedMetric'
import { PackageManifest, defaultSkills } from '@/app/components/ui/PackageManifest'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { FloatingParallaxImages } from '@/app/components/ui/FloatingParallaxImages'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'

const tabs = [
  { id: 'impact', label: 'IMPACT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'stack', label: 'STACK' },
  { id: 'connect', label: 'CONNECT' },
]

export default function Home() {
  const { activeTab, scrollToSection } = useScrollTabs(tabs.map((t) => t.id))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manvir Heer',
    url: 'https://manvirheer.com',
    jobTitle: 'DevOps / Infrastructure Engineer',
    description:
      'Infrastructure engineer shipping production systems at Tenzr Health. RAG applications, database optimization, Docker containerization, DNS management, and HIPAA-compliant healthcare infrastructure.',
    sameAs: [
      'https://github.com/manvirheer',
      'https://linkedin.com/in/manvirheer',
    ],
    knowsAbout: [
      'DevOps',
      'Infrastructure Engineering',
      'AWS',
      'Azure',
      'Docker',
      'PostgreSQL',
      'Python',
      'TypeScript',
      'RAG Systems',
      'Database Optimization',
      'HIPAA Compliance',
      'Performance Engineering',
    ],
  }

  const careerWins = [
    {
      title: 'PgBouncer Database Optimization',
      company: 'Tenzr Health',
      year: '2025',
      metric: { before: 329, after: 2, unit: 'ms', label: 'Connection Time' },
      secondaryMetric: '+458% concurrent handling',
      description:
        'Implemented connection pooling with PgBouncer for HIPAA-compliant healthcare platform. Built benchmarking tool and documentation for reproducibility.',
      tech: ['PostgreSQL', 'PgBouncer', 'Docker'],
    },
    {
      title: 'AI Exercise Plan Generator (RAG)',
      company: 'Tenzr Health',
      year: '2025',
      metric: { before: 1578, after: 1, unit: '', label: 'Exercises → Intelligent Plans' },
      secondaryMetric: 'First production RAG system',
      description:
        'Built full-stack AI application with hybrid search (70% semantic + 30% keyword) for HIPAA-compliant healthcare platform.',
      tech: ['Python', 'RAG', 'LlamaIndex', 'Qdrant'],
    },
    {
      title: 'Marketplace Performance Optimization',
      company: 'A2P Energy',
      year: '2024',
      metric: { before: 20, after: 2, unit: 's', label: 'Page Load Time' },
      secondaryMetric: '90% faster',
      description:
        'Database query optimization and eager loading for energy marketplace platform serving industrial facilities.',
      tech: ['NestJS', 'PostgreSQL', 'Query Optimization'],
    },
  ]

  const personalProjects = [
    {
      title: 'PickMyElective',
      tagline: 'AI-powered course recommendations',
      description:
        'RAG-powered system helping university students discover electives through natural language search. 3-tier microservices with semantic search over 1,200+ courses.',
      tech: ['React', 'Spring Boot', 'FastAPI', 'ChromaDB', 'Gemini'],
      link: 'https://github.com/manvirheer/pickmyelective',
    },
    {
      title: 'Whisper Typer',
      tagline: 'Voice-to-text with AMD GPU acceleration',
      description:
        'Real-time voice transcription system using whisper.cpp with Vulkan backend. Solves AMD GPU compatibility for seamless voice typing on Linux.',
      tech: ['Python', 'Whisper.cpp', 'Vulkan'],
      link: 'https://github.com/manvirheer/whisper-typer',
    },
    {
      title: 'nx-logstats',
      tagline: 'NGINX log analysis CLI',
      description:
        'Command-line tool for analyzing metrics from NGINX access logs. Performance insights and traffic patterns.',
      tech: ['Python', 'CLI', 'Data Analysis'],
      link: 'https://github.com/manvirheer/nx-logstats',
    },
    {
      title: 'Vancouver Parking Analysis',
      tagline: 'Geospatial data analysis',
      description:
        'In-depth analysis of Vancouver parking ticket data using Python and geospatial techniques. Data visualization and pattern discovery.',
      tech: ['Python', 'Geospatial', 'Data Viz'],
      link: 'https://github.com/manvirheer/parkingticketanalysis',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GridOverlay />
      <Header />

      {/* Sticky Navigation Tabs */}
      <StickyTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={scrollToSection}
        showAfterScroll={400}
      />

      <div className="min-h-screen pt-20">
        <main className="homepage">
          {/* ============================================
              HERO SECTION
              ============================================ */}
          <section className="relative py-16 md:py-24 lg:py-32 text-center overflow-hidden">
            {/* Corner gradient glow - animated soft pastel colors */}
            <motion.div
              className="absolute -top-40 -right-40 w-[1000px] h-[1000px] pointer-events-none"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: `
                  radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.2) 0%, transparent 45%),
                  radial-gradient(circle at 85% 20%, rgba(251, 182, 206, 0.22) 0%, transparent 40%),
                  radial-gradient(circle at 55% 10%, rgba(165, 243, 252, 0.15) 0%, transparent 50%)
                `,
              }}
            />
            <motion.div
              className="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              style={{
                background: `
                  radial-gradient(circle at 60% 40%, rgba(251, 207, 232, 0.25) 0%, transparent 50%)
                `,
              }}
            />

            {/* Floating parallax images - Anytype.io style */}
            <FloatingParallaxImages />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 headline-mixed relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DevOps / Infrastructure
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="accent text-gradient-animated"
              >
                Engineer
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 relative z-10"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Shipping <span className="prose-accent">measurable</span> performance wins
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="terminal-text text-sm md:text-base relative z-10"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Healthcare tech (HIPAA) • AI/RAG systems • Performance engineering • Multi-cloud
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center gap-4 sm:gap-6 mt-8 terminal-text relative z-10"
            >
              <a
                href="https://github.com/manvirheer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--terminal-green)] transition-colors"
                style={{ color: 'var(--page-text-muted)' }}
              >
                [ GitHub ]
              </a>
              <a
                href="https://linkedin.com/in/manvirheer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--terminal-cyan)] transition-colors"
                style={{ color: 'var(--page-text-muted)' }}
              >
                [ LinkedIn ]
              </a>
            </motion.div>
            </div>
          </section>

          {/* ============================================
              CAREER IMPACT SECTION (Dark Background)
              ============================================ */}
          <section id="impact" className="section-dark py-12 md:py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/career" command="ls -la impact/" className="mb-4" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl headline-mixed mb-4">
                  Career <span className="accent">Impact</span>
                </h2>
                <p className="text-lg mb-12" style={{ color: 'var(--page-text-muted)' }}>
                  Quantified wins from production systems at Tenzr Health, A2P Energy, and SaaSberry
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerWins.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <TerminalWindow
                      title={`${project.company.toLowerCase().replace(/\s/g, '-')}.md`}
                      animate={false}
                    >
                      <div className="space-y-4">
                        {/* Project Info */}
                        <div>
                          <h3 className="font-bold text-lg mb-1">
                            {project.title}
                          </h3>
                          <p
                            className="text-sm mb-3"
                            style={{ color: 'var(--page-primary)' }}
                          >
                            {project.company} • {project.year}
                          </p>
                          <p className="text-sm mb-4" style={{ color: 'var(--page-text-muted)' }}>{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2 py-1 rounded terminal-text"
                                style={{
                                  backgroundColor: 'rgba(0, 102, 255, 0.1)',
                                  color: 'var(--page-primary)',
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metric Visualization */}
                        <div className="pt-4 border-t" style={{ borderColor: 'var(--page-border)' }}>
                          <AnimatedComparison
                            before={project.metric.before}
                            after={project.metric.after}
                            unit={project.metric.unit}
                            label={project.metric.label}
                          />

                          {project.secondaryMetric && (
                            <div
                              className="text-sm terminal-text mt-2"
                              style={{ color: 'var(--page-text-muted)' }}
                            >
                              {project.secondaryMetric}
                            </div>
                          )}
                        </div>
                      </div>
                    </TerminalWindow>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================
              PERSONAL PROJECTS SECTION (Light Background)
              ============================================ */}
          <section id="projects" className="py-12 md:py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/projects" command="ls -la personal/" className="mb-4" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl headline-mixed mb-4">
                  Personal <span className="accent">Projects</span>
                </h2>
                <p className="text-lg mb-12" style={{ color: 'var(--page-text-muted)' }}>
                  Side projects exploring AI, systems programming, and data analysis
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-6">
                {personalProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <motion.div
                      className="p-6 h-full flex flex-col bg-[var(--page-surface)] border border-[var(--page-border)] rounded-lg transition-all duration-300"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="text-xs terminal-text mb-3"
                        style={{ color: 'var(--terminal-green)' }}
                      >
                        ~/projects/{project.title.toLowerCase().replace(/\s/g, '-')}
                      </div>

                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p
                        className="text-sm prose-accent mb-3"
                        style={{ color: 'var(--page-primary)' }}
                      >
                        {project.tagline}
                      </p>
                      <p
                        className="text-sm mb-6 flex-1"
                        style={{ color: 'var(--page-text-muted)' }}
                      >
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 rounded terminal-text"
                              style={{
                                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                                color: 'var(--page-primary)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs terminal-text hover:text-[var(--page-primary)] transition-colors"
                          >
                            [ GitHub ] →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================
              TECH STACK SECTION (Light Background)
              ============================================ */}
          <section id="stack" className="py-12 md:py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <SectionDivider path="~" command="cat requirements.txt" className="mb-4" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl headline-mixed mb-4">
                  Tech <span className="accent">Stack</span>
                </h2>
                <p className="text-lg mb-12" style={{ color: 'var(--page-text-muted)' }}>
                  Tools and technologies I use to build and ship
                </p>
              </motion.div>

              <div className="max-w-2xl">
                <PackageManifest skills={defaultSkills} />
              </div>
            </div>
          </section>

          {/* ============================================
              CONNECT SECTION (Dark Background)
              ============================================ */}
          <section id="connect" className="section-dark py-12 md:py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
              <SectionDivider path="~" command="./connect.sh" className="mb-4 text-left" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl headline-mixed mb-8">
                  Let&apos;s <span className="accent">Connect</span>
                </h2>

                <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--page-text-muted)' }}>
                  I&apos;m always interested in discussing infrastructure challenges, performance
                  optimization, or potential collaborations.
                </p>

                <div className="flex justify-center gap-6 sm:gap-8 terminal-text text-base sm:text-lg">
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

          {/* ============================================
              FOOTER
              ============================================ */}
          <TerminalStatus />
        </main>
      </div>
    </>
  )
}
