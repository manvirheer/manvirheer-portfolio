import { WorkInProgress } from '@/app/components/ui/WorkInProgress'
import { Header } from '@/app/components/layout/Header'
import { SystemInfo } from '@/app/components/ui/SystemInfo'
import { GridOverlay } from '@/app/components/ui/GridOverlay'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Manvir Heer for collaboration, projects, or inquiries. Available on GitHub and LinkedIn.',
  openGraph: {
    title: 'Contact Manvir Heer',
    description: 'Get in touch with Manvir Heer for collaboration, projects, or inquiries.',
  },
}

export default function ContactPage() {
  return (
    <>
      <GridOverlay />
      <Header />
      <SystemInfo />
      <WorkInProgress
        title="Contact"
        message="Fancy contact form coming soon. For now, just hit me up on LinkedIn or GitHub (links in the header)."
      />
    </>
  )
}
