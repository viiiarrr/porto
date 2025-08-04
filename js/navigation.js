// Navigation functionality
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        this.bindEvents();
        this.initSmoothScrolling();
        this.injectMobileStyles();
    }

    bindEvents() {
        // Scroll effect
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
            this.updateActiveNavLink();
        });

        // Mobile menu toggle
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // Close mobile menu when clicking on links
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    handleNavbarScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            this.navbar.style.backdropFilter = 'blur(20px)';
            this.navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        } else {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            this.navbar.style.backdropFilter = 'blur(20px)';
            this.navbar.style.borderBottom = 'none';
        }
        
        this.lastScrollTop = scrollTop;
    }

    updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    injectMobileStyles() {
        const mobileMenuStyles = `
            @media (max-width: 768px) {
                .nav-menu {
                    position: fixed;
                    top: 80px;
                    left: -100%;
                    width: 100%;
                    height: calc(100vh - 80px);
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    padding-top: 50px;
                    transition: left 0.3s ease;
                    z-index: 999;
                }
                
                .nav-menu.active {
                    left: 0;
                }
                
                .nav-link {
                    font-size: 18px;
                    margin: 20px 0;
                }
                
                .hamburger.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .hamburger.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = mobileMenuStyles;
        document.head.appendChild(styleSheet);
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
