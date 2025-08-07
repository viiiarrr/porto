// Custom Cursor functionality - DISABLED
// Cursor animations have been disabled for better usability

class CustomCursor {
    constructor() {
        this.init();
    }

    init() {
        // Set normal cursor for all devices
        document.body.style.cursor = 'auto';
        
        // Hide custom cursor elements if they exist
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        if (cursor) cursor.style.display = 'none';
        if (cursorFollower) cursorFollower.style.display = 'none';
        
        console.log('Custom cursor disabled - using default system cursor');
    }
}

// Initialize cursor settings when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
});
