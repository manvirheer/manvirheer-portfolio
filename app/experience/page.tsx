'use client'

import { Header } from '@/app/components/layout/Header'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { TerminalWindow } from '@/app/components/ui/TerminalWindow'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'

const workExperience = [
  {
    company: 'Tenzr Health',
    role: 'DevOps & Infrastructure Co-op',
    location: 'Vancouver, BC (Remote)',
    period: 'May 2025 - Present',
    type: 'Co-op',
    description: 'Building infrastructure for a healthcare technology platform focused on patient engagement and clinical workflows. Part of a newly formed DevOps/Infrastructure/Observability team.',
    achievements: [
      'Reduced database connection latency by 99.4% (329ms → 2ms) through PgBouncer connection pooling optimization',
      'Built first production RAG system - AI exercise plan generator processing 1,578+ exercises with hybrid search',
      'Implemented git hooks and code quality standards across 5+ repositories',
      'Created automated API documentation pipelines using OpenAPI spec generation',
      'Deployed AWS Lambda functions for video processing and event-driven workflows',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'LlamaIndex', 'Qdrant', 'Next.js'],
  },
  {
    company: 'A2P Energy',
    role: 'Full Stack Developer Co-op',
    location: 'India (Remote)',
    period: 'Sep 2024 - Dec 2024',
    type: 'Co-op',
    description: 'Developed features for an energy marketplace platform serving industrial facilities. Conducted on-site user research with factory workers to improve UX.',
    achievements: [
      'Optimized page load times by 90% (20s → 2s) through database query optimization and eager loading',
      'Built shift logging system with role-based access for users with varying technical literacy',
      'Conducted on-site user research at manufacturing facilities to inform UI/UX decisions',
      'Implemented bilingual support for Hindi-speaking users',
    ],
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'React', 'Query Optimization'],
  },
  {
    company: 'SaaSberry Innovation Labs',
    role: 'Customer Success Analyst',
    location: 'Vancouver, BC',
    period: 'Feb 2022 - Mar 2023',
    type: 'Full-time',
    description: 'Transitioned from development to customer-facing role, bridging technical capabilities with client needs for a B2B SaaS platform.',
    achievements: [
      'Conducted 30+ client meetings for requirements gathering and solution consulting',
      'Improved customer satisfaction scores by 15%+ through proactive support',
      'Managed Agile ceremonies including standups, retrospectives, and user story refinement',
      'Translated technical capabilities into business value for non-technical stakeholders',
    ],
    tech: ['Azure DevOps', 'Agile', 'Client Relations', 'Requirements Analysis'],
  },
  {
    company: 'SaaSberry Innovation Labs',
    role: 'Junior Back-End Developer',
    location: 'Vancouver, BC',
    period: 'Mar 2021 - Feb 2022',
    type: 'Full-time',
    description: 'First professional development role focused on Azure cloud services and deployment automation for enterprise clients.',
    achievements: [
      'Automated 15+ deployment scripts reducing deployment time by 40%',
      'Configured Azure B2C tenants and App Services for multi-tenant SaaS architecture',
      'Built internal bug tracking and testing coordination tooling',
      'Managed Azure DevTest Labs and load testing infrastructure',
    ],
    tech: ['Azure', 'Python', 'CI/CD', 'Azure B2C', 'App Services', 'DevTest Labs'],
  },
]

const education = [
  {
    school: 'Simon Fraser University',
    degree: 'Bachelor of Science in Computing Science',
    period: 'Sep 2022 - Jan 2026',
    location: 'Burnaby, BC',
    highlights: [
      'Ken Caple and International Summit Transfer Entrance Scholarship',
      '4th year standing',
    ],
  },
  {
    school: 'Douglas College',
    degree: 'Diploma in Computer Studies and Information Systems',
    period: 'Jan 2019 - Dec 2020',
    location: 'New Westminster, BC',
    highlights: [
      'GPA: 3.71',
      'International Education Award of Distinction',
    ],
  },
]

const certifications = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    id: 'AZ-900',
    date: 'August 2022',
  },
]

export default function ExperiencePage() {
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
                  Professional <span className="accent">Experience</span>
                </h1>
                <p className="text-lg md:text-xl" style={{ color: 'var(--page-text-muted)' }}>
                  From Azure deployments to production RAG systems. Building infrastructure
                  that scales and connecting technical work to business impact.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/career" command="ls -la jobs/" className="mb-8" />

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={`${job.company}-${job.role}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <TerminalWindow
                      title={`${job.company.toLowerCase().replace(/\s/g, '-')}.md`}
                      animate={false}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">{job.role}</h3>
                            <p style={{ color: 'var(--page-primary)' }}>{job.company}</p>
                          </div>
                          <div className="text-sm terminal-text" style={{ color: 'var(--page-text-muted)' }}>
                            <div>{job.period}</div>
                            <div>{job.location}</div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
                          {job.description}
                        </p>

                        {/* Achievements */}
                        <div className="pt-4 border-t" style={{ borderColor: 'var(--page-border)' }}>
                          <p className="text-xs terminal-text mb-2" style={{ color: 'var(--terminal-green)' }}>
                            # Key Achievements
                          </p>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <span style={{ color: 'var(--terminal-cyan)' }}>→</span>
                                <span style={{ color: 'var(--page-text-muted)' }}>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {job.tech.map((t) => (
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
                    </TerminalWindow>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/education" command="cat degrees.txt" className="mb-8" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.school}
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
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{edu.school}</h3>
                        <p style={{ color: 'var(--page-primary)' }}>{edu.degree}</p>
                      </div>
                      <div className="text-sm terminal-text" style={{ color: 'var(--page-text-muted)' }}>
                        <div>{edu.period}</div>
                        <div>{edu.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span style={{ color: 'var(--terminal-green)' }}>•</span>
                          <span style={{ color: 'var(--page-text-muted)' }}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider path="~/certs" command="ls *.cert" className="mb-8" />

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                    style={{
                      backgroundColor: 'var(--page-surface)',
                      borderColor: 'var(--page-border)',
                    }}
                  >
                    <div>
                      <h3 className="font-bold">{cert.name}</h3>
                      <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
                        {cert.issuer} • {cert.id}
                      </p>
                    </div>
                    <span className="terminal-text text-sm" style={{ color: 'var(--terminal-green)' }}>
                      {cert.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <TerminalStatus />
        </main>
      </div>
    </>
  )
}
