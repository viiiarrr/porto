# Portfolio Website - Viar

Modern, responsive portfolio website with advanced features and clean architecture.

## ✨ Features

- 🎨 Clean, minimal design with dark/light theme
- 📱 Fully responsive across all devices
- 🚀 Smooth animations and transitions
- 🎯 Custom cursor with interactive effects
- � Animated statistics and skill bars
- �📧 Working contact form with validation
- 🌓 Dark/Light theme toggle with localStorage
- ⚡ Fast loading with optimized assets
- 🎪 Loading screen with progress animation

## 🏗️ Project Structure

```
porto/
├── index.html              # Main HTML file
├── css/                    # Modular CSS files
│   ├── base.css           # Variables, reset, base styles
│   ├── components.css     # UI components (cursor, loading)
│   ├── navigation.css     # Navigation styles
│   ├── hero.css          # Hero section styles
│   ├── sections.css      # About, skills, work sections
│   ├── contact.css       # Contact and footer styles
│   ├── animations.css    # Keyframes and animations
│   └── responsive.css    # Media queries
├── js/                    # Modular JavaScript files
│   ├── main.js           # Main app initialization
│   ├── loading.js        # Loading screen functionality
│   ├── cursor.js         # Custom cursor
│   ├── theme.js          # Theme switching
│   ├── navigation.js     # Navigation functionality
│   ├── animations.js     # Animation controls
│   └── contact.js        # Contact form handling
├── server.py             # Development server
├── README.md             # This file
└── STRUCTURE.md          # Detailed file structure docs
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in your web browser
2. Or run the development server: `python3 server.py`
3. Visit `http://localhost:8000`

### Development Server
```bash
# Start development server
python3 server.py

# Server will automatically open browser
# Hot reload: Refresh browser after changes
```

## 🎨 Customization

### Personal Information
- **Name & Branding**: Update in `index.html` and CSS files
- **Contact Info**: Change email and social links in HTML
- **About Section**: Edit your story and experience
- **Skills**: Update technical skills and percentages

### Projects Portfolio
- **Project Images**: Replace placeholder images with your work
- **Project Info**: Update titles, descriptions, and tech stacks
- **Project Links**: Add links to live demos and repositories

### Styling & Theme
- **Colors**: Modify CSS custom properties in `css/base.css`
- **Fonts**: Change font families in base styles
- **Layout**: Adjust grid systems and spacing
- **Animations**: Customize timing and effects

### Content Sections
```html
<!-- Update these sections in index.html -->
<section id="about">   <!-- Your story and stats -->
<section id="skills">  <!-- Technical skills -->
<section id="work">    <!-- Portfolio projects -->
<section id="contact"> <!-- Contact form -->
```

## ⚡ Performance Features

- **Modular Architecture**: Separated CSS and JS files
- **Lazy Loading**: Images load on demand
- **CSS Custom Properties**: Efficient theme switching
- **Intersection Observer**: Optimized scroll animations
- **Mobile-First**: Responsive design approach

## 🌐 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, ES6+

## 📱 Responsive Design

- **Mobile**: 480px and below
- **Tablet**: 768px and below  
- **Desktop**: 1024px and above
- **Large Desktop**: 1200px and above

## 🎯 Key Technologies

- **HTML5**: Semantic markup, accessibility
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Classes, Modules, Async/Await
- **External Libraries**: AOS (Animate On Scroll), Font Awesome
- **Development**: Python HTTP Server

## 🚀 Deployment Options

### Static Hosting
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Drag and drop deployment
- **Vercel**: Git integration deployment

### Custom Domain
1. Purchase domain from registrar
2. Configure DNS settings
3. Update meta tags with your domain

### Performance Optimization
```bash
# For production, consider:
# 1. Minify CSS and JavaScript
# 2. Optimize and compress images
# 3. Enable gzip compression
# 4. Set up proper caching headers
```

## 🔧 Development Tips

1. **File Organization**: Each feature has its own CSS/JS file
2. **CSS Variables**: Easy theme customization
3. **Mobile-First**: Design for mobile, enhance for desktop
4. **Progressive Enhancement**: Core functionality works without JS
5. **Accessibility**: Semantic HTML, proper contrast ratios

## 📊 Analytics Setup

Add your analytics tracking code to the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🐛 Troubleshooting

### Common Issues
- **Loading Screen Stuck**: Check JavaScript console for errors
- **Animations Not Working**: Ensure AOS library is loaded
- **Theme Not Saving**: Check localStorage permissions
- **Images Not Loading**: Verify image paths and formats

### Debug Mode
Open browser developer tools (F12) to check:
- Console for JavaScript errors
- Network tab for loading issues
- Elements tab for CSS debugging

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Made with ❤️ by Viar**
# porto
