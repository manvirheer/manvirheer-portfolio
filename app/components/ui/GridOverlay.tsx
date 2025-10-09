'use client'

import { useEffect, useState } from 'react'

export const GridOverlay = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'g') {
        e.preventDefault()
        setShow((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  if (!show) return null

  return <div className="grid-overlay" />
}
