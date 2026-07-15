import Link from 'next/link'

const PUNJABI_NAME = 'ਮਨਵੀਰ ਹੀਰ'

/**
 * Shared top nav for the two-page site. Server component, zero client JS —
 * the theme toggle is a plain button driven by a delegated inline script
 * (see app/layout.tsx); icons are swapped purely with CSS on html.dark-mode.
 * variant="home": section links are in-page anchors (#work).
 * variant="inner": section links point back to the homepage (/#work).
 */
export function SiteNav({ variant = 'home' }: { variant?: 'home' | 'inner' }) {
  const base = variant === 'home' ? '' : '/'
  return (
    <div className="mh-nav-inner">
      <Link href="/" className="mh-name" title={PUNJABI_NAME}>
        Manvir Heer
      </Link>
      <nav className="mh-navlinks">
        <a href={`${base}#work`} className="mh-navlink">Work</a>
        <a href={`${base}#projects`} className="mh-navlink">Projects</a>
        <a href={`${base}#writing`} className="mh-navlink">Writing</a>
        <a href={`${base}#contact`} className="mh-navcontact">Contact</a>
        <button
          type="button"
          className="themeToggle"
          data-theme-toggle
          aria-label="Toggle light/dark theme"
        >
          <svg
            className="theme-icon-moon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
          </svg>
          <svg
            className="theme-icon-sun"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
      </nav>
    </div>
  )
}
