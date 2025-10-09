'use client'

import Link from 'next/link'
import { ThemeSwitcher } from '@/app/components/ui/ThemeSwitcher'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const navItems = [
  { label: 'WORK', href: '/work' },
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
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Stacked Name */}
        <Link href="/" className="group">
          <div className="font-bold font-mono leading-tight tracking-tight">
            <div className="text-xl">MANVIR</div>
            <div className="text-xl">HEER</div>
          </div>
        </Link>

        {/* Navigation - Bracket Style */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-mono tracking-wide hover:opacity-60 transition-opacity"
            >
              <span style={{ color: 'var(--page-text-muted)' }}>[</span>
              {' '}{item.label}{' '}
              <span style={{ color: 'var(--page-text-muted)' }}>]</span>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          {/* Contact CTA */}
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-1.5 text-base font-mono tracking-wide hover:opacity-60 transition-opacity border-b pb-0.5"
            style={{ borderColor: 'var(--page-border)' }}
          >
            CONTACT
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
