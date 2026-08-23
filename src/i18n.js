import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": {
        "heading": "Hi, I'm Yiğit Arda Kıdıman",
        "subtitle": "Passionate Student and Developer...",
        "exploreProjects": "Explore Projects",
        "aboutMe": "About Me",
        "viewGallery": "View Gallery",
        "getInTouch": "Get in Touch",
        "aboutMore": "More About Me",
        "allProjects": "View All Projects",
        "allGallery": "View Full Gallery",
        "allContact": "Contact Details",
        "projectsHeading": "Featured Projects",
        "projectsSubtitle": "A selection of recent works and open source projects I've built.",
        "contactHeading": "Get in Touch",
        "contactSubtitle": "Feel free to reach out for collaborations, questions, or just to say hi.",
        "contactPageBtn": "Go to Contact Page"
      },
      "nav": {
        "home": "Home",
        "about": "About",
        "projects": "Projects",
        "gallery": "Gallery",
        "contact": "Contact"
      },
      "gallery": {
        "heading": "Gallery",
        "subtitle": "Moments, events, and memories."
      },
      "about": {
        "heading": "About Me",
        "subtitle": "Learn about my background, skills and journey.",
        "whoAmI": "Who Am I?",
        "whoAmIDesc": "I'm a passionate student and developer who has been interested in coding since high school. With a growing foundation in both frontend and backend technologies, I enjoy turning ideas into beautiful and functional projects.",
        "myResume": "My Resume",
        "education": "Education",
        "ostim": "OSTIM Technical University",
        "softwareEng": "Software Engineering",
        "duration": "2024 - Present",
        "experience": "Experience",
        "workPlace1": "Volinor Defense & Tech Inc.",
        "workRole1": "Software Developer",
        "workType1": "Part-time",
        "workDuration1": "07/2026 - Present",
        "workRole2": "Software Engineering Intern",
        "workType2": "Intern",
        "workDuration2": "06/2026 - 07/2026 | Ankara",
        "skills": "Skills & Technologies",
        "backend": "Backend",
        "frontend": "Frontend",
        "tools": "Tools",
        "programmingLanguages": "Programming Languages"
      },
      "projects": {
        "heading": "Projects",
        "volinor": "Volinor Defense Website",
        "volinorDesc": "Corporate web platform built for Volinor Defense featuring React, Three.js 3D model visualization, and Django REST API integration.",
        "kidimusic_generator": "KıdıMusic Generator",
        "kidimusic_generatorDesc": "A web application that generates custom music tracks from text prompts and allows easy audio export.",
        "gitfetch_generator": "GitFetch README Generator",
        "gitfetch_generatorDesc": "A modern web application to generate stylish and interactive GitHub profile READMEs easily.",
        "comingSoon": "Coming Soon...",
        "liveDemo": "Live Demo",
        "tags": {
          "React": "React",
          "ThreeJS": "Three.js",
          "Django": "Django",
          "CSS": "CSS",
          "JavaScript": "JavaScript",
          "Typescript": "Typescript",
          "Python": "Python",
          "Tailwind": "Tailwind CSS",
          "FileManagement": "File Management",
          "OOP": "OOP"
        },
        "badges": {
          "openSource": "Open Source"
        }
      },
      "contact": {
        "heading": "Connections",
        "subtitle": "Addresses where you can reach me",
        "email": "E-mail",
        "linkedin": "LinkedIn",
        "instagram": "Instagram",
        "copied": "Copied to clipboard!"
      },
      "spotify": {
        "nowPlaying": "Listening on Spotify",
        "recentlyPlayed": "Recently Played on Spotify",
        "offline": "Not listening to Spotify right now",
        "loading": "Loading...",
        "listen": "Listen",
        "recent": "Recent",
        "title": "What I'm Listening To",
        "live": "LIVE"
      },
      "github": {
        "liveActivity": "Live GitHub Activity",
        "publicRepos": "Public Repos",
        "followers": "Followers",
        "latestPushed": "Latest Push",
        "recentRepos": "Latest Active Repositories",
        "viewProfile": "View Profile",
        "viewRepo": "View Repo",
        "featuredProjects": "Featured Projects",
        "contributionsYear": "{{count}} contributions in the last year",
        "contributionsCount": "{{count}} contributions on {{date}}",
        "hoverHint": "Hover over squares to see details",
        "less": "Less",
        "more": "More",
        "publicRepoDesc": "Public repository",
        "updated": "Updated",
        "justNow": "Just now",
        "hoursAgo": "hours ago",
        "daysAgo": "days ago",
        "loading": "Loading GitHub activity..."
      }
    }
  },
  tr: {
    translation: {
      "home": {
        "heading": "Merhaba, Ben Yiğit Arda Kıdıman",
        "subtitle": "Tutkulu bir öğrenci ve geliştirici...",
        "exploreProjects": "Projeleri İncele",
        "aboutMe": "Hakkımda",
        "viewGallery": "Galeriyi Gör",
        "getInTouch": "İletişime Geç",
        "aboutMore": "Hakkımda Daha Fazlası",
        "allProjects": "Tüm Projeleri Gör",
        "allGallery": "Tüm Galeriyi Gör",
        "allContact": "İletişim Detayları",
        "projectsHeading": "Öne Çıkan Projeler",
        "projectsSubtitle": "Geliştirdiğim güncel çalışmalar ve açık kaynaklı projeler.",
        "contactHeading": "Bana Ulaşın",
        "contactSubtitle": "Projeleriniz, iş birliği teklifleriniz veya sorularınız için bana dilediğiniz zaman ulaşabilirsiniz.",
        "contactPageBtn": "İletişim Sayfasına Git"
      },
      "nav": {
        "home": "Ana Sayfa",
        "about": "Hakkımda",
        "projects": "Projeler",
        "gallery": "Galeri",
        "contact": "İletişim"
      },
      "gallery": {
        "heading": "Galeri",
        "subtitle": "Anlar, etkinlikler ve anılar."
      },
      "about": {
        "heading": "Hakkımda",
        "subtitle": "Geçmişim, yeteneklerim ve yolculuğum hakkında bilgi edinin.",
        "whoAmI": "Ben Kimim?",
        "whoAmIDesc": "Liseden beri kodlamaya ilgi duyan tutkulu bir öğrenci ve geliştiriciyim. Hem frontend hem de backend teknolojilerinde gelişen temelimle fikirleri güzel ve işlevsel projelere dönüştürmekten keyif alıyorum.",
        "myResume": "Özgeçmişim",
        "education": "Eğitim",
        "ostim": "OSTİM Teknik Üniversitesi",
        "softwareEng": "Yazılım Mühendisliği",
        "duration": "2024 - Günümüz",
        "experience": "Deneyim",
        "workPlace1": "Volinor Savunma ve Teknoloji A.Ş.",
        "workRole1": "Software Developer",
        "workType1": "Yarı zamanlı",
        "workDuration1": "Tem 2026 - Günümüz",
        "workRole2": "Yazılım Mühendisliği Stajyeri",
        "workType2": "Stajyer",
        "workDuration2": "Haz 2026 - 1 ay | Ankara",
        "skills": "Yetenekler & Teknolojiler",
        "backend": "Backend",
        "frontend": "Frontend",
        "tools": "Araçlar",
        "programmingLanguages": "Programlama Dilleri"
      },
      "projects": {
        "heading": "Projeler",
        "volinor": "Volinor Savunma Web Sitesi",
        "volinorDesc": "Volinor Savunma ve Teknoloji için React, Three.js ve Django REST API entegrasyonuyla geliştirilmiş 3D model destekli kurumsal web platformu.",
        "kidimusic_generator": "KıdıMusic Generator",
        "kidimusic_generatorDesc": "Yapay zeka yönlendirmeleri (prompt) ile özgün müzik parçaları oluşturan ve ses dosyalarını dışa aktaran web uygulaması.",
        "gitfetch_generator": "GitFetch README Generator",
        "gitfetch_generatorDesc": "GitHub profiliniz için şık ve etkileşimli README dosyalarını kolayca oluşturmanızı sağlayan modern web uygulaması.",
        "comingSoon": "Çok Yakında...",
        "liveDemo": "Canlı Demo",
        "tags": {
          "React": "React",
          "ThreeJS": "Three.js",
          "Django": "Django",
          "CSS": "CSS",
          "JavaScript": "JavaScript",
          "Typescript": "Typescript",
          "Python": "Python",
          "Tailwind": "Tailwind CSS",
          "FileManagement": "Dosya Yönetimi",
          "OOP": "OOP"
        },
        "badges": {
          "openSource": "Açık Kaynak"
        }
      },
      "contact": {
        "heading": "İletişim",
        "subtitle": "Bana ulaşabileceğiniz adresler",
        "email": "E-posta",
        "linkedin": "LinkedIn",
        "instagram": "Instagram",
        "copied": "Panoya kopyalandı!"
      },
      "spotify": {
        "nowPlaying": "Spotify'da Çalıyor",
        "recentlyPlayed": "Spotify'da Son Dinlenen",
        "offline": "Şu an Spotify'da bir şey dinlemiyor",
        "loading": "Yükleniyor...",
        "listen": "Dinle",
        "recent": "Son",
        "title": "Ne Dinliyorum?",
        "live": "CANLI"
      },
      "github": {
        "liveActivity": "Canlı GitHub Aktivitesi",
        "publicRepos": "Açık Kaynak Repo",
        "followers": "Takipçi",
        "latestPushed": "Son Push",
        "recentRepos": "Son Aktif Repolar",
        "viewProfile": "Profili Gör",
        "viewRepo": "Repoyu İncele",
        "featuredProjects": "Öne Çıkan Projeler",
        "contributionsYear": "Son 1 yılda {{count}} katkı",
        "contributionsCount": "{{date}} tarihinde {{count}} katkı",
        "hoverHint": "Detayları görmek için karelerin üzerine gelin",
        "less": "Az",
        "more": "Çok",
        "publicRepoDesc": "Açık kaynak repo",
        "updated": "Güncellendi",
        "justNow": "Az önce",
        "hoursAgo": "saat önce",
        "daysAgo": "gün önce",
        "loading": "GitHub aktiviteleri yükleniyor..."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr",
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
