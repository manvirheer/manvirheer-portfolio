import { EB_Garamond, IBM_Plex_Mono } from 'next/font/google';

// Serif — headings, name, contact line.
export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
  weight: ['400', '500', '600'],
});

// Mono — dates, section labels, metrics, project descriptions (400 only).
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
  weight: ['400'],
});

export const fonts = {
  ebGaramond,
  ibmPlexMono,
};
