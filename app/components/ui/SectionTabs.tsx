'use client'

import { useState, useEffect } from 'react'
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

export function StickyTabs({ tabs, activeTab, onTabChange, showAfterScroll = 0 }: StickyTabsProps) {
  const [isVisible, setIsVisible] = useState(false)

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
          className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-[var(--page-background)]/90 backdrop-blur-md border border-[var(--page-border)] rounded-full shadow-lg px-2 py-2">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
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

          // If we're at the very bottom of the page, activate the last section
          if (window.scrollY + windowHeight >= documentHeight - 50) {
            newActiveTab = sectionIds[sectionIds.length - 1]
          } else {
            // Otherwise, find which section we're currently viewing
            for (let i = sectionIds.length - 1; i >= 0; i--) {
              const section = document.getElementById(sectionIds[i])
              if (section && section.offsetTop <= scrollPosition) {
                newActiveTab = sectionIds[i]
                break
              }
            }
          }

          // Only update if the tab actually changed
          if (newActiveTab !== activeTab) {
            setActiveTab(newActiveTab)
          }

          ticking = false
        })

        ticking = true
      }
    }

    handleScroll() // Run on mount
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
