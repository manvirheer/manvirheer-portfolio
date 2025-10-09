'use client'

import Link from 'next/link'
import { ThemeSwitcher } from '@/app/components/ui/ThemeSwitcher'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const navItems = [
  { label: 'PROJECTS', href: '/projects' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'ABOUT', href: '/about' },
  { label: 'WRITING', href: '/writing' },
]

export const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--page-bg)',
        borderColor: 'var(--page-border)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo - Stacked Name */}
        <Link href="/" className="group relative">
          <div className="font-bold font-mono leading-tight tracking-tight transition-colors">
            <div className="text-xl group-hover:text-[var(--page-primary)] transition-colors duration-200">MANVIR</div>
            <div className="text-xl">HEER</div>
          </div>
          {/* Blue accent bar */}
          <motion.div
            className="absolute -left-2 top-0 w-1 h-0 group-hover:h-full transition-all duration-300"
            style={{ backgroundColor: 'var(--page-primary)' }}
          />
        </Link>

        {/* Navigation - Bracket Style */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{
                letterSpacing: '0.15em',
                x: 4,
              }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                href={item.href}
                className="text-base font-mono tracking-wide relative inline-block group whitespace-nowrap"
              >
                <span style={{ color: 'var(--page-text-muted)' }}>[</span>
                {' '}{item.label}{' '}
                <span style={{ color: 'var(--page-text-muted)' }}>]</span>

                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--page-primary)' }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          {/* Contact CTA */}
          <motion.div
            whileHover={{
              letterSpacing: '0.15em',
              x: 4,
            }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="hidden xl:block"
          >
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-base font-mono tracking-wide border-b pb-0.5 group whitespace-nowrap"
              style={{ borderColor: 'var(--page-border)' }}
            >
              CONTACT
              <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
