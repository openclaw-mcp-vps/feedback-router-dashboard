import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter — Route customer feedback to right teams',
  description: 'Automatically categorizes and routes customer feedback to appropriate team members using AI. Built for customer success managers and startup founders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b67efb80-ded0-404a-bf55-e8845e1e1b3a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
