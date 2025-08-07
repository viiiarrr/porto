// Main application initialization
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.logInitialization();
        this.setupGlobalEventListeners();
    }

    logInitialization() {
        console.log('🚀 Portfolio initialized successfully!');
        console.log('📱 Responsive design active');
        console.log('🎨 Animations loaded');
        console.log('🌓 Theme system ready');
    }

    setupGlobalEventListeners() {
        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Handle page visibility change
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }

    handleResize() {
        // No custom cursor handling needed - using default system cursor
        console.log('Window resized - using system cursor');
    }

    handleVisibilityChange() {
        if (document.hidden) {
            console.log('👋 Page hidden');
        } else {
            console.log('👀 Page visible');
        }
    }
}

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
            console.log(`⚡ Page load time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    });
});

performanceObserver.observe({ entryTypes: ['navigation'] });

// Initialize the main application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Export for debugging
window.PortfolioApp = PortfolioApp;
