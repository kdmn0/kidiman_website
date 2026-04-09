function loadComponents() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            if (typeof setupLanguageSwitcher === 'function') {
                setupLanguageSwitcher();
            }
            if (typeof updatePageLanguage === 'function') {
                updatePageLanguage();
            }
            initializeThemeToggle();
        })
        .catch(error => console.error('Error loading navbar:', error));
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            if (typeof updatePageLanguage === 'function') {
                updatePageLanguage();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    
    function updateThemeIcon(theme) {
        if (themeToggle) {
            if (theme === 'light') {
                themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            } else {
                themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
            }
        }
    }
    
    // Sayfa yüklenince localStorage'dan tema al ve icon'u ayarla
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        bodyElement.classList.add('light-mode');
        updateThemeIcon('light');
    } else {
        bodyElement.classList.remove('light-mode');
        updateThemeIcon('dark');
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
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}
