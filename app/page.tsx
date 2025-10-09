'use client'

import { BentoGrid } from '@/app/components/ui/BentoGrid'
import { BentoCard } from '@/app/components/ui/BentoCard'
import { GridOverlay } from '@/app/components/ui/GridOverlay'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manvir Heer',
    url: 'https://manvirheer.com',
    jobTitle: 'Software Engineer',
    description: 'Full-stack software engineer specializing in Python, TypeScript, and modern web technologies',
    sameAs: [
      'https://github.com/manvirheer',
      'https://linkedin.com/in/manvirheer',
    ],
    knowsAbout: [
      'Software Engineering',
      'Python',
      'TypeScript',
      'Next.js',
      'React',
      'Data Analysis',
      'DevOps',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GridOverlay />
      <Header />
      <SystemInfo />

      <div className="min-h-screen pt-20">
        {/* Main Content */}
        <main>
          <BentoGrid>
            {/* Hero Card */}
            <BentoCard span={12} className="min-h-[300px] flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-4 font-[family-name:var(--font-serif)]">
                Software <span style={{ color: 'var(--page-primary)' }}>Engineer</span>
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
            <BentoCard span={4} tint="purple" className="min-h-[250px] flex flex-col">
              <h3 className="text-xl font-bold mb-2">nx-logstats</h3>
              <p className="text-sm mb-4 flex-1" style={{ color: 'var(--page-text-muted)' }}>
                CLI tool for analyzing metrics from NGINX access logs
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 border border-current rounded">Python</span>
                <a
                  href="https://github.com/manvirheer/nx-logstats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono group"
                >
                  <span className="group-hover:text-[var(--page-primary)] transition-colors">[ GitHub ]</span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
                </a>
              </div>
            </BentoCard>

            {/* Project 2 */}
            <BentoCard span={4} tint="yellow" className="min-h-[250px] flex flex-col">
              <h3 className="text-xl font-bold mb-2">Parking Ticket Analysis</h3>
              <p className="text-sm mb-4 flex-1" style={{ color: 'var(--page-text-muted)' }}>
                Geospatial analysis of Vancouver parking data
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 border border-current rounded">Data Analysis</span>
                <a
                  href="https://github.com/manvirheer/vancouver-parking-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono group"
                >
                  <span className="group-hover:text-[var(--page-primary)] transition-colors">[ GitHub ]</span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
                </a>
              </div>
            </BentoCard>

            {/* Project 3 */}
            <BentoCard span={4} tint="orange" className="min-h-[250px] flex flex-col">
              <h3 className="text-xl font-bold mb-2">Flow Metrics</h3>
              <p className="text-sm mb-4 flex-1" style={{ color: 'var(--page-text-muted)' }}>
                Next.js frontend for industrial client
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 border border-current rounded">TypeScript</span>
                <span className="text-xs font-mono" style={{ color: 'var(--page-text-muted)' }}>
                  [ Private ]
                </span>
              </div>
            </BentoCard>

            {/* Contact Card */}
            <BentoCard span={4} className="min-h-[150px]">
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="space-y-2 text-sm font-mono">
                <a
                  href="https://github.com/manvirheer"
                  className="block group transition-colors relative inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:text-[var(--page-primary)] transition-colors">
                    [ GitHub ]
                  </span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
                </a>
                <a
                  href="https://linkedin.com/in/manvirheer"
                  className="block group transition-colors relative inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="group-hover:text-[var(--page-primary)] transition-colors">
                    [ LinkedIn ]
                  </span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
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
                4px precision grid • 3 themes • <span style={{ color: 'var(--page-primary)' }}>Bold blue primary</span>
              </p>
            </BentoCard>
          </BentoGrid>
        </main>
      </div>
    </>
  )
}
