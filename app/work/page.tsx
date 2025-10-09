import { WorkInProgress } from '@/app/components/ui/WorkInProgress'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { GridOverlay } from '@/app/components/ui/GridOverlay'

export const metadata = {
  title: 'Work',
  description: 'Projects and technical work by Manvir Heer - Python CLI tools, data analysis projects, Next.js applications, and more.',
  openGraph: {
    title: 'Work - Manvir Heer',
    description: 'Projects and technical work by Manvir Heer - Python CLI tools, data analysis projects, Next.js applications, and more.',
  },
}

export default function WorkPage() {
  return (
    <>
      <GridOverlay />
      <Header />
      <SystemInfo />
      <WorkInProgress
        title="Work"
        message="Detailed case studies and project breakdowns. For now, scroll down on the homepage to see some highlights."
      />
    </>
  )
}
