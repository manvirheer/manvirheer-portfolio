import { WorkInProgress } from '@/app/components/ui/WorkInProgress'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { GridOverlay } from '@/app/components/ui/GridOverlay'

export const metadata = {
  title: 'About',
  description: 'Learn about Manvir Heer - Software engineer with expertise in Python, TypeScript, data analysis, and modern web development.',
  openGraph: {
    title: 'About Manvir Heer',
    description: 'Learn about Manvir Heer - Software engineer with expertise in Python, TypeScript, data analysis, and modern web development.',
  },
}

export default function AboutPage() {
  return (
    <>
      <GridOverlay />
      <Header />
      <SystemInfo />
      <WorkInProgress
        title="About"
        message="Full background, experience, and what makes me tick. For now, check out my LinkedIn or the homepage."
      />
    </>
  )
}
