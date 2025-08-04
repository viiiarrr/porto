# Portfolio Website - File Structure

## 📁 Struktur Folder

```
porto/
├── index.html              # File HTML utama
├── css/                    # Folder CSS terpisah
│   ├── base.css           # CSS variables, reset, dan base styles
│   ├── components.css     # Komponen seperti cursor, loading screen
│   ├── navigation.css     # Styles untuk navigation bar
│   ├── hero.css          # Styles untuk hero section
│   ├── sections.css      # Styles untuk about, skills, work sections
│   ├── contact.css       # Styles untuk contact dan footer
│   ├── animations.css    # Keyframes dan animasi
│   └── responsive.css    # Media queries dan responsive design
├── js/                    # Folder JavaScript terpisah
│   ├── main.js           # Aplikasi utama dan initialization
│   ├── loading.js        # Loading screen functionality
│   ├── cursor.js         # Custom cursor functionality
│   ├── theme.js          # Dark/light theme toggle
│   ├── navigation.js     # Navigation dan smooth scrolling
│   ├── animations.js     # Animasi dan intersection observer
│   └── contact.js        # Contact form dan notifications
├── server.py             # Local development server
├── README.md             # Dokumentasi utama
└── STRUCTURE.md          # File dokumentasi ini
```

## 🎯 Penjelasan File

### CSS Files

#### `base.css`
- CSS custom properties (variables) untuk colors, shadows, gradients
- CSS reset dan base styles
- Dark theme variables
- Utility classes seperti `.gradient-text` dan `.section-title`

#### `components.css`
- Custom cursor styles (`.cursor`, `.cursor-follower`)
- Loading screen components (`.loading-screen`, `.loading-content`)
- Reusable UI components

#### `navigation.css`
- Navbar styles dan positioning
- Navigation links dengan hover effects
- Theme toggle button
- Hamburger menu untuk mobile

#### `hero.css`
- Hero section dengan gradient background
- Hero title dengan animated text
- CTA buttons dengan hover effects
- Scroll indicator dengan mouse animation

#### `sections.css`
- About section dengan info blocks dan stats
- Skills section dengan skill bars dan icons
- Work section dengan project cards
- Grid layouts dan hover effects

#### `contact.css`
- Contact form styles
- Social links dengan icons
- Footer layout dan styling
- Form validation styling

#### `animations.css`
- Semua keyframe animations (`@keyframes`)
- AOS animation overrides
- Custom animation classes
- Transition effects

#### `responsive.css`
- Media queries untuk semua breakpoints
- Mobile navigation styles
- Tablet dan mobile optimizations
- Print styles
- Accessibility preferences (reduced motion, high contrast)

### JavaScript Files

#### `main.js`
- Aplikasi utama dan initialization
- Global event listeners
- Performance monitoring
- Window resize handling

#### `loading.js`
- Loading screen class
- Show/hide loading animations
- Progress bar functionality

#### `cursor.js`
- Custom cursor implementation
- Mouse tracking
- Hover effects untuk interactive elements
- Mobile detection dan fallback

#### `theme.js`
- Dark/light theme toggle
- LocalStorage untuk theme preference
- Icon updates
- Theme switching animations

#### `navigation.js`
- Navbar scroll effects
- Active link highlighting
- Mobile menu toggle
- Smooth scrolling
- Mobile styles injection

#### `animations.js`
- AOS initialization
- Intersection Observer setup
- Counter animations untuk stats
- Skill bar animations
- Parallax effects
- Work items reveal animation

#### `contact.js`
- Contact form handling
- Form validation
- Email validation
- Notification system
- Success/error messages

## 🚀 Keuntungan Pemisahan File

### 1. **Maintainability**
- Setiap file memiliki tanggung jawab yang jelas
- Mudah menemukan dan mengubah kode spesifik
- Debugging lebih mudah

### 2. **Performance**
- CSS dan JS dapat di-cache secara terpisah
- Lazy loading bisa diterapkan
- Minification lebih efektif

### 3. **Scalability**
- Mudah menambah fitur baru
- Modular architecture
- Reusable components

### 4. **Team Collaboration**
- Multiple developer bisa bekerja pada file berbeda
- Mengurangi merge conflicts
- Code review lebih terfokus

### 5. **Loading Strategy**
- Critical CSS bisa diload terlebih dahulu
- Non-critical JS bisa di-defer
- Progressive enhancement

## 📝 Best Practices

1. **CSS Organization**: Ikuti metodologi BEM atau atomic design
2. **JavaScript Modules**: Gunakan ES6+ modules untuk better organization
3. **Asset Optimization**: Minify dan compress files untuk production
4. **Caching Strategy**: Implementasikan proper cache headers
5. **Code Splitting**: Split code berdasarkan routes atau features

## 🔧 Development Workflow

```bash
# 1. Jalankan development server
python3 server.py

# 2. Edit files sesuai kebutuhan:
#    - CSS: Untuk styling changes
#    - JS: Untuk functionality changes
#    - HTML: Untuk structure changes

# 3. Test di berbagai device dan browser

# 4. Optimize untuk production:
#    - Minify CSS dan JS
#    - Optimize images
#    - Implement caching
```

## 🌐 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📱 Responsive Breakpoints

- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large Desktop: 1200px and above
