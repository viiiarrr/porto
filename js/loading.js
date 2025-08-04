// Loading Screen functionality
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.querySelector('.loading-screen');
        this.init();
    }

    init() {
        this.showLoadingScreen();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('load', () => {
            this.hideLoadingScreen();
        });
    }

    showLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.style.opacity = '1';
            this.loadingScreen.style.visibility = 'visible';
        }
    }

    hideLoadingScreen() {
        if (this.loadingScreen) {
            setTimeout(() => {
                this.loadingScreen.style.opacity = '0';
                this.loadingScreen.style.visibility = 'hidden';
            }, 1500);
        }
    }
}

// Initialize loading screen
new LoadingScreen();
