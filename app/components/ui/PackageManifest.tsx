'use client'

import { motion } from 'framer-motion'

interface Skill {
  category: string
  items: string[]
}

interface PackageManifestProps {
  skills: Skill[]
}

export const defaultSkills: Skill[] = [
  {
    category: 'Infrastructure & Cloud',
    items: ['AWS', 'Azure', 'Docker', 'DNS Management', 'HIPAA Compliance']
  },
  {
    category: 'Databases & Performance',
    items: ['PostgreSQL', 'PgBouncer', 'Query Optimization', 'Performance Engineering']
  },
  {
    category: 'AI & Machine Learning',
    items: ['RAG Systems', 'LlamaIndex', 'Qdrant', 'Hybrid Search']
  },
  {
    category: 'Languages & Frameworks',
    items: ['Python', 'TypeScript', 'NestJS', 'Next.js', 'React']
  }
]

export function PackageManifest({ skills }: PackageManifestProps) {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div
            className="text-sm font-bold mb-2 terminal-text"
            style={{ color: 'var(--page-primary)' }}
          >
            {skill.category}
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded terminal-text border"
                style={{
                  backgroundColor: 'var(--page-surface)',
                  borderColor: 'var(--page-border)',
                  color: 'var(--page-text-muted)'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
