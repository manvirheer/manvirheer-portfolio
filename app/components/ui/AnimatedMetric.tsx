'use client'

import { motion } from 'framer-motion'

interface AnimatedComparisonProps {
  before: number
  after: number
  unit: string
  label: string
}

export function AnimatedComparison({ before, after, unit, label }: AnimatedComparisonProps) {
  return (
    <div className="space-y-2">
      <div className="text-xs terminal-text" style={{ color: 'var(--page-text-muted)' }}>
        {label}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Before */}
        <div className="flex-1">
          <div className="text-xs mb-1" style={{ color: 'var(--page-text-muted)' }}>
            Before
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold terminal-text"
            style={{ color: 'var(--page-text)' }}
          >
            {before.toLocaleString()}{unit}
          </motion.div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl"
          style={{ color: 'var(--page-text-muted)' }}
        >
          →
        </motion.div>

        {/* After */}
        <div className="flex-1">
          <div className="text-xs mb-1" style={{ color: 'var(--page-text-muted)' }}>
            After
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl font-bold terminal-text"
            style={{ color: 'var(--page-text)' }}
          >
            {after.toLocaleString()}{unit}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
