// app/config/fonts.ts
import { Host_Grotesk } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';

// Define the primary font
export const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-host',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Define the secondary font
export const playfairDisplay = Playfair_Display({
   subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Define the tertiary font
export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Define the fourth font
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Define the fifth font
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Export a fonts object that combines all font variables
export const fonts = {
  host: hostGrotesk,
  playfair: playfairDisplay, 
  roboto: roboto,
  inter: inter,
  montserrat: montserrat,   
};