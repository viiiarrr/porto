// Theme Toggle functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.body = document.body;
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.updateThemeIcon();
        this.bindEvents();
    }

    loadSavedTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        this.body.classList.add(currentTheme + '-theme');
    }

    bindEvents() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        if (this.body.classList.contains('light-theme')) {
            this.body.classList.remove('light-theme');
            this.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            this.body.classList.remove('dark-theme');
            this.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = this.themeToggle?.querySelector('i');
        if (icon) {
            if (this.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
