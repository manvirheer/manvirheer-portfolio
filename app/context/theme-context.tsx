'use client'

import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react'

type Theme = 'light' | 'dark' | 'reading'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  isTransitioning: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimer = useRef<number | null>(null)

  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (newTheme === theme) return

      setIsTransitioning(true)
      setThemeState(newTheme)

      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current)
      }

      transitionTimer.current = window.setTimeout(() => {
        setIsTransitioning(false)
        transitionTimer.current = null
      }, 600)
    },
    [theme]
  )

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme

    if (savedTheme && ['light', 'dark', 'reading'].includes(savedTheme)) {
      setThemeState(savedTheme)
    } else {
      setThemeState('light')
      localStorage.setItem('theme', 'light')
    }

    // Remove no-transition class after initial theme is applied
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('no-transition')
    })

    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    const el = document.documentElement
    el.classList.remove('dark-mode', 'reading-mode')

    if (theme === 'dark') {
      el.classList.add('dark-mode')
    } else if (theme === 'reading') {
      el.classList.add('reading-mode')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
