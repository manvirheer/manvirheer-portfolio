'use client'

import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manvir Heer',
    url: 'https://manvirheer.com',
    jobTitle: 'Software Engineer',
    description: 'Full-stack software engineer specializing in Python, TypeScript, and modern web technologies',
    sameAs: [
      'https://github.com/manvirheer',
      'https://linkedin.com/in/manvirheer',
    ],
    knowsAbout: [
      'Software Engineering',
      'Python',
      'TypeScript',
      'Next.js',
      'React',
      'Data Analysis',
      'DevOps',
    ],
  }

  const careerWins = [
    {
      title: 'PgBouncer Database Optimization',
      company: 'Tenzr Health • 2025',
      metrics: '329ms → 2ms connection time • +458% concurrent handling',
      description: 'Implemented connection pooling with PgBouncer for HIPAA-compliant healthcare platform. Built benchmarking tool and documentation for reproducibility.',
      tech: 'PostgreSQL • PgBouncer • Docker',
      link: null,
      badge: '🏢 Professional',
    },
    {
      title: 'AI Exercise Plan Generator (RAG)',
      company: 'Tenzr Health • 2025',
      metrics: 'First production RAG system • 1,578 exercises → intelligent plans',
      description: 'Built full-stack AI application with hybrid search (70% semantic + 30% keyword) for HIPAA-compliant healthcare platform. Python/FastAPI backend, Next.js frontend, Qdrant vector database.',
      tech: 'Python • RAG • LlamaIndex • Qdrant',
      link: null,
      badge: '🏢 Professional',
    },
    {
      title: 'Marketplace Performance Optimization',
      company: 'A2P Energy • 2024',
      metrics: '20s → 2s page load time (90% faster)',
      description: 'Database query optimization and eager loading for energy marketplace platform serving industrial facilities.',
      tech: 'NestJS • PostgreSQL • Query Optimization',
      link: null,
      badge: '🏢 Professional',
    },
  ]

  const personalProjects = [
    {
      title: 'Whisper Typer',
      tagline: 'Voice-to-text with AMD GPU acceleration',
      description: 'Real-time voice transcription system using whisper.cpp with Vulkan backend. Solves AMD GPU compatibility for seamless voice typing on Linux.',
      tech: 'Python • Whisper.cpp • Vulkan',
      link: 'https://github.com/manvirheer/whisper-typer',
      badge: '🔧 Personal',
    },
    {
      title: 'nx-logstats',
      tagline: 'NGINX log analysis CLI',
      description: 'Command-line tool for analyzing metrics from NGINX access logs. Performance insights and traffic patterns.',
      tech: 'Python • CLI • Data Analysis',
      link: 'https://github.com/manvirheer/nx-logstats',
      badge: '🔧 Personal',
    },
    {
      title: 'Vancouver Parking Analysis',
      tagline: 'Geospatial data analysis',
      description: 'In-depth analysis of Vancouver parking ticket data using Python and geospatial techniques. Data visualization and pattern discovery.',
      tech: 'Python • Geospatial • Data Viz',
      link: 'https://github.com/manvirheer/parkingticketanalysis',
      badge: '🔧 Personal',
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
      <SystemInfo />

      <div className="min-h-screen pt-20">
        <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 space-y-32">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-serif)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gradient-animated"
              >
                DevOps / Infrastructure
              </motion.span>
              {' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Engineer
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl mb-4"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Shipping measurable performance wins
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg font-mono"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Healthcare tech (HIPAA) • AI/RAG systems • Performance engineering • Multi-cloud (AWS + Azure)
            </motion.p>
          </section>

          {/* About Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">About</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--page-text-muted)' }}>
                Infrastructure engineer shipping production systems at Tenzr Health. Recent work: RAG-powered
                exercise generator, database connection pooling, Docker containerization, DNS management, and
                HIPAA-compliant healthcare infrastructure on AWS. I handle deployment pipelines, observability,
                and infrastructure automation.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {['Python', 'TypeScript', 'AWS', 'Azure', 'PostgreSQL', 'Docker', 'Next.js', 'React', 'Node.js', 'RAG/LLMs', 'Qdrant'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium border border-current"
                    style={{ borderRadius: '2px' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Career Impact Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Career Impact</h2>
            <p className="text-lg mb-12" style={{ color: 'var(--page-text-muted)' }}>
              Quantified wins from production systems at Tenzr Health, A2P Energy, and SaaSberry
            </p>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {careerWins.map((project, index) => {
                const shadowClass =
                  index === 0 ? 'shadow-gradient-blue-purple' :
                  index === 1 ? 'shadow-gradient-blue-cyan' :
                  'shadow-gradient-purple-pink';

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <motion.div
                      className={`p-6 h-full flex flex-col bg-[var(--page-surface)] ${shadowClass} transition-all duration-300 rounded`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-xs font-mono mb-2" style={{ color: 'var(--page-text-muted)' }}>
                        {project.badge}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm font-medium mb-3" style={{ color: 'var(--page-primary)' }}>
                        {project.company}
                      </p>
                      <p className="text-sm font-bold mb-4" style={{ color: 'var(--page-text)' }}>
                        {project.metrics}
                      </p>
                      <p className="text-sm mb-6 flex-1" style={{ color: 'var(--page-text-muted)' }}>
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs px-3 py-1"
                          style={{
                            backgroundColor: 'rgba(0, 102, 255, 0.1)',
                            color: 'var(--page-primary)',
                            borderRadius: '2px',
                          }}
                        >
                          {project.tech}
                        </span>
                        <span className="text-xs font-mono" style={{ color: 'var(--page-text-muted)' }}>
                          [ Private ]
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Personal Projects Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">Personal Projects</h2>
            <p className="text-lg mb-12" style={{ color: 'var(--page-text-muted)' }}>
              Side projects exploring AI, systems programming, and data analysis
            </p>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => {
                const shadowClass =
                  index === 0 ? 'shadow-gradient-blue-purple' :
                  index === 1 ? 'shadow-gradient-blue-cyan' :
                  'shadow-gradient-purple-pink';

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <motion.div
                      className={`p-6 h-full flex flex-col bg-[var(--page-surface)] ${shadowClass} transition-all duration-300 rounded`}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-xs font-mono mb-2" style={{ color: 'var(--page-text-muted)' }}>
                        {project.badge}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm font-medium mb-4 italic" style={{ color: 'var(--page-primary)' }}>
                        {project.tagline}
                      </p>
                      <p className="text-sm mb-6 flex-1" style={{ color: 'var(--page-text-muted)' }}>
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs px-3 py-1"
                          style={{
                            backgroundColor: 'rgba(0, 102, 255, 0.1)',
                            color: 'var(--page-primary)',
                            borderRadius: '2px',
                          }}
                        >
                          {project.tech}
                        </span>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono group-hover:text-[var(--page-primary)] transition-colors"
                          >
                            [ GitHub ] →
                          </a>
                        ) : (
                          <span className="text-xs font-mono" style={{ color: 'var(--page-text-muted)' }}>
                            [ Private ]
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Connect Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center py-16"
          >
            <h2 className="text-4xl font-bold mb-8">Let&apos;s Connect</h2>
            <div className="flex justify-center gap-8 text-lg font-mono">
              <a
                href="https://github.com/manvirheer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--page-primary)] transition-colors"
              >
                [ GitHub ]
              </a>
              <a
                href="https://linkedin.com/in/manvirheer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--page-primary)] transition-colors"
              >
                [ LinkedIn ]
              </a>
            </div>
          </motion.section>

          {/* Footer Note */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center py-8 border-t"
            style={{ borderColor: 'var(--page-border)' }}
          >
            <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
              Building v1 of this portfolio • Press <kbd className="px-2 py-1 border border-current text-xs">Cmd/Ctrl + G</kbd> for grid overlay
            </p>
          </motion.section>
        </main>
      </div>
    </>
  )
}
