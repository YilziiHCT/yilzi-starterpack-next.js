# Yilzi-starterpack-next.js

🚀 **Template Website Portofolio Modern** - Dibuat dengan Next.js 14, TypeScript, dan Tailwind CSS

---

## 📋 Deskripsi

**Yilzi-starterpack-next.js** adalah template website portofolio yang dirancang khusus untuk developer, designer, atau siapa saja yang ingin memiliki portofolio online yang modern, responsif, dan profesional.

### ✨ Fitur Utama:
- ⚡ **Next.js 14** dengan App Router
- 🔷 **TypeScript** untuk type safety
- 🎨 **Tailwind CSS** untuk styling yang efisien
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- 🌙 **Clean & Modern Design**
- 🚀 **Fast Performance**
- 📄 **4 Halaman Utama**: Home, About, Projects, Contact
- 🎯 **SEO Optimized**

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify Ready

---

## 📂 Struktur Project

```
yilzi-starterpack-next.js/
├─ app/
│   ├─ layout.tsx              # Layout global dengan Navbar & Footer
│   ├─ page.tsx                # Homepage dengan Hero Section
│   ├─ about/
│   │   └─ page.tsx            # Halaman Tentang + Skills
│   ├─ projects/
│   │   └─ page.tsx            # Halaman Daftar Project
│   └─ contact/
│       └─ page.tsx            # Halaman Kontak + Form
├─ components/
│   ├─ yilziNavbar.tsx         # Navigasi responsif
│   ├─ yilziFooter.tsx         # Footer profesional
│   └─ yilziProjectCard.tsx    # Komponen card project
├─ public/
│   └─ images/                 # Asset gambar project (project1.jpg - project6.jpg)
├─ styles/
│   └─ globals.css             # Global styles + Tailwind
├─ tailwind.config.js          # Konfigurasi Tailwind
├─ tsconfig.json               # Konfigurasi TypeScript
└─ package.json                # Dependencies
```

---

## 🚀 Cara Instalasi & Menjalankan

### 1. **Clone Repository**
```bash
git clone https://github.com/YilziiHCT/yilzi-starterpack-next.js.git
cd yilzi-starterpack-next.js
```

### 2. **Install Dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. **Jalankan Development Server**
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

### 4. **Buka Browser**
Kunjungi `http://localhost:3000` untuk melihat website Anda.

---

## 🌐 Deployment

### **Deploy ke Vercel** (Recommended)
1. Push project ke GitHub repository
2. Kunjungi [vercel.com](https://vercel.com)
3. Import GitHub repository Anda
4. Klik **Deploy** - Done! 🎉

### **Deploy ke Netlify**
1. Build project: `npm run build`
2. Upload folder `out/` ke Netlify
3. Atau connect GitHub repository ke Netlify

### **Deploy Manual**
```bash
npm run build    # Build project
npm run start    # Jalankan production server
```

---

## 🎨 Kustomisasi

### **Mengubah Informasi Pribadi**
Edit file-file berikut:
- `app/page.tsx` - Hero section & tagline
- `app/about/page.tsx` - Deskripsi & skills
- `app/contact/page.tsx` - Informasi kontak
- `components/yilziFooter.tsx` - Footer info

### **Menambah Project Baru**
Edit `app/projects/page.tsx` dan tambahkan data project di array `yilziProjects`. Pastikan gambar project sudah ada di folder `public/images/` dengan format `projectX.jpg`.

### **Mengubah Tema Warna**
Edit `tailwind.config.js` untuk mengubah color palette.

---

## 📱 Preview Halaman

### 🏠 **Homepage**
- Hero section dengan nama besar
- Tagline profesional
- Call-to-action buttons

### 👤 **About**
- Deskripsi singkat tentang diri
- Skills & teknologi yang dikuasai

### 📂 **Projects**
- Daftar project dalam bentuk cards
- Gambar dari local assets (public/images/)
- Filter berdasarkan kategori
- Status project (Completed, In Progress, Coming Soon)
- Link demo dan repository

### 📩 **Contact**
- Informasi kontak (Email, Telegram, GitHub)
- Form kontak yang fungsional dengan validasi
- FAQ section

---

## 🎨 Asset Management

### **Gambar Project**
Letakkan gambar project di folder `public/images/` dengan penamaan:
- `project1.jpg` - E-Commerce Modern
- `project2.jpg` - Dashboard Analytics  
- `project3.jpg` - Blog Platform
- `project4.jpg` - Task Management App
- `project5.jpg` - Weather App
- `project6.jpg` - Restaurant Booking

**Rekomendasi ukuran gambar**: 500x300px atau rasio 5:3 untuk hasil optimal.

---

## 📄 Lisensi

```
====================================================
 🚀 Project : Yilzi-starterpack-next.js
 👨‍💻 Author  : Yilzi  
 📩 Kontak   : Telegram @Yilziii  
 🌐 GitHub   : YilziiHCT  

 ⚠️ Lisensi :
   - Script ini GRATIS untuk digunakan & dimodifikasi.
   - ❌ Dilarang keras untuk dijual kembali (resell)
   - Script hanya untuk pembelajaran & pengembangan pribadi.

 © 2025 — Crafted with ❤️ by Yilzi
====================================================
```

---

## 🤝 Kontribusi

Jika Anda ingin berkontribusi atau melaporkan bug:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📞 Kontak & Support

- 📩 **Email**: yilzi@example.com
- 💬 **Telegram**: [@Yilziii](https://t.me/Yilziii)
- 🐙 **GitHub**: [YilziiHCT](https://github.com/YilziiHCT)

---

**Made with ❤️ by Yilzi - Happy Coding! 🚀**