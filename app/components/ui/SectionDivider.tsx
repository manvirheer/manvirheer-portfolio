'use client'

interface SectionDividerProps {
  path: string
  command: string
  className?: string
}

export function SectionDivider({ path, command, className = '' }: SectionDividerProps) {
  return (
    <div className={`terminal-text text-sm ${className}`} style={{ color: 'var(--page-text-muted)' }}>
      <span style={{ color: 'var(--terminal-green)' }}>{path}</span>
      <span className="mx-2">$</span>
      <span>{command}</span>
    </div>
  )
}
