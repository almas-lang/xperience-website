import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.xperiencewave.com'),
  title: {
    default: 'Xperience Wave - Design Career Development & Mentoring',
    template: '%s | Xperience Wave',
  },
  description: 'Transform your design career with expert mentoring, comprehensive programs, and real-world experience. Join Xperience Wave today.',
  keywords: [
    'design mentoring',
    'UX design courses',
    'UI design training',
    'product design career',
    'design education',
    'design bootcamp',
    'UX mentorship',
    'design leadership',
    'design strategy',
    'AI-powered design',
    'design portfolio building',
    'design career coaching',
    'senior designer training',
    'design thinking courses',
    'Ripple design program',
    'Current design program',
    'Tide design program',
    'Surge design services',
  ],
  authors: [{ name: 'Xperience Wave', url: 'https://www.xperiencewave.com' }],
  creator: 'Xperience Wave',
  publisher: 'Xperience Wave',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/favicon.png',
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
  openGraph: {
    title: 'Xperience Wave - Design Career Development & Mentoring',
    description: 'Transform your design career with expert mentoring, comprehensive programs, and real-world experience.',
    url: 'https://www.xperiencewave.com',
    siteName: 'Xperience Wave',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xperience Wave - Design Career Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xperience Wave - Design Career Development & Mentoring',
    description: 'Transform your design career with expert mentoring, comprehensive programs, and real-world experience.',
    creator: '@xperiencewave',
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.xperiencewave.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Xperience Wave',
              alternateName: 'XW',
              url: 'https://www.xperiencewave.com',
              logo: 'https://www.xperiencewave.com/assets/logo.png',
              description: 'Helping designers drive outcomes and get paid more through comprehensive design education and mentoring programs.',
              sameAs: [
                'https://www.instagram.com/xperience_wave/',
                'https://in.linkedin.com/company/xperiencewave',
                'https://x.com/xperiencewave',
                'https://www.youtube.com/@xperiencewave',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={plusJakartaSans.variable}>
        {children}
      </body>
    </html>
  )
}
