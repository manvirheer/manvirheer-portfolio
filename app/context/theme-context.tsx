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
      }, 400)
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

    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('dark-mode', 'reading-mode')

      if (theme === 'dark') {
        document.body.classList.add('dark-mode')
      } else if (theme === 'reading') {
        document.body.classList.add('reading-mode')
      }

      localStorage.setItem('theme', theme)
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
