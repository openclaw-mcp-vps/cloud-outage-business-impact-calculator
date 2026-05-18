import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cloud Outage Business Impact Calculator',
  description: 'Calculate real business impact of cloud outages. Track AWS, Google Cloud, and other dependencies. Know your revenue loss in real-time.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8fded8e9-3bd7-427c-ac81-589fb0d1291b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
