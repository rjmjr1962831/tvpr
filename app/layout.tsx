import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verified Professional Registry',
  description: 'Independent certification authority for professional credentials',
  metadataBase: new URL('https://tvpr.us'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
