// app/page.tsx
import type { Metadata } from 'next';
import Header from './components/layout/header';

export const metadata: Metadata = {
  title: 'Manvir Heer | Under Construction',
  description: 'Portfolio website of Manvir Heer - currently under construction',
  icons: {
    icon: [
      { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: { url: '/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'manifest', url: '/logo/site.webmanifest' },
    ]
  }
};

export default function UnderConstruction() {
  return (
    <div className="antialiased w-screen min-h-screen flex flex-col">
      {/* Ensure Header takes up space */}
      <Header />
     
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center h-screen mx-auto">
        {/* Under construction message */}
        <p className="text-xl md:text-2xl mb-8 font-sans justify-center mx-auto">
          Portfolio website under construction
        </p>

        {/* Expected launch */}
        <p className="text-lg opacity-90 mb-16 font-sans">
          Coming soon
        </p>

        {/* Contact info */}
        <div className="">
          <p className="text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">
              hi [at] manvirheer.com
            </a>
          </p>
        </div>
      </div>
      {/* Footer stays at the bottom */}
      <footer className="border-t border-page-border py-6">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 text-sm text-page-footer">
          <p>© {new Date().getFullYear()} Manvir Heer. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}