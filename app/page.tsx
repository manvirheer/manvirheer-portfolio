import { Fragment } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import { SiteNav } from './SiteNav'

const PUNJABI_NAME = 'ਮਨਵੀਰ ਹੀਰ'

const work = [
  {
    date: '2025',
    title: 'Production RAG platform on Kubernetes',
    metric: 'EKS · Bedrock',
    body: 'Architected and deployed a HIPAA-compliant RAG platform on Kubernetes (FastAPI, Qdrant), with LLM serving on AWS Bedrock and self-hosted models. Own the orchestration, autoscaling, and rollouts at Tenzr Health.',
  },
  {
    date: '2025',
    title: 'Database connection pooling',
    metric: '329ms → 2ms',
    body: 'Added PgBouncer connection pooling to the same platform. Connection capacity went up 458%. Wrote the benchmark tool and documentation so the results can be reproduced.',
  },
  {
    date: '2024',
    title: 'Marketplace performance',
    metric: '20s → 2s',
    body: "Fixed slow page loads on A2P Energy's marketplace with query optimization and eager loading. Also built a shift-logging system with role-based access and a bilingual interface for industrial users.",
  },
  {
    date: '2021–23',
    title: 'Azure deployment automation',
    metric: '−40% deploy time',
    body: 'Wrote 15+ automation scripts for Azure cloud deployments at SaaSberry, cutting deployment time by 40%. Configured Azure B2C tenants and App Services for government-compliance clients.',
  },
]

const projects = [
  { name: 'Tenzr Oracle', href: null, desc: 'plain-English questions to governed SQL, on EKS' },
  {
    name: 'PickMyElective',
    href: 'https://github.com/manvirheer/pickmyelective',
    desc: 'RAG search over 1,200+ university courses',
  },
  {
    name: 'Whisper Typer',
    href: 'https://github.com/manvirheer/whisper-typer',
    desc: 'voice typing on AMD/Linux via Vulkan',
  },
  {
    name: 'nx-logstats',
    href: 'https://github.com/manvirheer/nx-logstats',
    desc: 'NGINX log analysis CLI',
  },
  {
    name: 'Vancouver Parking Analysis',
    href: 'https://github.com/manvirheer/parkingticketanalysis',
    desc: 'geospatial analysis of ticket data',
  },
]

const writing = [
  {
    date: '2025.10',
    title: 'Building Production RAG Systems',
    readTime: '12 min',
    subtitle: 'Lessons from deploying AI in healthcare',
    href: '/writing/building-production-rag-systems',
  },
  {
    date: '2025.10',
    title: 'How I Reduced Database Latency by 99.4%',
    readTime: '8 min',
    subtitle: 'A practical guide to PgBouncer connection pooling',
    href: '/writing/pgbouncer-99-percent-latency-reduction',
  },
  {
    date: '2025.06',
    title: 'Implementing Git Hooks Across 5+ Repositories',
    readTime: '6 min',
    subtitle: 'Standardizing code quality without slowing developers down',
    href: '/writing/git-hooks-at-scale',
  },
]

export default function Home() {
  const latest = writing[0]

  return (
    <div className={styles.page}>
      <a href="#main" className="mh-skip">Skip to content</a>

      <header>
        {/* masthead — latest post (derived from writing[0], easy to update per post) */}
        <div className={styles.band}>
          <div className={styles.bandInner}>
            <Link href={latest.href} className={styles.bandLink}>
              LATEST — {latest.title} →
            </Link>
            <span className={styles.bandDate}>{latest.date}</span>
          </div>
        </div>
        <SiteNav variant="home" />
      </header>

      <main id="main">
        <div className={styles.container}>
          {/* hero */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>AI Infrastructure Engineer</h1>
            <p className={styles.heroText}>
              I build and run AI infrastructure at{' '}
              <strong>Tenzr Health</strong> in Vancouver: a HIPAA-compliant RAG
              platform on Kubernetes, LLM serving on AWS Bedrock, and the CI/CD
              around it. The numbers below are benchmarked.
            </p>
          </section>

          {/* work */}
          <section id="work" className={styles.section} aria-labelledby="work-label">
            <h2 id="work-label" className={styles.label}>01 | WORK</h2>
            <div className={styles.grid}>
              {work.map((item, i) => (
                <Fragment key={item.title}>
                  <span className={styles.date}>{item.date}</span>
                  <div
                    className={`${styles.entry}${i === work.length - 1 ? ` ${styles.entryLast}` : ''}`}
                  >
                    <div className={styles.entryHead}>
                      <h3 className={styles.entryTitle}>{item.title}</h3>
                      <span className={styles.metric}>{item.metric}</span>
                    </div>
                    <p className={styles.entryBody}>{item.body}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>

          {/* projects */}
          <section id="projects" className={styles.section} aria-labelledby="projects-label">
            <h2 id="projects-label" className={styles.label}>02 | PROJECTS</h2>
            <div className={styles.grid}>
              <span />
              <div>
                {projects.map((project, i) => {
                  const rowClass = `${styles.projectRow}${
                    i === projects.length - 1 ? ` ${styles.projectRowLast}` : ''
                  }`
                  return (
                    <div key={project.name} className={rowClass}>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectName}
                        >
                          {project.name}
                        </a>
                      ) : (
                        <span className={styles.projectName}>{project.name}</span>
                      )}
                      <span className={styles.projectDesc}>{project.desc}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* writing */}
          <section id="writing" className={styles.section} aria-labelledby="writing-label">
            <div className={styles.sectionHead}>
              <h2 id="writing-label" className={styles.label}>03 | WRITING</h2>
              <Link href="/writing" className={styles.allLink}>All writing →</Link>
            </div>
            <div className={styles.grid}>
              {writing.map((post, i) => (
                <Fragment key={post.href}>
                  <span className={styles.writeDate}>{post.date}</span>
                  <div
                    className={`${styles.writeEntry}${
                      i === writing.length - 1 ? ` ${styles.writeEntryLast}` : ''
                    }`}
                  >
                    <div className={styles.writeHead}>
                      <Link href={post.href} className={styles.writeTitle}>
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

      {/* contact — inverted full-bleed band */}
      <section id="contact" className={styles.contact} aria-labelledby="contact-label">
        <div className={styles.contactInner}>
          <h2 id="contact-label" className={styles.contactLabel}>04 | CONTACT</h2>
          <p className={styles.contactLine}>
            If you want to talk about infrastructure or performance work, reach
            me at <span className={styles.email}>hi [@] manvirheer [.] com</span>.
          </p>
          <footer className={styles.footer}>
            <a
              href="https://github.com/manvirheer"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/manvirheer"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              linkedin
            </a>
            <span className={styles.copyright} title={PUNJABI_NAME}>
              © 2026 Manvir Heer
            </span>
          </footer>
        </div>
      </section>
    </div>
  )
}
