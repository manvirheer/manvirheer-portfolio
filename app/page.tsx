// app/page.tsx
import type { Metadata } from 'next';

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
    <main className=" flex min-h-auto flex-col items-center justify-center mt-34 md:p-4">
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Logo
        <div className="mb-12">
          <Image 
            src="/logo/logo.png" 
            alt="Manvir Heer logo" 
            width={64} 
            height={64} 
            className="w-16 h-16"
          />
        </div> */}
    
        
        {/* Under construction message */}
        <p className="text-xl md:text-2xl mb-8 text-center font-sans">
          Portfolio website under construction
        </p>
        
        {/* Expected launch */}
        <p className="text-lg opacity-90 mb-16 text-center font-sans">
          Coming soon
        </p>
        
        {/* Contact info */}
        <div className="mt-auto">
          <p className="text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">
              hi [at] manvirheer.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}