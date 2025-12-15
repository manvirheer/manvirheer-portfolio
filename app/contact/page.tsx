'use client'

import { Header } from '@/app/components/layout/Header'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import { TerminalWindow } from '@/app/components/ui/TerminalWindow'
import { TerminalStatus } from '@/app/components/ui/TerminalStatus'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/app/config/motion'

const contactMethods = [
  {
    platform: 'GitHub',
    handle: '@manvirheer',
    url: 'https://github.com/manvirheer',
    description: 'Check out my code, contributions, and projects',
    icon: 'gh',
  },
  {
    platform: 'LinkedIn',
    handle: '/in/manvirheer',
    url: 'https://linkedin.com/in/manvirheer',
    description: 'Professional network and work history',
    icon: 'in',
  },
  {
    platform: 'Email',
    handle: 'hello@manvirheer.com',
    url: 'mailto:hello@manvirheer.com',
    description: 'For professional inquiries and opportunities',
    icon: '@',
  },
]

const availability = {
  status: 'Open to Opportunities',
  graduation: 'January 2026',
  location: 'Vancouver, BC',
  remote: true,
  relocation: 'Open to discussion',
}

const interests = [
  'Infrastructure & DevOps roles',
  'Performance engineering challenges',
  'Healthcare technology',
  'Early-stage startups',
  'Interesting technical problems',
]

export default function ContactPage() {
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
                  Let&apos;s <span className="accent">Connect</span>
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  Whether you have an infrastructure challenge, a performance problem,
                  or just want to chat about tech—I&apos;m always up for a conversation.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="section-dark py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider
                path="~"
                command="cat contact.json"
                className="mb-8"
              />

              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.platform}
                    href={method.url}
                    target={method.platform !== 'Email' ? '_blank' : undefined}
                    rel={method.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 border rounded-lg group transition-all hover:border-[var(--page-primary)]"
                    style={{
                      backgroundColor: 'var(--page-surface)',
                      borderColor: 'var(--page-border)',
                    }}
                  >
                    <div
                      className="text-3xl font-bold terminal-text mb-2"
                      style={{ color: 'var(--page-primary)' }}
                    >
                      {method.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{method.platform}</h3>
                    <p
                      className="terminal-text text-sm mb-2"
                      style={{ color: 'var(--terminal-cyan)' }}
                    >
                      {method.handle}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--page-text-muted)' }}
                    >
                      {method.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Availability */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <SectionDivider
                path="~/status"
                command="cat availability.txt"
                className="mb-8"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <TerminalWindow title="status.sh" animate={false}>
                    <div className="space-y-3 terminal-text text-sm">
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--page-text-muted)' }}>
                          status:
                        </span>
                        <span style={{ color: 'var(--terminal-green)' }}>
                          {availability.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--page-text-muted)' }}>
                          graduation:
                        </span>
                        <span>{availability.graduation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--page-text-muted)' }}>
                          location:
                        </span>
                        <span>{availability.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--page-text-muted)' }}>
                          remote:
                        </span>
                        <span style={{ color: 'var(--terminal-green)' }}>
                          {availability.remote ? 'yes' : 'no'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span style={{ color: 'var(--page-text-muted)' }}>
                          relocation:
                        </span>
                        <span>{availability.relocation}</span>
                      </div>
                    </div>
                  </TerminalWindow>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 border rounded-lg"
                  style={{
                    backgroundColor: 'var(--page-surface)',
                    borderColor: 'var(--page-border)',
                  }}
                >
                  <h3
                    className="font-bold text-lg mb-4"
                    style={{ color: 'var(--page-primary)' }}
                  >
                    What I&apos;m Looking For
                  </h3>
                  <ul className="space-y-2">
                    {interests.map((interest, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span style={{ color: 'var(--terminal-cyan)' }}>→</span>
                        <span style={{ color: 'var(--page-text-muted)' }}>
                          {interest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="section-dark py-16 md:py-24">
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
                  I typically respond within{' '}
                  <span style={{ color: 'var(--terminal-green)' }}>24-48 hours</span>.
                </p>
                <p
                  className="terminal-text text-sm"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  Prefer async? LinkedIn or email works best. For quick questions, GitHub discussions are open.
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
