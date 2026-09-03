# Kişisel Portfolyo Web Sitesi / Personal Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

</div>

*(English version is available below)*

---

## 🇹🇷 Türkçe

### 📌 Açıklama
Projeleri, yetenekleri, deneyimleri ve fotoğrafları sergilemek için geliştirilmiş modern, etkileşimli ve tamamen duyarlı (responsive) bir kişisel portfolyo web sitesi. Uygulama; fizik tabanlı 3D grafikler, canlı Spotify entegrasyonu, dil bazlı dinamik rotalama ve akıcı animasyonlar gibi modern web standartlarını kullanmaktadır.

### ✨ Öne Çıkan Özellikler
- 🚀 **Fizik Tabanlı 3D Kart (Lanyard):** Three.js, React Three Fiber ve Rapier Physics (`@react-three/rapier`) ile güçlendirilmiş, fareyle sürüklenebilen gerçekçi 3D kimlik kartı.
- 🎵 **Canlı Spotify Now Playing:** Spotify Web API üzerinden o an çalan veya en son dinlenen şarkıyı, gerçek zamanlı süre sayacı ve dinamik ilerleme çubuğu ile gösteren widget.
- 🌐 **URL Tabanlı Çift Dil Desteği (`/tr` ve `/en`):** `i18next` ve `react-router-dom` entegrasyonu ile tam SEO uyumlu, sayfa konumunu koruyan Türkçe/İngilizce rotalama.
- 📜 **Akıcı Kaydırma (Smooth Scroll):** Lenis entegrasyonu ile doğal ve pürüzsüz sayfa kaydırma deneyimi.
- ✨ **Mikro Etkileşimler & Akıcı Animasyonlar:** Framer Motion destekli sayfa geçişleri ve Lightbox modal destekli fotoğraf galerisi.
- 📱 **Tam Duyarlı Tasarım (Mobile-First):** Tailwind CSS v4 ile mobil, tablet ve masaüstü ekranlar için optimize edilmiş modern karanlık tema (dark mode).

### 🛠️ Kullanılan Teknolojiler (Tech Stack)
- **Frontend Core:** React 19, Vite, React Router v7
- **Stil & Tasarım:** Tailwind CSS v4, Vanilla CSS
- **3D & Fizik Motoru:** Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`, `meshline`
- **Animasyonlar:** Motion (`motion/react`)
- **Kaydırma Deneyimi:** `@studio-freight/lenis` (`lenis/react`)
- **Çoklu Dil (i18n):** `i18next`, `react-i18next`
- **İkonlar:** `lucide-react`, `react-icons`

### 🚀 Kurulum ve Başlangıç

1. **Repoyu bilgisayarınıza klonlayın:**
   ```bash
   git clone https://github.com/yigitardakidiman/kidiman_website.git
   cd kidiman_website
   ```

2. **Gerekli paketleri yükleyin:**
   ```bash
   npm install
   ```

3. **Ortam Değişkenlerini Ayarlayın (Opsiyonel - Spotify için):**
   `.env.example` dosyasını `.env` olarak kopyalayın ve Spotify Developer Dashboard'dan aldığınız API anahtarlarınızı ekleyin:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
   ```

4. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

5. Tarayıcınızda `http://localhost:5173` adresine gidin.

---

## 🇬🇧 English

### 📌 Description
A modern, interactive, and fully responsive personal portfolio website built to showcase projects, skills, journey, and photography. The platform leverages modern web standards including physics-based 3D graphics, live Spotify playback integration, dynamic URL-based localization, and fluid animations.

### ✨ Key Features
- 🚀 **Physics-Based 3D Lanyard Card:** Interactive, draggable 3D identity badge powered by Three.js, React Three Fiber, and Rapier Physics (`@react-three/rapier`).
- 🎵 **Live Spotify Now Playing:** Real-time music widget showing currently playing or recently played tracks with live progress timeline and duration timers via Spotify Web API.
- 🌐 **URL-Based Bilingual Routing (`/tr` & `/en`):** SEO-friendly, state-preserving bilingual routing built with `i18next` and `react-router-dom`.
- 📜 **Smooth Scrolling:** Buttery-smooth, native-feeling scroll experience integrated with Lenis.
- ✨ **Micro-Interactions & Fluid Animations:** Framer Motion page transitions and Lightbox modal photography gallery.
- 📱 **Fully Responsive Layout:** Clean, dark-mode-first interface optimized across all screen sizes with Tailwind CSS v4.

### 🛠️ Tech Stack
- **Frontend Core:** React 19, Vite, React Router v7
- **Styling:** Tailwind CSS v4, Vanilla CSS
- **3D & Physics:** Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`, `meshline`
- **Animations:** Motion (`motion/react`)
- **Scroll Engine:** `@studio-freight/lenis` (`lenis/react`)
- **Localization (i18n):** `i18next`, `react-i18next`
- **Icons:** `lucide-react`, `react-icons`

### 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yigitardakidiman/kidiman_website.git
   cd kidiman_website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional - for Spotify widget):**
   Copy `.env.example` to `.env` and fill in your Spotify API credentials from the Spotify Developer Dashboard:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.
