'use client'

import { motion } from 'framer-motion'
import { cardHover, cardTap } from '@/app/config/motion'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 12
  rowSpan?: 1 | 2 | 3
  tint?: 'blue' | 'purple' | 'green' | 'yellow' | 'orange' | 'pink' | 'none'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'glow'
  gradientBorder?: boolean
  glassEffect?: boolean
  gradientBg?: boolean
}

export const BentoCard = ({
  children,
  className = '',
  span = 1,
  rowSpan,
  tint = 'none',
  shadow,
  gradientBorder = false,
  glassEffect = false,
  gradientBg = false,
}: BentoCardProps) => {
  const spanClass = `span-${span}`
  const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : ''
  const tintClass = tint !== 'none' ? `tint-${tint}` : ''
  const shadowClass = shadow ? `shadow-${shadow}` : ''
  const borderClass = gradientBorder ? 'border-gradient' : ''
  const glassClass = glassEffect ? 'glass-effect' : ''
  const gradientBgClass = gradientBg ? 'bg-gradient-card' : ''

  return (
    <motion.div
      className={`bento-card ${spanClass} ${rowSpanClass} ${tintClass} ${shadowClass} ${borderClass} ${glassClass} ${gradientBgClass} ${className}`}
      whileHover={cardHover}
      whileTap={cardTap}
    >
      {children}
    </motion.div>
  )
}
