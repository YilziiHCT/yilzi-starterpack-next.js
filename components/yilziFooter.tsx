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

import Link from 'next/link'
import { Code2, Mail, MessageCircle, Github, Heart } from 'lucide-react'

export default function YilziFooter() {
  const yilziSocialLinks = [
    {
      name: 'Email',
      href: 'mailto:yilzi@gmail.com',
      icon: <Mail className="w-5 h-5" />
    },
    {
      name: 'Telegram',
      href: 'https://t.me/Yilziii',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/YilziiHCT',
      icon: <Github className="w-5 h-5" />
    }
  ]

  const yilziQuickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="yilzi-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Yilzi</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Web Developer passionate dalam menciptakan solusi digital yang inovatif 
              dan user-friendly menggunakan teknologi modern.
            </p>
            <div className="flex gap-4">
              {yilziSocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {yilziQuickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="space-y-2">
              {['Web Development', 'Frontend Design', 'Backend API', 'Consultation'].map((service) => (
                <div key={service} className="text-gray-400">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Yilzi. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Yilzi using Next.js</span>
            </div>
          </div>
          
          {/* License Footer */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <div className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-400">Yilzi License:</strong> This template is free to use and modify for personal and educational purposes. 
              Commercial reselling is prohibited. Original attribution to Yilzi must be maintained.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}