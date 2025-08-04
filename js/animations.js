// Animations and Interactive Effects
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.initAOS();
        this.setupObservers();
        this.initParallax();
        this.setupWorkItemsAnimation();
    }

    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100,
                delay: 100
            });
        }
    }

    setupObservers() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('about-stats')) {
                        this.animateCounters();
                    }
                    if (entry.target.classList.contains('skills-grid')) {
                        this.animateSkillBars();
                    }
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = document.querySelectorAll('.about-stats, .skills-grid, .work-item, .about-title, .contact-title');
        elementsToObserve.forEach(el => {
            if (el) observer.observe(el);
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, index * 200);
        });
    }

    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < window.innerHeight) {
                const rate = scrolled * -0.2;
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    setupWorkItemsAnimation() {
        const workItems = document.querySelectorAll('.work-item');
        
        // Initial setup
        workItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Reveal function
        const revealWorkItems = () => {
            workItems.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible && !item.classList.contains('revealed')) {
                    setTimeout(() => {
                        item.classList.add('revealed');
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        };

        window.addEventListener('scroll', revealWorkItems);
        window.addEventListener('load', revealWorkItems);
    }

    initHeroAnimation() {
        window.addEventListener('load', () => {
            const heroLines = document.querySelectorAll('.hero-title .line');
            heroLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});
