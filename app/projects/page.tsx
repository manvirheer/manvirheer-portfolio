'use client'

import { Header } from '@/app/components/layout/Header'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { TerminalWindow } from '@/app/components/ui/TerminalWindow'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'

const featuredProjects = [
  {
    id: 'rag-exercise-generator',
    title: 'RAG Exercise Plan Generator',
    subtitle: 'Production AI System for Healthcare',
    company: 'Tenzr Health',
    period: 'Oct 2025',
    status: 'Production',
    description:
      'AI-powered exercise plan generator using Retrieval-Augmented Generation. Healthcare professionals input natural language queries like "shoulder exercises for post-surgery recovery, week 2" and receive personalized, structured rehabilitation plans.',
    problem:
      'Tenzr had 1,578 static exercises in their database but no intelligent way to surface them. Creating personalized rehabilitation plans required manual exercise selection, which was time-consuming and inconsistent.',
    solution:
      'Built a full RAG pipeline with hybrid search (70% semantic + 30% keyword) that transforms natural language queries into structured exercise plans. The system detects constraints like injuries and restrictions, ensuring safety-focused recommendations.',
    impact: [
      'First production RAG system at Tenzr',
      'Transformed 1,578 exercises into intelligent, queryable system',
      'Created 40+ KB of technical documentation across 6 focused docs',
      'Established foundation for future AI-powered healthcare features',
    ],
    architecture: `User Query
  → Constraint Detection (injuries, goals)
  → Hybrid Search (70% semantic + 30% keyword)
  → Context Preparation (top 15 exercises)
  → LLM Generation (structured prompts)
  → Structured Output (exercise plan)`,
    tech: [
      'Python',
      'FastAPI',
      'LlamaIndex',
      'Qdrant',
      'OpenAI GPT-4o-mini',
      'Next.js',
      'Docker',
    ],
    learnings: [
      'Hybrid search significantly outperforms pure semantic for domain-specific retrieval',
      'Context window size matters - too much context causes LLM parse errors',
      'LlamaIndex provides better RAG primitives than LangChain for this use case',
    ],
    ownership: '100% backend/architecture, 95% frontend, 100% documentation',
  },
  {
    id: 'pgbouncer-optimization',
    title: 'PgBouncer Database Optimization',
    subtitle: '99.4% Latency Reduction',
    company: 'Tenzr Health',
    period: '2025',
    status: 'Production',
    description:
      'Connection pooling optimization that dramatically improved database performance across the entire platform. Built with comprehensive benchmarking tools and documentation for reproducibility.',
    problem:
      'Direct PostgreSQL connections were creating significant latency overhead. Each new connection took ~329ms to establish, causing noticeable delays in healthcare workflows where responsiveness matters.',
    solution:
      'Implemented PgBouncer connection pooling with optimized configuration. Created custom benchmarking tooling to measure before/after performance with statistical rigor.',
    impact: [
      'Connection time: 329ms → 2ms (99.4% reduction)',
      'Concurrent handling: +458% capacity (5.6×)',
      'Throughput: +6.3% queries per second',
      'Complex queries: 13% faster execution',
    ],
    metrics: {
      before: '329ms connection time',
      after: '2ms connection time',
      improvement: '99.4%',
    },
    tech: ['PostgreSQL', 'PgBouncer', 'Benchmarking', 'Documentation'],
    learnings: [
      'Performance improvements without metrics are just opinions',
      'Benchmarking tooling is as important as the optimization itself',
      'Documentation enables future engineers to build on your work',
    ],
    ownership: 'Full implementation + benchmarking tool + documentation',
  },
  {
    id: 'marketplace-performance',
    title: 'Energy Marketplace Optimization',
    subtitle: '90% Page Load Improvement',
    company: 'A2P Energy',
    period: 'Sep - Dec 2024',
    status: 'Production',
    description:
      'Database and application performance optimization for an energy marketplace platform serving industrial facilities in India.',
    problem:
      'Page loads were taking 20+ seconds, making the platform unusable for factory workers with limited time and varying technical literacy. Users were abandoning the platform.',
    solution:
      'Identified inefficient database queries using N+1 patterns. Implemented eager loading, query optimization, and strategic caching to reduce round trips.',
    impact: [
      'Page load time: 20s → 2s (90% reduction)',
      'Significantly improved user adoption',
      'Enabled usage by workers with limited technical background',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Query Optimization', 'Eager Loading'],
    learnings: [
      'On-site user research reveals problems that logs never show',
      'Performance is a feature, especially for users with limited connectivity',
      'N+1 queries are the most common performance killer',
    ],
    ownership: 'Database optimization + performance profiling',
  },
  {
    id: 'shift-logging-system',
    title: 'Industrial Shift Logging System',
    subtitle: 'Full-Stack for Manufacturing',
    company: 'A2P Energy',
    period: 'Sep - Dec 2024',
    status: 'Production',
    description:
      'Role-based access control system for industrial shift logging, built after conducting on-site user research at manufacturing facilities.',
    problem:
      'Factory workers needed to log shifts but existing systems assumed high technical literacy. The platform needed to work for users ranging from floor workers to plant managers, with Hindi language support.',
    solution:
      'Built a full-stack application with role-based access control, bilingual interface (English/Hindi), and simplified UI patterns informed by direct observation of users.',
    impact: [
      'Enabled shift logging across all technical literacy levels',
      'Bilingual support for Hindi-speaking users',
      'Role-based access control for workers, supervisors, and managers',
    ],
    tech: ['NestJS', 'Next.js', 'TypeScript', 'RBAC', 'i18n'],
    learnings: [
      'User research at actual work sites is invaluable',
      'Accessibility means different things in different contexts',
      'Simple UX often requires more complex engineering',
    ],
    ownership: 'Full-stack development + user research',
  },
  {
    id: 'pickmyelective',
    title: 'PickMyElective',
    subtitle: 'AI-Powered Course Discovery for University Students',
    company: 'JourneyHacks 2026',
    period: 'Jan 2026',
    status: 'Hackathon',
    description:
      'RAG-powered course recommendation system that helps university students discover elective courses through natural language search. Built in 12 hours at JourneyHacks 2026 with a team of 3.',
    problem:
      'University students struggle to find elective courses that match their interests. Traditional course catalogs require keyword searches and manual filtering through hundreds of options, with no way to express preferences naturally.',
    solution:
      'Built a 3-tier microservices system with RAG-powered semantic search. Users describe courses in natural language like "easy science course with no prerequisites" and receive semantically relevant matches with personalized explanations for why each course fits.',
    impact: [
      'Semantic search over 1,200+ courses using ChromaDB vector database',
      '5-step RAG pipeline: interpret → embed → search → rank → explain',
      'Hybrid ranking: 80% semantic relevance + 20% elective quality score',
      'Sub-second response times with rate limiting and query history',
    ],
    architecture: `User Query
  → Query Interpretation (Gemini LLM)
  → Embedding Generation (OpenAI)
  → Vector Search (ChromaDB)
  → Post-filtering (campus, level, WQB)
  → Ranking (semantic + elective score)
  → Match Reason Generation (Gemini LLM)
  → Personalized Results`,
    tech: [
      'React 19',
      'TypeScript',
      'Spring Boot 3.4',
      'Java 21',
      'FastAPI',
      'ChromaDB',
      'OpenAI Embeddings',
      'Google Gemini',
      'PostgreSQL',
      'JWT + OTP Auth',
    ],
    learnings: [
      'RAG pipeline design with hybrid ranking outperforms pure semantic search',
      'Post-filtering after vector search handles complex filter combinations efficiently',
      'Microservices architecture enables independent scaling of AI workloads',
    ],
    ownership: 'Led full-stack development: RAG pipeline, backend API, and frontend UI',
  },
]

const sideProjects = [
  {
    title: 'This Portfolio',
    description:
      'Terminal-aesthetic portfolio built with Next.js 15, React 19, and Tailwind CSS 4. Features three theme modes, Framer Motion animations, and mobile-first responsive design.',
    tech: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'Framer Motion'],
    link: 'https://github.com/manvirheer/manvirheer-portfolio',
  },
]

export default function ProjectsPage() {
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
                  Project <span className="accent">Case Studies</span>
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  Deep dives into production systems I&apos;ve built. Each project includes
                  the problem, solution, measurable impact, and what I learned.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider
                path="~/projects"
                command="ls -la featured/"
                className="mb-8"
              />

              <div className="space-y-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <TerminalWindow
                      title={`${project.id}.md`}
                      animate={false}
                    >
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold">
                              {project.title}
                            </h3>
                            <p style={{ color: 'var(--page-primary)' }}>
                              {project.subtitle}
                            </p>
                          </div>
                          <div
                            className="text-sm terminal-text text-right"
                            style={{ color: 'var(--page-text-muted)' }}
                          >
                            <div>{project.company}</div>
                            <div>{project.period}</div>
                            <span
                              className="inline-block px-2 py-0.5 rounded text-xs mt-1"
                              style={{
                                backgroundColor: 'rgba(74, 222, 128, 0.1)',
                                color: 'var(--terminal-green)',
                              }}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm md:text-base"
                          style={{ color: 'var(--page-text-muted)' }}
                        >
                          {project.description}
                        </p>

                        {/* Problem */}
                        <div
                          className="pt-4 border-t"
                          style={{ borderColor: 'var(--page-border)' }}
                        >
                          <p
                            className="text-xs terminal-text mb-2"
                            style={{ color: 'var(--terminal-yellow)' }}
                          >
                            # The Problem
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: 'var(--page-text-muted)' }}
                          >
                            {project.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <p
                            className="text-xs terminal-text mb-2"
                            style={{ color: 'var(--terminal-cyan)' }}
                          >
                            # The Solution
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: 'var(--page-text-muted)' }}
                          >
                            {project.solution}
                          </p>
                        </div>

                        {/* Architecture (if present) */}
                        {project.architecture && (
                          <div>
                            <p
                              className="text-xs terminal-text mb-2"
                              style={{ color: 'var(--terminal-magenta)' }}
                            >
                              # Architecture
                            </p>
                            <pre
                              className="text-xs p-3 rounded overflow-x-auto terminal-text"
                              style={{
                                backgroundColor: 'var(--page-background)',
                                color: 'var(--page-text-muted)',
                              }}
                            >
                              {project.architecture}
                            </pre>
                          </div>
                        )}

                        {/* Impact */}
                        <div>
                          <p
                            className="text-xs terminal-text mb-2"
                            style={{ color: 'var(--terminal-green)' }}
                          >
                            # Impact
                          </p>
                          <ul className="space-y-1">
                            {project.impact.map((item, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <span style={{ color: 'var(--terminal-green)' }}>
                                  ✓
                                </span>
                                <span style={{ color: 'var(--page-text-muted)' }}>
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metrics highlight (if present) */}
                        {project.metrics && (
                          <div
                            className="flex flex-wrap gap-4 p-4 rounded"
                            style={{ backgroundColor: 'var(--page-background)' }}
                          >
                            <div className="text-center">
                              <div
                                className="text-xs terminal-text"
                                style={{ color: 'var(--page-text-muted)' }}
                              >
                                Before
                              </div>
                              <div
                                className="font-bold"
                                style={{ color: 'var(--terminal-red)' }}
                              >
                                {project.metrics.before}
                              </div>
                            </div>
                            <div
                              className="text-2xl"
                              style={{ color: 'var(--page-text-muted)' }}
                            >
                              →
                            </div>
                            <div className="text-center">
                              <div
                                className="text-xs terminal-text"
                                style={{ color: 'var(--page-text-muted)' }}
                              >
                                After
                              </div>
                              <div
                                className="font-bold"
                                style={{ color: 'var(--terminal-green)' }}
                              >
                                {project.metrics.after}
                              </div>
                            </div>
                            <div
                              className="text-2xl"
                              style={{ color: 'var(--page-text-muted)' }}
                            >
                              =
                            </div>
                            <div className="text-center">
                              <div
                                className="text-xs terminal-text"
                                style={{ color: 'var(--page-text-muted)' }}
                              >
                                Improvement
                              </div>
                              <div
                                className="font-bold text-xl"
                                style={{ color: 'var(--page-primary)' }}
                              >
                                {project.metrics.improvement}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Learnings */}
                        <div>
                          <p
                            className="text-xs terminal-text mb-2"
                            style={{ color: 'var(--terminal-cyan)' }}
                          >
                            # What I Learned
                          </p>
                          <ul className="space-y-1">
                            {project.learnings.map((learning, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <span style={{ color: 'var(--terminal-cyan)' }}>
                                  →
                                </span>
                                <span style={{ color: 'var(--page-text-muted)' }}>
                                  {learning}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Ownership */}
                        <div
                          className="text-xs terminal-text pt-4 border-t"
                          style={{
                            borderColor: 'var(--page-border)',
                            color: 'var(--page-text-muted)',
                          }}
                        >
                          <span style={{ color: 'var(--terminal-green)' }}>
                            ownership:
                          </span>{' '}
                          {project.ownership}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
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
                    </TerminalWindow>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Side Projects */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider
                path="~/projects"
                command="ls personal/"
                className="mb-8"
              />

              <div className="grid md:grid-cols-2 gap-6">
                {sideProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
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
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: 'var(--page-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: 'var(--page-text-muted)' }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded terminal-text"
                          style={{
                            backgroundColor: 'var(--page-background)',
                            border: '1px solid var(--page-border)',
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
                        className="text-sm terminal-text hover:underline"
                        style={{ color: 'var(--page-primary)' }}
                      >
                        [ View Source ]
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 headline-mixed">
                  Want to <span className="accent">Collaborate</span>?
                </h2>
                <p
                  className="text-lg mb-8"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  I&apos;m always interested in discussing infrastructure challenges,
                  performance optimization, or interesting technical problems.
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
