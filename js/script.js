let translations = {};
let currentLanguage = localStorage.getItem('language') || 'eng';

// Dil dosyasını yükle
function loadTranslations() {
    const langCode = currentLanguage === 'tr' ? 'tr' : 'en';
    fetch(`js/translations/${langCode}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data;
            updatePageLanguage();
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Sayfadaki tüm metinleri güncelle
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const keys = element.getAttribute('data-i18n-key').split('.');
        let value = translations;
        
        for (let key of keys) {
            value = value[key];
        }
        
        if (value) {
            element.textContent = value;
        }
    });

    // Placeholder metinleri güncelle
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const keys = element.getAttribute('data-i18n-placeholder').split('.');
        let value = translations;
        
        for (let key of keys) {
            value = value[key];
        }
        
        if (value) {
            element.placeholder = value;
        }
    });
}

// Dil seçici event listener
function setupLanguageSwitcher() {
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        langSelect.value = currentLanguage;
        langSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            localStorage.setItem('language', currentLanguage);
            loadTranslations();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('dark-mode-btn') || document.getElementById('theme-toggle');
    const bodyElement = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-mode');
        updateThemeIcon('light');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            if (bodyElement.classList.contains('light-mode')) {
                bodyElement.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon('dark');
            } else {
                bodyElement.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                updateThemeIcon('light');
            }
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeToggle) {
            if (theme === 'light') {
                themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            } else {
                themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            }
        }
    }

    // Çevirileri yükle
    loadTranslations();
});
