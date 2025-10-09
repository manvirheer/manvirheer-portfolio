'use client'

import Link from 'next/link'
import { ThemeSwitcher } from '@/app/components/ui/ThemeSwitcher'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 border-2 flex items-center justify-center font-bold font-mono"
            style={{ borderColor: 'var(--page-border)' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            M
          </motion.div>
          <span className="font-bold text-lg font-[family-name:var(--font-serif)] hidden sm:inline">
            Manvir Heer
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="https://github.com/manvirheer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border hover:bg-[var(--page-surface-elevated)] transition-colors"
              style={{ borderColor: 'var(--page-border)' }}
            >
              GitHub
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: 'var(--page-primary)',
                color: 'var(--page-bg)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
