import { WorkInProgress } from '@/app/components/ui/WorkInProgress'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { GridOverlay } from '@/app/components/ui/GridOverlay'

export const metadata = {
  title: 'Experience',
  description: 'Professional journey, roles, and impact highlights from Manvir Heer.',
  openGraph: {
    title: 'Experience - Manvir Heer',
    description: 'Explore the roles and achievements across Manvir Heer’s career.',
  },
}

export default function ExperiencePage() {
  return (
    <>
      <GridOverlay />
      <Header />
      <SystemInfo />
      <WorkInProgress
        title="Experience"
        message="A curated snapshot of roles, responsibilities, and measurable impact. In progress while the stories are crafted."
      />
    </>
  )
}
