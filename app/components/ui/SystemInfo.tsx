'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/app/context/theme-context'

export const SystemInfo = () => {
  const { theme } = useTheme()
  const [resolution, setResolution] = useState('—')
  const [platform, setPlatform] = useState('—')

  useEffect(() => {
    const updateInfo = () => {
      setResolution(`${window.innerWidth}×${window.innerHeight}`)
    }

    // Get platform
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('mac')) setPlatform('macOS')
    else if (userAgent.includes('win')) setPlatform('Windows')
    else if (userAgent.includes('linux')) setPlatform('Linux')
    else setPlatform('Browser')

    updateInfo()
    window.addEventListener('resize', updateInfo)
    return () => window.removeEventListener('resize', updateInfo)
  }, [])

  const themeLabels = {
    light: 'Light mode',
    dark: 'Dark mode',
    reading: 'Reading mode',
  }

  return (
    <div className="fixed top-20 right-6 font-mono text-xs space-y-1 hidden lg:block" style={{ color: 'var(--page-text-muted)' }}>
      <div className="flex justify-between gap-8">
        <span>{themeLabels[theme]}</span>
        <span>(N)</span>
      </div>
      <div className="flex justify-between gap-8">
        <span>{resolution}</span>
      </div>
      <div className="flex justify-between gap-8">
        <span>{platform}</span>
      </div>
    </div>
  )
}
