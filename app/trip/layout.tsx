import type { Metadata } from 'next'
import './trip.css'

export const metadata: Metadata = {
  title: 'California Road Trip 2026',
  description: 'Surrey to Anaheim — 9 days, 24 stops, 1 unforgettable drive. April 24 – May 2, 2026.',
  openGraph: {
    title: 'California Road Trip 2026',
    description: 'Surrey to Anaheim — 9 days, 24 stops, 1 unforgettable drive.',
    type: 'website',
  },
}

export default function TripLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="trip-page">
      {children}
    </div>
  )
}
