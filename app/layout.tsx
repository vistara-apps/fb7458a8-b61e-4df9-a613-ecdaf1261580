import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'EduCred Base - Verifiable Education Credentials',
  description: 'Immutable, verifiable digital degrees and certifications as non-transferable NFTs on Base',
  openGraph: {
    title: 'EduCred Base',
    description: 'Verifiable Education Credentials on Base & Farcaster',
    images: ['/images/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
