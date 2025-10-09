import { Host_Grotesk, Playfair_Display } from 'next/font/google';

export const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-host',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

export const fonts = {
  host: hostGrotesk,
  playfair: playfairDisplay,
};
