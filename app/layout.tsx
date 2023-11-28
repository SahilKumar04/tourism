import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Trips In Himachal',
  description: 'Tour and Travels business in himachal',
  keywords : 'trips in himachal, shimla himachal pradesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://w7.pngwing.com/pngs/913/860/png-transparent-green-mountain-with-trees-illustration-flat-design-landscape-mountain-forest-mountain-cloud-computer-wallpaper-white-clouds-thumbnail.png" type="image/x-icon" sizes="any"/>
      </head>
      <body className={inter.className}>
      <Navbar />
        {children}
        <Analytics />
        </body>
    </html>
  )
}
