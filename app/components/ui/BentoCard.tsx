'use client'

import { motion } from 'framer-motion'
import { cardHover, cardTap } from '@/app/config/motion'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 12
  rowSpan?: 1 | 2 | 3
  tint?: 'blue' | 'purple' | 'green' | 'yellow' | 'orange' | 'pink' | 'none'
}

export const BentoCard = ({
  children,
  className = '',
  span = 1,
  rowSpan,
  tint = 'none',
}: BentoCardProps) => {
  const spanClass = `span-${span}`
  const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : ''
  const tintClass = tint !== 'none' ? `tint-${tint}` : ''

  return (
    <motion.div
      className={`bento-card ${spanClass} ${rowSpanClass} ${tintClass} ${className}`}
      whileHover={cardHover}
      whileTap={cardTap}
    >
      {children}
    </motion.div>
  )
}
