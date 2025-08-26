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

import { CheckCircle, Award, Users, Clock } from 'lucide-react'

export default function AboutPage() {
  const yilziSkills = [
    { 
      category: "Frontend Development", 
      skills: ["Next.js 14", "React.js 18", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript ES6+"],
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Backend Development", 
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST API", "GraphQL"],
      icon: "🚀",
      color: "from-green-500 to-emerald-500"
    },
    { 
      category: "Tools & DevOps", 
      skills: ["Git/GitHub", "Docker", "VS Code", "Postman", "Linux", "CI/CD"],
      icon: "🛠️",
      color: "from-purple-500 to-pink-500"
    },
    { 
      category: "Cloud & Deployment", 
      skills: ["Vercel", "Netlify", "AWS", "Firebase", "Supabase", "Digital Ocean"],
      icon: "☁️",
      color: "from-orange-500 to-red-500"
    }
  ]

  const yilziValues = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Clean Code",
      desc: "Kode yang bersih, terbaca, dan mudah di-maintain"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Best Practices",
      desc: "Mengikuti standar industry dan best practices terkini"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "User-Centered",
      desc: "Fokus pada pengalaman pengguna yang optimal"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "On-Time Delivery",
      desc: "Komitmen untuk menyelesaikan project tepat waktu"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="yilzi-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Tentang Yilzi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seorang web developer yang passionate dalam menciptakan solusi digital inovatif 
            dengan fokus pada clean code dan user experience yang exceptional.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile */}
          <div>
            <div className="yilzi-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profil Singkat</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  👋 Halo! Saya Yilzi, seorang Full-Stack Developer dengan pengalaman 5+ tahun 
                  dalam mengembangkan aplikasi web modern menggunakan teknologi terkini.
                </p>
                <p>
                  🚀 Saya memiliki passion yang besar dalam menciptakan website yang tidak hanya 
                  cantik secara visual, tetapi juga performant, scalable, dan user-friendly.
                </p>
                <p>
                  💡 Setiap project yang saya kerjakan selalu mengutamakan clean code, 
                  best practices, dan inovasi untuk memberikan value terbaik kepada client.
                </p>
                <p>
                  🎯 Fokus utama saya adalah membantu bisnis dan individu mewujudkan ide mereka 
                  menjadi solusi digital yang powerful dan efektif.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nilai & Prinsip</h2>
            <div className="grid grid-cols-1 gap-6">
              {yilziValues.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai untuk membangun aplikasi web yang powerful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yilziSkills.map((skillGroup, index) => (
              <div key={index} className="yilzi-card p-6 group hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-xl shadow-lg`}>
                  {skillGroup.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 group/skill">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm group-hover/skill:text-gray-900 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="yilzi-card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pengalaman & Pencapaian</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-900 font-medium mb-1">Tahun Pengalaman</div>
              <div className="text-gray-600 text-sm">Mengembangkan berbagai jenis aplikasi web</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-900 font-medium mb-1">Project Completed</div>
              <div className="text-gray-600 text-sm">Website, web app, dan e-commerce</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-900 font-medium mb-1">Client Satisfaction</div>
              <div className="text-gray-600 text-sm">Rating berdasarkan feedback client</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}