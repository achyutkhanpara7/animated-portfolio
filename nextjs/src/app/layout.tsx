import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Achyut Khanpara — UX / Product Designer',
  description: 'Portfolio of Achyut Khanpara, UX & Product Designer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
