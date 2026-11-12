# KOPI HALU — Website UMKM Minuman Kopi Botolan

Website Landing Page Resmi UMKM Minuman Kopi Botolan **Kopi Halu** — *"Satu Botol, Banyak Cerita."*  
Dibuat sederhana, rapi, bersih, dan mudah dijelaskan untuk memenuhi tugas kelompok **Mata Kuliah Pemrograman Web**.

---

## 📋 7 Fitur Wajib Website (Sesuai Standar Penilaian)

Website ini telah memenuhi seluruh 7 bagian wajib yang ditentukan:

| No | Fitur Wajib | Keterangan & Implementasi di Website |
|:---:|:---|:---|
| **1** | **Navbar** | Menampilkan **Logo Kopi Halu**, link navigasi (**Home, Tentang, Produk, Keunggulan, Testimoni, Kontak**), tombol pesan, serta hamburger menu responsif untuk smartphone. |
| **2** | **Hero Section** | Menampilkan **Banner visual** (`images/hero-coffee.jpg`), **Slogan utama** (*"Satu Botol, Banyak Cerita"* & *"Secangkir halu, sejuta rasa"*), serta **Tombol CTA** (*Lihat Menu Kopi* & *Pesan via WhatsApp*). |
| **3** | **Tentang Kami** | Menampilkan **Profil UMKM Kopi Halu**, **Sejarah singkat** pendirian usaha, visi, misi, dan foto pendukung (`images/about-coffee.jpg`). |
| **4** | **Produk / Jasa** | Menampilkan **6 produk asli Kopi Halu lengkap dengan gambar & harga**: <br>1. Kopi Halu Susu Aren (Rp 15.000) <br>2. Kopi Halu Pandan (Rp 17.000) <br>3. Kopi Hazelnut (Rp 17.000) <br>4. Kopi Americano (Rp 13.000) <br>5. Matcha Latte (Rp 17.000) <br>6. Kopi Halu Extra Shot (Rp 18.000) |
| **5** | **Keunggulan** | Menampilkan **4 alasan memilih produk Kopi Halu**: <br>1. Biji Kopi Pilihan <br>2. Diracik Segar (Freshly Made) <br>3. Kemasan Praktis & Higienis (Botol 250ml) <br>4. Harga Sangat Terjangkau (Mulai Rp 13.000) |
| **6** | **Testimoni** | Menampilkan **3 testimoni pelanggan nyata**: Dimas Arya (Mahasiswa), Sarah Nabilah (Creative Designer), dan Rizky Fauzi (Software Engineer) lengkap dengan rating bintang 5. |
| **7** | **Kontak** | Menampilkan **Alamat lengkap outlet**, tautan interaktif **WhatsApp**, tautan profil **Instagram** resmi, embed **Peta Lokasi Google Maps**, serta formulir pemesanan cepat langsung ke WhatsApp. |

---

## 🛠️ Teknologi yang Digunakan

Struktur kode dibuat sesederhana mungkin agar seluruh anggota kelompok dapat menjelaskan setiap baris kodenya dengan percaya diri:

1. **HTML5 Semantik**:
   - `<header>` dan `<nav>` untuk bagian navigasi.
   - `<section>` untuk setiap bagian (Hero, Tentang, Produk, Keunggulan, Testimoni, Kontak).
   - `<footer>` untuk informasi penutup dan hak cipta.
2. **CSS3 Murni (style.css)**:
   - CSS Variables (`:root`) untuk mempermudah pengaturan palet warna kopi.
   - CSS Grid & Flexbox untuk tata letak yang rapi dan teratur.
   - Media Queries (`@media (max-width: 650px)`) agar tampilan responsif di layar ponsel dan laptop.
   - **Bebas dari animasi berjalan (marquee/keyframes berat)** agar kode tetap ringan dan sesuai materi yang diajarkan dosen.
3. **Vanilla JavaScript (script.js)**:
   - **Hanya ~45 baris kode** yang jelas dan ringkas.
   - Fungsi 1: Hamburger Menu toggle untuk membuka dan menutup menu di HP.
   - Fungsi 2: Mengirim formulir pemesanan langsung ke chat WhatsApp resmi admin tanpa reload halaman.

---

## 📁 Struktur File Project

```text
kopi-halu/
│
├── index.html          # Struktur halaman utama (7 bagian wajib)
├── style.css           # Desain tata letak, warna, dan responsif HP
├── script.js           # Menu toggle mobile & form WhatsApp sederhana
├── README.md           # Panduan dan dokumentasi project
│
└── images/             # Folder aset gambar asli Kopi Halu
    ├── logo.png        # Logo resmi Kopi Halu
    ├── hero-coffee.jpg # Gambar banner hero
    ├── about-coffee.jpg# Foto showcase profil UMKM
    ├── product1.jpg    # Kopi Halu Susu Aren
    ├── product2.jpg    # Kopi Halu Pandan
    ├── product3.jpg    # Kopi Hazelnut
    ├── product4.jpg    # Kopi Americano
    ├── product5.jpg    # Matcha Latte
    └── product6.jpg    # Kopi Halu Extra Shot
```

---

## 🎤 Contekan Penjelasan untuk Teman Kelompok saat Ditanya Dosen

1. **Jika Dosen bertanya: "Bagaimana cara kerja navigasi responsif di HP?"**
   > *Jawaban:* "Di CSS, menu kami sembunyikan dengan `display: none` pada ukuran layar di bawah 650px. Lalu di JavaScript, ketika tombol hamburger diklik, script menambahkan class `active` menggunakan `classList.toggle('active')` sehingga menunya tampil."

2. **Jika Dosen bertanya: "Bagaimana cara kerja form pemesanan WhatsApp?"**
   > *Jawaban:* "Kami menggunakan `event.preventDefault()` agar formulir tidak me-refresh halaman, lalu mengambil data nama, menu, dan jumlah dari elemen input, menyusunnya ke dalam pesan teks, lalu membukanya menggunakan `window.open()` ke URL API resmi WhatsApp `https://wa.me/`."

3. **Jika Dosen bertanya: "Kenapa tidak pakai framework atau animasi berjalan?"**
   > *Jawaban:* "Kami fokus menguasai fondasi dasar HTML, CSS Flexbox/Grid, dan Vanilla JavaScript sesuai materi kuliah agar kodenya bersih, cepat diakses, mudah dipelihara, dan sesuai dengan 7 fitur wajib penugasan."

4. **Jika Dosen bertanya: "Bagaimana cara menampilkan titik lokasi pada peta?"**
   > *Jawaban:* "Kami menggunakan iframe peta interaktif dengan penanda koordinat `marker` yang secara otomatis menandai titik outlet Kopi Halu di Kutabumi, Tangerang, serta menyediakan tombol rute langsung yang terintegrasi ke aplikasi Google Maps resmi."
