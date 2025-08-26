/*
====================================================
 🚀 Project : Yilzi-starterpack-next.js
 👨‍💻 Author  : Yilzi  
 📩 Kontak   : Telegram @Yilziii  
 🌐 GitHub   : YilziiHCT  

 ⚠️ Lisensi :
   - Script ini GRATIS untuk digunakan & dimodifikasi.
   - ❌ Dilarang keras untuk dijual kembali (resell) atau dipublikasikan ulang sebagai produk berbayar.
   - Script hanya untuk pembelajaran, portofolio, dan pengembangan pribadi.

 ✅ Prinsip:
   - Code harus efisien, clean, scalable, dan terbaca (readable).
   - Struktur wajib mengikuti standar senior developer.
   - Jangan membuat code berulang atau tidak berguna.

 © 2025 — Crafted with ❤️ by Yilzi
====================================================
*/

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import YilziNavbar from '@/components/yilziNavbar'
import YilziFooter from '@/components/yilziFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yilzi - Modern Web Developer',
  description: 'Membangun Website Kreatif & Efisien dengan Next.js, TypeScript, dan Tailwind CSS',
  keywords: ['Yilzi', 'Web Developer', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Yilzi', url: 'https://github.com/YilziiHCT' }],
  creator: 'Yilzi',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'Yilzi - Modern Web Developer',
    description: 'Membangun Website Kreatif & Efisien',
    siteName: 'Yilzi Portfolio'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <YilziNavbar />
          <main className="flex-grow">
            {children}
          </main>
          <YilziFooter />
        </div>
      </body>
    </html>
  )
}