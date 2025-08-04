// Custom Cursor functionality
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.cursorFollower = document.querySelector('.cursor-follower');
        this.init();
    }

    init() {
        // Hide cursor on mobile
        if (window.innerWidth <= 768) {
            document.body.style.cursor = 'auto';
            if (this.cursor) this.cursor.style.display = 'none';
            if (this.cursorFollower) this.cursorFollower.style.display = 'none';
            return;
        }

        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.updateCursorPosition(e.clientX, e.clientY);
        });

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cta-button, .nav-link');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
                this.cursorFollower.style.transform = 'scale(1.2)';
            });

            element.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursorFollower.style.transform = 'scale(1)';
            });
        });
    }

    updateCursorPosition(x, y) {
        if (this.cursor) {
            this.cursor.style.left = x + 'px';
            this.cursor.style.top = y + 'px';
        }
        
        if (this.cursorFollower) {
            setTimeout(() => {
                this.cursorFollower.style.left = x + 'px';
                this.cursorFollower.style.top = y + 'px';
            }, 100);
        }
    }
}

// Initialize custom cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
});
