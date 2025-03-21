// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/context/theme-context";
import { fonts } from "@/app/config/fonts";
import Header from "@/app/components/layout/header";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Manvir Heer | Portfolio",
  description: "Personal portfolio of Manvir Heer",
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

function useFontClasses() {
  // Combine all font variables into a single className string
  const fontClasses = Object.values(fonts)
    .map((font) => font.variable)
    .join(" ");
  return fontClasses;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = useFontClasses();
  
  return (
    <html lang="en" className={fontClasses}>
      <ThemeProvider>
        <body className="antialiased min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="border-t border-page-border py-6">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 text-sm text-page-footer">
              <p>© {new Date().getFullYear()} Manvir Heer. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}