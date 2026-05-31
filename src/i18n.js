import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": {
        "heading": "Hi, I'm Yiğit Arda Kıdıman",
        "subtitle": "Passionate Student and Developer...",
        "aboutMe": "About me",
        "learnMore": "Learn more about me",
        "projects": "Projects",
        "myWorks": "My own works",
        "contact": "Contact",
        "getInTouch": "Get in touch with me",
        "websiteTitle": "About This Website",
        "websiteDesc": "This is my personal workspace - a hub for showcasing my projects, blogs and connecting with others."
      },
      "nav": {
        "home": "Home",
        "about": "About",
        "projects": "Projects",
        "contact": "Contact"
      },
      "about": {
        "heading": "About Me & Experiences",
        "subtitle": "Learn about my background, skills and journey.",
        "whoAmI": "Who Am I?",
        "whoAmIDesc": "I'm a passionate student and developer who has been interested in coding since high school. With a growing foundation in both frontend and backend technologies, I enjoy turning ideas into beautiful and functional projects.",
        "myResume": "My Resume",
        "education": "Education & Experiences",
        "ostim": "OSTIM Technical University",
        "softwareEng": "Software Engineering",
        "duration": "2024 - Present",
        "skills": "Skills & Technologies",
        "backend": "Backend",
        "frontend": "Frontend",
        "tools": "Tools",
        "interests": "Interests & Hobbies",
        "gaming": "Gaming",
        "reading": "Reading",
        "music": "Music"
      },
      "projects": {
        "heading": "Projects",
        "personalWebsite": "Personal Website",
        "personalWebsiteDesc": "A modern, responsive personal portfolio website built with React, Tailwind CSS, and Vite.",
        "meyveKayit": "MeyveKayıt",
        "meyveKayitDesc": "MeyveKayıt is a simple Python desktop application designed to track total fruit purchases (in kilograms) per customer in a fruit market. The application stores all records in a file and automatically reloads them when restarted.",
        "kidimusic_generator": "KıdıMusic Generator",
        "kidimusic_generatorDesc": "Generate music tracks from prompts and export audio with a simple web UI.",
        "oopATM": "OOP ATM",
        "oopATMDesc": "Built using Python Object-Oriented Programming (OOP) principles. It is a console-based application that simulates basic ATM operations with an OOP structure.",
        "bankingSystem": "Simple Banking System",
        "bankingSystemDesc": "A console-based banking application built with Python using Object-Oriented Programming (OOP) principles and basic Data Structures.",
        "comingSoon": "Coming Soon...",
        "liveDemo": "Live Demo",
        "tags": {
          "HTML": "HTML",
          "CSS": "CSS",
          "JavaScript": "JavaScript",
          "Typescript": "Typescript",
          "Python": "Python",
          "FileManagement": "File Management",
          "OOP": "OOP",
          "React": "React",
          "Tailwind": "Tailwind",
          "Vite": "Vite"
        }
      },
      "contact": {
        "heading": "Connections",
        "subtitle": "Addresses which you can reach me",
        "email": "E-mail",
        "linkedin": "LinkedIn",
        "instagram": "Instagram"
      },
      "common": {
        "backToHome": "← Back to Home"
      }
    }
  },
  tr: {
    translation: {
      "home": {
        "heading": "Merhaba, Ben Yiğit Arda Kıdıman",
        "subtitle": "Tutkulu bir öğrenci ve geliştirici...",
        "aboutMe": "Hakkımda",
        "learnMore": "Benim hakkımda daha fazla bilgi edinin",
        "projects": "Projeler",
        "myWorks": "Kendi çalışmalarım",
        "contact": "İletişim",
        "getInTouch": "Benimle iletişime geçin",
        "websiteTitle": "Bu Web Sitesi Hakkında",
        "websiteDesc": "Burası benim kişisel çalışma alanım; projelerimi, bloglarımı sergilediğim ve başkalarıyla bağlantı kurduğum bir merkez."
      },
      "nav": {
        "home": "Ana Sayfa",
        "about": "Hakkında",
        "projects": "Projeler",
        "contact": "İletişim"
      },
      "about": {
        "heading": "Hakkımda ve Deneyimlerim",
        "subtitle": "Geçmişim, yeteneklerim ve yolculuğum hakkında bilgi edinin.",
        "whoAmI": "Ben Kimim?",
        "whoAmIDesc": "Liseden beri kodlamaya ilgi duyan tutkulu bir öğrenci ve geliştiriciyim. Hem frontend hem de backend teknolojilerinde gelişen temelimle fikirleri güzel ve işlevsel projelere dönüştürmekten keyif alıyorum.",
        "myResume": "Özgeçmişim",
        "education": "Eğitim ve Deneyimler",
        "ostim": "OSTİM Teknik Üniversitesi",
        "softwareEng": "Yazılım Mühendisliği",
        "duration": "2024 - Günümüz",
        "skills": "Yetenekler & Teknolojiler",
        "backend": "Backend",
        "frontend": "Frontend",
        "tools": "Araçlar",
        "interests": "İlgi Alanları & Hobiler",
        "gaming": "Oyun",
        "reading": "Okuma",
        "music": "Müzik"
      },
      "projects": {
        "heading": "Projeler",
        "personalWebsite": "Kişisel Web Sitesi",
        "personalWebsiteDesc": "React, Tailwind CSS ve Vite ile oluşturulmuş modern, duyarlı bir kişisel portföy web sitesi.",
        "meyveKayit": "MeyveKayıt",
        "meyveKayitDesc": "MeyveKayıt, bir meyve pazarındaki müşteri başına toplam meyve alımlarını (kilogram cinsinden) takip etmek için tasarlanmış basit bir Python masaüstü uygulamasıdır.",
        "kidimusic_generator": "KıdıMusic Generator",
        "kidimusic_generatorDesc": "Basit bir web kullanıcı arayüzü ile istemlerden müzik parçaları oluşturun ve sesi dışa aktarın.",
        "oopATM": "OOP ATM",
        "oopATMDesc": "Python Nesne Yönelimli Programlama (OOP) prensipleri kullanılarak oluşturulmuştur. Temel ATM işlemlerini simüle eden konsol tabanlı bir uygulamadır.",
        "bankingSystem": "Bankacılık Sistemi",
        "bankingSystemDesc": "Nesne Yönelimli Programlama (OOP) prensipleri ve temel Veri Yapıları kullanılarak Python ile geliştirilmiş, konsol tabanlı bir bankacılık uygulaması.",
        "comingSoon": "Çok Yakında...",
        "liveDemo": "Canlı Demo",
        "tags": {
          "HTML": "HTML",
          "CSS": "CSS",
          "JavaScript": "JavaScript",
          "Typescript": "Typescript",
          "Python": "Python",
          "FileManagement": "Dosya Yönetimi",
          "OOP": "OOP",
          "React": "React",
          "Tailwind": "Tailwind",
          "Vite": "Vite"
        }
      },
      "contact": {
        "heading": "Bağlantılar",
        "subtitle": "Bana ulaşabileceğiniz adresler",
        "email": "E-posta",
        "linkedin": "LinkedIn",
        "instagram": "Instagram"
      },
      "common": {
        "backToHome": "← Ana Sayfaya Dön"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
