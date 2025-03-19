// src/context/theme-context.tsx
'use client'
import { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react'

type Theme = 'light' | 'dark' | 'mono'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  isTransitioning: false
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimer = useRef<number | null>(null)
  
  // Optimized theme switching with transition state management
  const setTheme = useCallback((newTheme: Theme) => {
    if (newTheme === theme) return;
    
    // Start transition state
    setIsTransitioning(true)
    
    // Update theme immediately
    setThemeState(newTheme)
    
    // Clean up previous transition timer if exists
    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current)
    }
    
    // Set timer to match your CSS transition duration
    transitionTimer.current = window.setTimeout(() => {
      setIsTransitioning(false)
      transitionTimer.current = null
    }, 400) // Match your CSS transition duration of 0.4s
  }, [theme])
  
  // Initial theme detection with media query preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedTheme && ['light', 'dark', 'mono'].includes(savedTheme)) {
      setThemeState(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Use system preference as fallback
      setThemeState('dark')
    }
    
    // Add listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!localStorage.getItem('theme')) {
        setThemeState(e.matches ? 'dark' : 'light')
      }
    }
    
    // Add listener with proper fallback for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      // Older browsers
      mediaQuery.addListener(handleChange)
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        // Older browsers
        mediaQuery.removeListener(handleChange)
      }
      
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current)
      }
    }
  }, [])
  
  // Apply theme to body with performance optimizations
  useEffect(() => {
    // Update body class with requestAnimationFrame for performance
    requestAnimationFrame(() => {
      // Remove all theme classes
      document.body.classList.remove('dark-mode', 'mono-mode')
      // Add current theme class if not light (default)
      if (theme !== 'light') {
        document.body.classList.add(`${theme}-mode`)
      }
      // Save to localStorage
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