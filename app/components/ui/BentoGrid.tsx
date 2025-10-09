'use client'

import { motion } from 'framer-motion'
import { bentoContainer } from '@/app/config/motion'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <motion.div
      className={`bento-grid ${className}`}
      variants={bentoContainer}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  )
}
