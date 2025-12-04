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

  const projects = [
    {
      title: 'nx-logstats',
      description: 'CLI tool for analyzing metrics from NGINX access logs',
      tech: 'Python',
      link: 'https://github.com/manvirheer/nx-logstats',
    },
    {
      title: 'Parking Ticket Analysis',
      description: 'Geospatial analysis of Vancouver parking data',
      tech: 'Data Analysis',
      link: 'https://github.com/manvirheer/vancouver-parking-analysis',
    },
    {
      title: 'Flow Metrics',
      description: 'Next.js frontend for industrial client',
      tech: 'TypeScript',
      link: null,
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-serif)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gradient-animated"
              >
                Software
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
              className="text-2xl md:text-3xl"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Building precision-engineered digital experiences
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
                Full-stack developer with expertise in Python, TypeScript, and modern web technologies.
                Passionate about data analysis, DevOps, and building scalable applications.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {['Python', 'TypeScript', 'Next.js', 'React', 'Node.js'].map((tech) => (
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

          {/* Projects Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => {
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
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
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
