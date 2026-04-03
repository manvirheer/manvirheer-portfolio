'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, bentoContainer, bentoCard, smoothEase } from '@/app/config/motion'
import { days, attractions, budget, checklist, categoryEmoji, categoryLabel, type DayPlan } from './data'
import { useState, useEffect, useCallback } from 'react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: smoothEase } },
}

/* ── Modal ── */
function DayModal({ day, onClose }: { day: DayPlan; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <motion.div
        className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: smoothEase }}
      >
        {/* Hero image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-2xl">
          <img
            src={day.heroImage}
            alt={day.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <p className="text-xs uppercase tracking-wider opacity-80">Day {day.day} — {day.weekday}, {day.date}</p>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              {day.emoji} {day.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center text-lg hover:bg-black/60 transition-colors"
          >
            &times;
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Vibe */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--trip-accent)' }}>The Vibe</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--trip-text-muted)' }}>{day.vibe}</p>
          </div>

          {/* Clothing */}
          <div className="p-4 rounded-xl" style={{ background: 'var(--trip-cream)' }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--trip-secondary)' }}>What to Wear</h3>
            <p className="text-sm" style={{ color: 'var(--trip-text-muted)' }}>{day.clothing}</p>
          </div>

          {/* Stops with images */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--trip-accent)' }}>Stops</h3>
            <div className="space-y-4">
              {day.stops.map((stop, i) => (
                <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--trip-border)' }}>
                  {stop.image && (
                    <img src={stop.image} alt={stop.name} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm">{stop.name}</h4>
                      {stop.time && (
                        <span className="text-xs shrink-0 font-mono px-2 py-0.5 rounded-full" style={{ background: 'var(--trip-cream)', color: 'var(--trip-secondary)' }}>
                          {stop.time}
                        </span>
                      )}
                    </div>
                    <p className="text-xs mt-1" style={{ color: 'var(--trip-text-muted)' }}>{stop.description}</p>
                    {stop.cost && <p className="text-xs font-semibold mt-1" style={{ color: 'var(--trip-accent)' }}>{stop.cost}</p>}
                    {stop.tip && (
                      <p className="text-xs mt-2 p-2 rounded-lg" style={{ background: 'var(--trip-cream)', color: 'var(--trip-secondary)' }}>
                        💡 {stop.tip}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Spots */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--trip-accent)' }}>📸 Photo Spots</h3>
            <ul className="space-y-1.5">
              {day.photoSpots.map((spot, i) => (
                <li key={i} className="text-sm flex gap-2" style={{ color: 'var(--trip-text-muted)' }}>
                  <span className="shrink-0">•</span>
                  <span>{spot}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {day.images.length > 1 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--trip-accent)' }}>Gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                {day.images.slice(0, 4).map((img, i) => (
                  <img key={i} src={img} alt="" className="w-full h-32 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          )}

          {/* Dining */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--trip-sage)' }}>🌿 Dining</h3>
            {day.dining.map((d, i) => (
              <p key={i} className="text-sm" style={{ color: 'var(--trip-text-muted)' }}>{d}</p>
            ))}
          </div>

          {/* Entertainment */}
          {day.entertainment && day.entertainment.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--trip-secondary)' }}>🎭 Entertainment</h3>
              <div className="flex flex-wrap gap-1.5">
                {day.entertainment.map((e, i) => (
                  <span key={i} className="stop-pill text-xs">{e}</span>
                ))}
              </div>
            </div>
          )}

          {day.driveTime && (
            <div className="text-center py-3">
              <span className="stop-pill font-medium">🚗 Total drive: {day.driveTime}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Checklist ── */
function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem('trip-checklist')
    if (saved) setChecked(JSON.parse(saved))
  }, [])

  const toggle = useCallback((id: string) => {
    setChecked(prev => {
      const next = { ...prev, [id]: !prev[id] }
      localStorage.setItem('trip-checklist', JSON.stringify(next))
      return next
    })
  }, [])

  const categories = [
    { key: 'documents', label: 'Documents & Insurance' },
    { key: 'booking', label: 'Bookings' },
    { key: 'car', label: 'Car' },
    { key: 'prep', label: 'Prep' },
    { key: 'packing', label: 'Packing' },
  ]

  return (
    <div className="space-y-8">
      {categories.map(cat => {
        const items = checklist.filter(c => c.category === cat.key)
        return (
          <div key={cat.key}>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--trip-text-muted)' }}>
              {cat.label}
            </h3>
            <div className="bg-white rounded-xl border p-4" style={{ borderColor: 'var(--trip-border)' }}>
              {items.map(item => (
                <label
                  key={item.id}
                  className={`checklist-item cursor-pointer ${checked[item.id] ? 'checked' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="checklist-checkbox"
                    checked={checked[item.id] || false}
                    onChange={() => toggle(item.id)}
                  />
                  <div>
                    <span className="checklist-text text-sm">{item.task}</span>
                    <span className="block text-xs mt-0.5" style={{ color: 'var(--trip-accent)' }}>{item.deadline}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ── Main Page ── */
export default function TripPage() {
  const [selectedDay, setSelectedDay] = useState<DayPlan | null>(null)
  const totalLow = budget.reduce((sum, b) => sum + b.low, 0)
  const totalHigh = budget.reduce((sum, b) => sum + b.high, 0)

  return (
    <div className="min-h-screen">
      {/* Modal */}
      <AnimatePresence>
        {selectedDay && <DayModal day={selectedDay} onClose={() => setSelectedDay(null)} />}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src="/trip/manvir-naaz.jpg"
                  alt="Manvir & Naaz"
                  className="w-28 h-28 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: 'var(--trip-accent)' }}
                />
                <div className="absolute -bottom-1 -right-1 retro-badge !w-12 !h-12 !text-[0.45rem] !border-2 bg-white shadow">
                  <span>CA<br />26</span>
                </div>
              </div>
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--trip-text)' }}
            >
              California<br />
              <span style={{ color: 'var(--trip-accent)' }}>Road Trip</span>
            </h1>
            <p className="text-lg md:text-xl mb-2" style={{ color: 'var(--trip-text-muted)' }}>
              April 24 – May 2, 2026
            </p>
            <p className="text-sm" style={{ color: 'var(--trip-secondary)' }}>
              Surrey → Ashland → Anaheim → PCH → Monterey → Home
            </p>
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              {['9 Days', '24 Stops', '4,200 km', '2 Parks'].map(stat => (
                <span key={stat} className="stop-pill font-medium">{stat}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="road-divider max-w-3xl mx-auto px-6"><div className="road-dash" /></div>

      {/* Day by Day */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="section-heading text-2xl md:text-3xl mb-3 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            The Itinerary
          </motion.h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--trip-text-muted)' }}>
            Tap any day to see photos, tips, and details
          </p>

          <motion.div
            className="space-y-5"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={staggerContainer}
          >
            {days.map((day) => (
              <motion.div
                key={day.day}
                variants={staggerItem}
                className="day-card cursor-pointer overflow-hidden !p-0"
                onClick={() => setSelectedDay(day)}
                whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(61, 43, 31, 0.12)' }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hero image strip */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                  <img
                    src={day.heroImage}
                    alt={day.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-4">
                    <span className="text-white/80 text-xs font-mono uppercase tracking-wider">Day {day.day}</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                      {day.emoji} {day.title}
                    </h3>
                    <p className="text-xs opacity-80 mt-0.5">{day.weekday}, {day.date}</p>
                  </div>
                  {day.driveTime && (
                    <div className="absolute top-3 right-4">
                      <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                        🚗 {day.driveTime}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content below image */}
                <div className="p-4">
                  <p className="text-sm mb-3" style={{ color: 'var(--trip-text-muted)' }}>{day.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {day.stops.slice(0, 4).map((stop, i) => (
                      <span key={i} className="stop-pill text-xs">{stop.name}</span>
                    ))}
                    {day.stops.length > 4 && (
                      <span className="stop-pill text-xs" style={{ color: 'var(--trip-accent)' }}>+{day.stops.length - 4} more</span>
                    )}
                  </div>
                  <p className="text-xs mt-3 font-medium" style={{ color: 'var(--trip-accent)' }}>
                    Tap for details, photos & tips →
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="road-divider max-w-3xl mx-auto px-6"><div className="road-dash" /></div>

      {/* Attractions Grid */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="section-heading text-2xl md:text-3xl mb-3 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            All 24 Stops
          </motion.h2>
          <p className="text-center text-sm mb-8" style={{ color: 'var(--trip-text-muted)' }}>
            Flowers, desert, sea caves, volcanoes, purple sand
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={bentoContainer}
          >
            {attractions.map((a, i) => (
              <motion.div key={i} variants={bentoCard} className="attraction-card overflow-hidden !p-0">
                {a.image && (
                  <img src={a.image} alt={a.name} className="w-full h-28 object-cover" />
                )}
                <div className="p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-sm">{a.name}</span>
                    <span className="category-tag shrink-0" data-category={a.category}>
                      {categoryEmoji[a.category]} {categoryLabel[a.category]}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--trip-text-muted)' }}>{a.location}</p>
                  <p className="text-xs" style={{ color: 'var(--trip-text-muted)' }}>{a.description}</p>
                  {a.cost && <p className="text-xs font-medium mt-1" style={{ color: 'var(--trip-accent)' }}>{a.cost}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="road-divider max-w-3xl mx-auto px-6"><div className="road-dash" /></div>

      {/* Budget */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="section-heading text-2xl md:text-3xl mb-8 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Budget
          </motion.h2>
          <motion.div
            className="bg-white rounded-xl border overflow-hidden"
            style={{ borderColor: 'var(--trip-border)' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <table className="budget-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Estimate (USD)</th>
                  <th className="hidden sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {budget.map((b, i) => (
                  <tr key={i}>
                    <td>{b.category}</td>
                    <td>${b.low.toLocaleString()} – ${b.high.toLocaleString()}</td>
                    <td className="hidden sm:table-cell text-xs" style={{ color: 'var(--trip-text-muted)' }}>{b.note}</td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td>${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}</td>
                  <td className="hidden sm:table-cell"></td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <div className="road-divider max-w-3xl mx-auto px-6"><div className="road-dash" /></div>

      {/* Checklist */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="section-heading text-2xl md:text-3xl mb-3 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Pre-Trip Checklist
          </motion.h2>
          <p className="text-center text-sm mb-8" style={{ color: 'var(--trip-text-muted)' }}>
            Tap to check off. Progress saves automatically.
          </p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Checklist />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 md:py-24 px-6 text-center" style={{ background: 'var(--trip-cream)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <p className="text-4xl mb-4">☀️</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            See you in California
          </h2>
          <p className="text-sm" style={{ color: 'var(--trip-text-muted)' }}>April 24 – May 2, 2026</p>
        </motion.div>
      </section>
    </div>
  )
}
