'use client'

import { useTheme } from '@/app/context/theme-context'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light', icon: SunIcon, label: 'Light mode' },
    { value: 'dark', icon: MoonIcon, label: 'Dark mode' },
    { value: 'reading', icon: BookOpenIcon, label: 'Reading mode' },
  ] as const

  return (
    <div className="flex gap-1 items-center border p-1" style={{ borderColor: 'var(--page-border)' }}>
      {themes.map((t) => {
        const Icon = t.icon
        return (
          <motion.button
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`p-2 transition-colors ${
              theme === t.value ? '' : 'opacity-50'
            }`}
            style={{
              backgroundColor: theme === t.value ? 'var(--page-text)' : 'transparent',
              color: theme === t.value ? 'var(--page-bg)' : 'var(--page-text)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t.label}
          >
            <Icon className="w-4 h-4" />
          </motion.button>
        )
      })}
    </div>
  )
}
