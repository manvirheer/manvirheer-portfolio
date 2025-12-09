'use client'

import { useEffect, useState } from 'react'

export function TerminalStatus() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t py-4" style={{ borderColor: 'var(--page-border)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs terminal-text" style={{ color: 'var(--page-text-muted)' }}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              ONLINE
            </span>
            <span>{currentTime}</span>
          </div>
          <div>
            © {new Date().getFullYear()} Manvir Heer
          </div>
        </div>
      </div>
    </footer>
  )
}
