import { WorkInProgress } from '@/app/components/ui/WorkInProgress'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { GridOverlay } from '@/app/components/ui/GridOverlay'

export const metadata = {
  title: 'Projects',
  description: 'Featured projects, case studies, and technical explorations by Manvir Heer.',
  openGraph: {
    title: 'Projects - Manvir Heer',
    description: 'Featured projects, case studies, and technical explorations by Manvir Heer.',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <GridOverlay />
      <Header />
      <SystemInfo />
      <WorkInProgress
        title="Projects"
        message="Detailed case studies, build logs, and technical walkthroughs for key projects. Coming soon."
      />
    </>
  )
}
