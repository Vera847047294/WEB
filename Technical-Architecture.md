# Terra Microscape Studio - Technical Architecture Document

## 1. Architecture Overview

This is a **static website** project using pure HTML, CSS, and JavaScript. No backend required - all content is static and self-contained.

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│  ┌─────────────────────────────────────────────┐│
│  │  6 HTML Pages (index, shop, custom, care,  ││
│  │            about, contact)                  ││
│  ├─────────────────────────────────────────────┤│
│  │  CSS (styles.css with CSS Variables)        ││
│  ├─────────────────────────────────────────────┤│
│  │  JavaScript (main.js)                       ││
│  ├─────────────────────────────────────────────┤│
│  │  External CDN Resources:                    ││
│  │  - Google Fonts (Playfair Display, Inter,  ││
│  │    Cormorant Garamond)                      ││
│  │  - Lucide Icons                             ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
```

## 2. Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Structure | HTML5 | Semantic markup |
| Styling | CSS3 + Custom Properties | Visual design, responsive |
| Interaction | Vanilla JavaScript ES6+ | UI behavior, forms |
| Icons | Lucide Icons (CDN) | Iconography |
| Fonts | Google Fonts | Typography |

## 3. File Structure

```
/
├── index.html          # Home page
├── shop.html           # Product listing
├── custom.html         # Custom design service
├── care.html           # Care guide & FAQ
├── about.html          # About the brand
├── contact.html        # Contact & FAQ page
├── css/
│   └── styles.css      # All styles (CSS variables, components, pages)
├── js/
│   └── main.js         # All JavaScript (menu, accordion, filters, forms)
└── images/
    └── (placeholder images - using picsum.photos for demo)
```

## 4. CSS Architecture

### 4.1 CSS Variables (Theme)

```css
:root {
  /* Colors */
  --color-primary: #3D5A47;
  --color-secondary: #F5F2EB;
  --color-accent: #B8A398;
  --color-background: #FAF9F6;
  --color-text: #2D3436;
  --color-text-secondary: #6B7280;
  --color-highlight: #9CAF88;
  --color-white: #FFFFFF;
  --color-border: #E5E5E5;

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Cormorant Garamond', serif;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.12);
}
```

### 4.2 Component Categories

- **Base:** Reset, typography, utilities
- **Layout:** Header, footer, container, grid, section
- **Components:** Button, card, badge, form, accordion, testimonial
- **Pages:** Hero, product-grid, gallery, timeline, FAQ

## 5. JavaScript Architecture

### 5.1 Module Pattern

All JavaScript uses IIFE module pattern to avoid global scope pollution:

```javascript
const TerraApp = (() => {
  // Private state
  let isMenuOpen = false;

  // Public methods
  return {
    initMobileMenu,
    initAccordion,
    initFilters,
    initForms,
    initBackToTop
  };
})();
```

### 5.2 Feature Modules

| Module | Function | Events |
|--------|----------|--------|
| Mobile Menu | Toggle hamburger menu | Click, resize |
| Accordion | FAQ collapsible sections | Click |
| Product Filters | Filter by price/style | Click |
| Forms | Validation & submission | Submit |
| Back to Top | Scroll to top | Click, scroll |

## 6. Responsive Breakpoints

| Breakpoint | Viewport | Layout |
|------------|----------|--------|
| Desktop | ≥1024px | Full layout, 3-4 column grids |
| Tablet | 768px-1023px | Adjusted grid, smaller padding |
| Mobile | <768px | Single column, hamburger menu |

## 7. Accessibility Requirements

- Semantic HTML5 elements (header, nav, main, section, article, footer)
- ARIA labels on interactive elements
- Focus states on all interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` media query respect
- Color contrast ratio ≥ 4.5:1 for text

## 8. Performance Considerations

- Lazy loading images with `loading="lazy"`
- CSS animations use `transform` and `opacity` (GPU accelerated)
- Minimal JavaScript, no heavy libraries
- Single CSS file, single JS file (minimizes HTTP requests)
- External resources (fonts, icons) loaded via CDN with optimal caching

## 9. Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)
