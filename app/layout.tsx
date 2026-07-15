import type { Metadata } from "next";
import { fonts } from "@/app/config/fonts";
import "./globals.css";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Manvir Heer',
  url: 'https://manvirheer.com',
  jobTitle: 'AI Infrastructure Engineer',
  description:
    'AI Infrastructure Engineer at Tenzr Health in Vancouver: a HIPAA-compliant RAG platform on Kubernetes, LLM serving on AWS Bedrock, and the CI/CD around it. The numbers are benchmarked.',
  sameAs: [
    'https://github.com/manvirheer',
    'https://linkedin.com/in/manvirheer',
  ],
  knowsAbout: [
    'AI Infrastructure',
    'Kubernetes',
    'AWS Bedrock',
    'LLM Serving',
    'RAG Systems',
    'AWS',
    'Azure',
    'PostgreSQL',
    'Python',
    'TypeScript',
    'Database Optimization',
    'HIPAA Compliance',
    'Performance Engineering',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://manvirheer.com'),
  title: {
    default: "Manvir Heer | AI Infrastructure Engineer",
    template: "%s | Manvir Heer",
  },
  description: "AI Infrastructure Engineer at Tenzr Health in Vancouver: a HIPAA-compliant RAG platform on Kubernetes, LLM serving on AWS Bedrock, and the CI/CD around it. The numbers are benchmarked.",
  keywords: [
    "Manvir Heer",
    "AI Infrastructure Engineer",
    "Infrastructure Engineer",
    "Kubernetes",
    "AWS Bedrock",
    "LLM Serving",
    "RAG Systems",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Python",
    "TypeScript",
    "Database Optimization",
    "HIPAA Compliance",
    "Performance Engineering",
    "Tenzr Health",
  ],
  authors: [{ name: "Manvir Heer" }],
  creator: "Manvir Heer",
  publisher: "Manvir Heer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manvirheer.com",
    siteName: "Manvir Heer",
    title: "Manvir Heer | AI Infrastructure Engineer",
    description: "AI Infrastructure Engineer at Tenzr Health in Vancouver: a HIPAA-compliant RAG platform on Kubernetes, LLM serving on AWS Bedrock, and the CI/CD around it.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manvir Heer - AI Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvir Heer | AI Infrastructure Engineer",
    description: "AI Infrastructure Engineer at Tenzr Health. HIPAA-compliant RAG on Kubernetes, LLM serving on AWS Bedrock, and the CI/CD around it.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

function useFontClasses() {
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
    <html lang="en" className={`${fontClasses} overflow-x-hidden`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var d = document.documentElement;
            try {
              d.classList.add('no-transition');
              if (localStorage.getItem('theme') === 'dark') d.classList.add('dark-mode');
            } catch (e) {}
            // enable theme transitions only after first paint
            window.addEventListener('DOMContentLoaded', function () {
              requestAnimationFrame(function () { d.classList.remove('no-transition'); });
            });
            // delegated vanilla theme toggle (no React island)
            document.addEventListener('click', function (e) {
              var b = e.target.closest && e.target.closest('[data-theme-toggle]');
              if (!b) return;
              var dark = d.classList.toggle('dark-mode');
              try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e2) {}
              b.setAttribute('aria-pressed', String(dark));
            });
          })();
        `}} />
      </head>
      <body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
