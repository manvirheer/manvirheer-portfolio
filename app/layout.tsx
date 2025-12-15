import type { Metadata } from "next";
import { ThemeProvider } from "@/app/context/theme-context";
import { fonts } from "@/app/config/fonts";
import "./globals.css";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Manvir Heer',
  url: 'https://manvirheer.com',
  jobTitle: 'DevOps / Infrastructure Engineer',
  description:
    'Infrastructure engineer shipping production systems at Tenzr Health. RAG applications, database optimization, Docker containerization, DNS management, and HIPAA-compliant healthcare infrastructure.',
  sameAs: [
    'https://github.com/manvirheer',
    'https://linkedin.com/in/manvirheer',
  ],
  knowsAbout: [
    'DevOps',
    'Infrastructure Engineering',
    'AWS',
    'Azure',
    'Docker',
    'PostgreSQL',
    'Python',
    'TypeScript',
    'RAG Systems',
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
    default: "Manvir Heer | DevOps / Infrastructure Engineer",
    template: "%s | Manvir Heer",
  },
  description: "Infrastructure engineer shipping production systems at Tenzr Health. RAG applications, database optimization, Docker containerization, DNS management, and HIPAA-compliant healthcare infrastructure on AWS.",
  keywords: [
    "Manvir Heer",
    "DevOps Engineer",
    "Infrastructure Engineer",
    "AWS",
    "Azure",
    "Docker",
    "PostgreSQL",
    "Python",
    "TypeScript",
    "RAG Systems",
    "Database Optimization",
    "HIPAA Compliance",
    "Healthcare Technology",
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
    title: "Manvir Heer | DevOps / Infrastructure Engineer",
    description: "Infrastructure engineer shipping production systems at Tenzr Health. RAG applications, database optimization, Docker, DNS management, HIPAA-compliant healthcare infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manvir Heer - DevOps / Infrastructure Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manvir Heer | DevOps / Infrastructure Engineer",
    description: "Infrastructure engineer at Tenzr Health. RAG systems, database optimization, Docker, HIPAA-compliant healthcare infrastructure on AWS.",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
    <html lang="en" className={`${fontClasses} overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <ThemeProvider>
        <body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
