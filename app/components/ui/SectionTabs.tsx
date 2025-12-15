'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Tab {
  id: string
  label: string
}

interface StickyTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  showAfterScroll?: number
}

// Haptic feedback utility
const triggerHaptic = (style: 'light' | 'medium' | 'heavy' = 'light') => {
  if (typeof window !== 'undefined' && 'navigator' in window) {
    if ('vibrate' in navigator) {
      const patterns = { light: [10], medium: [20], heavy: [30] }
      navigator.vibrate(patterns[style])
    }
  }
}

// Swipe gesture hook
function useSwipeGesture(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50
) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const deltaX = touchEndX - touchStartX.current
    const deltaY = touchEndY - touchStartY.current

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        onSwipeRight()
      } else {
        onSwipeLeft()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }, [onSwipeLeft, onSwipeRight, threshold])

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchEnd])
}

export function StickyTabs({ tabs, activeTab, onTabChange, showAfterScroll = 0 }: StickyTabsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const currentIndex = tabs.findIndex(t => t.id === activeTab)

  // Tab change with haptic feedback
  const handleTabChange = useCallback((tabId: string) => {
    triggerHaptic('light')
    onTabChange(tabId)
  }, [onTabChange])

  // Swipe handlers
  const handleSwipeLeft = useCallback(() => {
    if (currentIndex < tabs.length - 1) {
      triggerHaptic('medium')
      onTabChange(tabs[currentIndex + 1].id)
    }
  }, [currentIndex, tabs, onTabChange])

  const handleSwipeRight = useCallback(() => {
    if (currentIndex > 0) {
      triggerHaptic('medium')
      onTabChange(tabs[currentIndex - 1].id)
    }
  }, [currentIndex, tabs, onTabChange])

  useSwipeGesture(handleSwipeLeft, handleSwipeRight)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfterScroll])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block fixed left-1/2 -translate-x-1/2 z-50"
          style={{
            bottom: 'max(2rem, calc(env(safe-area-inset-bottom, 0px) + 0.5rem))',
          }}
        >
          <div className="bg-[var(--page-background)]/90 backdrop-blur-md border border-[var(--page-border)] rounded-full shadow-lg px-2 py-2">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 text-sm terminal-text transition-all duration-300 rounded-full ${
                    activeTab === tab.id
                      ? 'bg-[var(--page-primary)] text-white'
                      : 'hover:bg-[var(--page-surface)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export function useScrollTabs(sectionIds: string[]) {
  const [activeTab, setActiveTab] = useState(sectionIds[0] || '')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 3
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight

          let newActiveTab = activeTab

          if (window.scrollY + windowHeight >= documentHeight - 50) {
            newActiveTab = sectionIds[sectionIds.length - 1]
          } else {
            for (let i = sectionIds.length - 1; i >= 0; i--) {
              const section = document.getElementById(sectionIds[i])
              if (section && section.offsetTop <= scrollPosition) {
                newActiveTab = sectionIds[i]
                break
              }
            }
          }

          if (newActiveTab !== activeTab) {
            setActiveTab(newActiveTab)
          }

          ticking = false
        })

        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, activeTab])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -100
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return { activeTab, scrollToSection }
}
