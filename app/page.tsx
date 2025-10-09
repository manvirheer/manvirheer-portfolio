'use client'

import { BentoGrid } from '@/app/components/ui/BentoGrid'
import { BentoCard } from '@/app/components/ui/BentoCard'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { Header } from '@/app/components/layout/Header'

export default function Home() {
  return (
    <>
      <GridOverlay />
      <Header />

      <div className="min-h-screen pt-20">
        {/* Main Content */}
        <main>
          <BentoGrid>
            {/* Hero Card */}
            <BentoCard span={12} className="min-h-[300px] flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-4 font-[family-name:var(--font-serif)]">
                Software Engineer
              </h2>
              <p className="text-xl" style={{ color: 'var(--page-text-muted)' }}>
                Building precision-engineered digital experiences
              </p>
            </BentoCard>

            {/* About Card */}
            <BentoCard span={6} tint="blue" className="min-h-[200px]">
              <h3 className="text-2xl font-bold mb-4">About</h3>
              <p style={{ color: 'var(--page-text-muted)' }}>
                Full-stack developer with expertise in Python, TypeScript, and modern web technologies.
                Passionate about data analysis, DevOps, and building scalable applications.
              </p>
            </BentoCard>

            {/* Skills Card */}
            <BentoCard span={6} tint="green" className="min-h-[200px]">
              <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'Next.js', 'React', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-current rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* Project 1 */}
            <BentoCard span={4} tint="purple" className="min-h-[250px]">
              <h3 className="text-xl font-bold mb-2">nx-logstats</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--page-text-muted)' }}>
                CLI tool for analyzing metrics from NGINX access logs
              </p>
              <span className="text-xs px-2 py-1 border border-current rounded">Python</span>
            </BentoCard>

            {/* Project 2 */}
            <BentoCard span={4} tint="yellow" className="min-h-[250px]">
              <h3 className="text-xl font-bold mb-2">Parking Ticket Analysis</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--page-text-muted)' }}>
                Geospatial analysis of Vancouver parking data
              </p>
              <span className="text-xs px-2 py-1 border border-current rounded">Data Analysis</span>
            </BentoCard>

            {/* Project 3 */}
            <BentoCard span={4} tint="orange" className="min-h-[250px]">
              <h3 className="text-xl font-bold mb-2">Flow Metrics</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--page-text-muted)' }}>
                Next.js frontend for industrial client
              </p>
              <span className="text-xs px-2 py-1 border border-current rounded">TypeScript</span>
            </BentoCard>

            {/* Contact Card */}
            <BentoCard span={4} className="min-h-[150px]">
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://github.com/manvirheer"
                  className="block hover:opacity-70 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                <a
                  href="https://linkedin.com/in/manvirheer"
                  className="block hover:opacity-70 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </BentoCard>

            {/* Status Card */}
            <BentoCard span={4} tint="pink" className="min-h-[150px]">
              <h3 className="text-lg font-bold mb-2">Status</h3>
              <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
                Building v1 of this portfolio
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--page-text-muted)' }}>
                Press <kbd className="px-1 border border-current rounded">Cmd/Ctrl + G</kbd> for grid overlay
              </p>
            </BentoCard>

            {/* Meta Card */}
            <BentoCard span={4} className="min-h-[150px]">
              <h3 className="text-lg font-bold mb-2">Design System</h3>
              <p className="text-xs" style={{ color: 'var(--page-text-muted)' }}>
                Bento Grid + Brutalist + Experimental
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--page-text-muted)' }}>
                4px precision grid • 3 themes • Bold blue primary
              </p>
            </BentoCard>
          </BentoGrid>
        </main>
      </div>
    </>
  )
}
