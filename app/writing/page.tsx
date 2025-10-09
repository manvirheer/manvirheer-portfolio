import { WorkInProgress } from '@/app/components/ui/WorkInProgress'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { GridOverlay } from '@/app/components/ui/GridOverlay'

export const metadata = {
  title: 'Writing',
  description: 'Technical blog posts, tutorials, and thoughts on software engineering, Python, TypeScript, and web development by Manvir Heer.',
  openGraph: {
    title: 'Writing - Manvir Heer',
    description: 'Technical blog posts, tutorials, and thoughts on software engineering, Python, TypeScript, and web development.',
  },
}

export default function WritingPage() {
  return (
    <>
      <GridOverlay />
      <Header />
      <SystemInfo />
      <WorkInProgress
        title="Writing"
        message="Blog posts, technical deep-dives, and thoughts on building software. Coming soon once I have something worth sharing."
      />
    </>
  )
}
