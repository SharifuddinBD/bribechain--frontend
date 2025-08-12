import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BribeChain - Anonymous Corruption Reporting Platform',
  description: 'Fight corruption anonymously with BribeChain. Secure, blockchain-based platform for reporting bribery incidents while protecting your identity.',
  keywords: ['corruption reporting', 'anonymous reporting', 'blockchain', 'bribery', 'transparency', 'anti-corruption'],
  authors: [{ name: 'BribeChain Team' }],
  creator: 'BribeChain',
  publisher: 'BribeChain',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bribechain.com',
    title: 'BribeChain - Anonymous Corruption Reporting Platform',
    description: 'Fight corruption anonymously with BribeChain. Secure, blockchain-based platform for reporting bribery incidents.',
    siteName: 'BribeChain',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BribeChain - Fight Corruption Anonymously',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BribeChain - Anonymous Corruption Reporting',
    description: 'Secure, blockchain-based platform for reporting bribery incidents while protecting your identity.',
    images: ['/twitter-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0891b2', // Cyan-600
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional meta tags for security and performance */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "BribeChain",
              "description": "Anonymous corruption reporting platform using blockchain technology",
              "url": "https://bribechain.com",
              "applicationCategory": "GovernmentApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "BribeChain"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen">
          {children}
        </div>
        
        {/* Analytics or other scripts can go here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Add your analytics script here when ready */}
            {/* Example: Google Analytics, Plausible, etc. */}
          </>
        )}
      </body>
    </html>
  )
}