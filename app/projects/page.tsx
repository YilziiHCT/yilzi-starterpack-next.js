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

import YilziProjectCard from '@/components/yilziProjectCard'
import { Filter } from 'lucide-react'

type ProjectStatus = "Completed" | "In Progress" | "Coming Soon"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  status: ProjectStatus
}

export default function ProjectsPage() {
  const yilziProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Modern",
      description: "Platform e-commerce full-stack dengan fitur lengkap: product management, cart, payment gateway, dan admin dashboard.",
      image: "/images/project1.jpg",
      category: "Full-Stack",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      demoUrl: "https://demo-ecommerce.yilzi.dev",
      repoUrl: "https://github.com/YilziiHCT/ecommerce-nextjs",
      status: "Completed"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard analytics real-time dengan visualisasi data yang interaktif menggunakan Chart.js dan D3.js.",
      image: "/images/project2.jpg",
      category: "Frontend",
      technologies: ["React", "Chart.js", "TailwindCSS", "REST API"],
      demoUrl: "https://analytics-dashboard.yilzi.dev",
      repoUrl: "https://github.com/YilziiHCT/analytics-dashboard",
      status: "Completed"
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Platform blog dengan CMS terintegrasi, SEO optimization, dan sistem komentar real-time.",
      image: "/images/project3.jpg",
      category: "Full-Stack",
      technologies: ["Next.js", "Sanity CMS", "NextAuth", "Vercel"],
      demoUrl: "https://blog-platform.yilzi.dev",
      repoUrl: "https://github.com/YilziiHCT/blog-platform",
      status: "Completed"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur drag & drop, team collaboration, dan progress tracking.",
      image: "/images/project4.jpg",
      category: "Frontend",
      technologies: ["React", "Redux", "DnD Kit", "Firebase"],
      demoUrl: "https://taskmanager.yilzi.dev",
      repoUrl: "https://github.com/YilziiHCT/task-manager",
      status: "Completed"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Aplikasi cuaca dengan geolocation, forecast 7 hari, dan notifikasi cuaca ekstrem.",
      image: "/images/project5.jpg",
      category: "Frontend",
      technologies: ["Next.js", "OpenWeather API", "PWA", "Framer Motion"],
      demoUrl: "https://weather-app.yilzi.dev",
      repoUrl: "https://github.com/YilziiHCT/weather-app",
      status: "Completed"
    },
    {
      id: 6,
      title: "Restaurant Booking",
      description: "Sistem booking restoran online dengan real-time availability, payment integration, dan customer management.",
      image: "/images/project6.jpg",
      category: "Full-Stack",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      demoUrl: "https://restaurant-booking.yilzi.dev",
      repoUrl: "https://github.com/YilziiHCT/restaurant-booking",
      status: "In Progress"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="yilzi-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Projek Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Koleksi project yang telah saya kerjakan, mulai dari website sederhana 
            hingga aplikasi web complex dengan berbagai teknologi modern.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-600">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {["Semua", "Full-Stack", "Frontend", "Backend"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === "Semua" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {yilziProjects.map((project) => (
            <YilziProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center yilzi-card p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Punya Ide Project Menarik?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mari diskusikan project Anda dan wujudkan ide kreatif menjadi aplikasi web yang powerful!
          </p>
          <a 
            href="/contact" 
            className="yilzi-button-primary inline-block"
          >
            Mulai Diskusi Project
          </a>
        </div>
      </div>
    </div>
  )
}
