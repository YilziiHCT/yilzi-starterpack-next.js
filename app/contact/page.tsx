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

'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Github, Send, MapPin, Clock, User } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Terima kasih! Pesan Anda akan segera dibalas.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const yilziContactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      value: "yilzi@gmail.com",
      link: "mailto:yilzi@gmail.com",
      description: "Kirim email untuk project inquiry"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      title: "Telegram",
      value: "@Yilziii",
      link: "https://t.me/Yilziii",
      description: "Chat langsung untuk diskusi cepat"
    },
    {
      icon: <Github className="w-6 h-6 text-gray-700" />,
      title: "GitHub",
      value: "YilziiHCT",
      link: "https://github.com/YilziiHCT",
      description: "Lihat portfolio code & project"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="yilzi-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Hubungi Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mari berkolaborasi! Saya siap membantu mewujudkan ide digital Anda menjadi kenyataan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {yilziContactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{contact.value}</p>
                      <p className="text-gray-600 text-sm mt-1">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="yilzi-card p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Info Tambahan</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Indonesia (Remote Available)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Response time: 1-24 jam</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Available untuk project baru</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="yilzi-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="project-inquiry">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Ceritakan tentang project atau pertanyaan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full yilzi-button-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQ - Pertanyaan Sering Ditanya</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Berapa lama pengerjaan project?</h3>
              <p className="text-gray-600 text-sm">Tergantung kompleksitas, umumnya 2-8 minggu untuk project standar.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Apakah menyediakan maintenance?</h3>
              <p className="text-gray-600 text-sm">Ya, tersedia paket maintenance bulanan untuk update dan support.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Bisa remote working?</h3>
              <p className="text-gray-600 text-sm">Tentu! Saya terbiasa bekerja remote dengan komunikasi yang efektif.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Metode pembayaran apa saja?</h3>
              <p className="text-gray-600 text-sm">Bank Transfer, e-wallet, atau sesuai kesepakatan bersama.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}