// app/config/fonts.ts
import { Host_Grotesk } from 'next/font/google';

// Define the primary font
export const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-host',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

// Export a fonts object that combines all font variables
export const fonts = {
  host: hostGrotesk,    
};