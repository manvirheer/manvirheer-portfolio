'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface WorkInProgressProps {
  title?: string
  message?: string
  showBackButton?: boolean
}

export const WorkInProgress = ({
  title = 'Work in Progress',
  message = 'This page is currently under construction. Check back soon!',
  showBackButton = true,
}: WorkInProgressProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Construction GIF */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="text-8xl">🚧</div>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-serif)]">
          {title}
        </h1>

        {/* Message */}
        <p className="text-lg mb-8" style={{ color: 'var(--page-text-muted)' }}>
          {message}
        </p>

        {/* Status */}
        <div className="inline-block border px-6 py-3 mb-8 font-mono text-sm" style={{ borderColor: 'var(--page-border)' }}>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--page-warning)' }}
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span>Building v1.0.0</span>
          </div>
        </div>

        {/* Back Button */}
        {showBackButton && (
          <div>
            <Link
              href="/"
              className="inline-block px-6 py-3 border font-medium hover:bg-[var(--page-surface-elevated)] transition-colors"
              style={{ borderColor: 'var(--page-border)' }}
            >
              ← Back to Home
            </Link>
          </div>
        )}

        {/* Fun fact */}
        <p className="mt-12 text-xs font-mono" style={{ color: 'var(--page-text-muted)' }}>
          Fun fact: This emoji is doing more work than the actual page right now
        </p>
      </motion.div>
    </div>
  )
}
