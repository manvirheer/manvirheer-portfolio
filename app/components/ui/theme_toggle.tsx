// components/ui/theme-toggle.tsx
'use client'
import { useTheme } from '@/app/context/theme-context'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className="flex gap-2 p-2 rounded-full bg-page-card border border-page-border">
      <button 
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          theme === 'light' ? 'bg-page-button-active text-page-text' : 'bg-page-button-default text-page-inactive hover:bg-page-button-hover'
        }`}
        onClick={() => setTheme('light')}
        aria-label="Light mode"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="4" fill="currentColor" />
          <path d="M8 0V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      
      <button 
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          theme === 'dark' ? 'bg-page-button-active text-page-text' : 'bg-page-button-default text-page-inactive hover:bg-page-button-hover'
        }`}
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C8.3078 2.5 8.60923 2.52461 8.90137 2.57207C8.36616 3.13421 8.04261 3.88439 8.04261 4.69571C8.04261 6.60097 9.58535 8.14371 11.4906 8.14371C12.1401 8.14371 12.7453 7.94936 13.2599 7.61204C13.4442 7.7309 13.5 7.85869 13.5 8Z" fill="currentColor" />
        </svg>
      </button>
      
      <button 
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          theme === 'mono' ? 'bg-page-button-active text-page-text' : 'bg-page-button-default text-page-inactive hover:bg-page-button-hover'
        }`}
        onClick={() => setTheme('mono')}
        aria-label="Monochrome mode"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="4" height="4" fill="currentColor" />
          <rect x="9" y="3" width="4" height="4" fill="currentColor" opacity="0.7" />
          <rect x="3" y="9" width="4" height="4" fill="currentColor" opacity="0.4" />
          <rect x="9" y="9" width="4" height="4" fill="currentColor" opacity="0.2" />
        </svg>
      </button>
    </div>
  )
}