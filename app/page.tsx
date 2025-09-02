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
import { ArrowRight, Code, Zap, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yilzi
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Membangun Website Kreatif & Efisien dengan teknologi modern
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <Code size={20} />
                Tentang Saya
                <ArrowRight size={18} />
              </Link>
              
              <Link 
                href="/projects" 
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <Zap size={20} />
                Projek Saya
              </Link>
              
              <Link 
                href="/contact" 
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <Heart size={20} />
                Kontak
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Project Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Kepuasan Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Stack & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai untuk membangun solusi digital yang powerful dan scalable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                category: 'Frontend', 
                techs: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
                color: 'from-blue-500 to-cyan-500',
                icon: '⚛️'
              },
              { 
                category: 'Backend', 
                techs: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
                color: 'from-green-500 to-emerald-500',
                icon: '🚀'
              },
              { 
                category: 'Tools & DevOps', 
                techs: ['Git', 'Docker', 'AWS', 'Vercel'],
                color: 'from-purple-500 to-pink-500',
                icon: '🛠️'
              },
              { 
                category: 'Design & UI/UX', 
                techs: ['Figma', 'Adobe XD', 'Framer Motion', 'GSAP'],
                color: 'from-orange-500 to-red-500',
                icon: '🎨'
              }
            ].map((stack) => (
              <div 
                key={stack.category} 
                className="border border-gray-200 rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stack.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg`}>
                  {stack.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {stack.category}
                </h3>
                <div className="space-y-1">
                  {stack.techs.map((tech) => (
                    <div key={tech} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">Fast</div>
              <div className="text-gray-600 text-sm">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap untuk Berkolaborasi?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari kita diskusikan project Anda dan wujudkan ide-ide kreatif menjadi kenyataan
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Mulai Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}