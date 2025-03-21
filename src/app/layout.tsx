import ServerHeader from '@/components/ServerHeader'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'jhnnx',
  description: "jhnnx's app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} vsc-initialized antialiased`}
      >
        {/*<SessionProvider>*/}
        {/*  <ClientHeader />*/}
        <ServerHeader />
        {children}
        {/*</SessionProvider>*/}
      </body>
    </html>
  )
}
