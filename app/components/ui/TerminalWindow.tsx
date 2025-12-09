'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TerminalWindowProps {
  title: string
  variant?: 'default' | 'accent'
  animate?: boolean
  children: ReactNode
}

export function TerminalWindow({
  title,
  animate = true,
  children
}: TerminalWindowProps) {
  const Wrapper = animate ? motion.div : 'div'
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  } : {}

  return (
    <Wrapper
      className="terminal-window h-full flex flex-col"
      {...(animate ? animationProps : {})}
    >
      {/* Terminal Header */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'var(--page-border)' }}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div
          className="text-xs terminal-text ml-2"
          style={{ color: 'var(--page-text-muted)' }}
        >
          {title}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 sm:p-6 flex-1">
        {children}
      </div>
    </Wrapper>
  )
}
