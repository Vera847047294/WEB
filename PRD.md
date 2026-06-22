# Terra Microscape Studio - Product Requirements Document

## 1. Product Overview

Terra Microscape Studio is a premium e-commerce brand website for a fictional business specializing in closed, self-sustaining desktop terrariums. The website targets young urban professionals and college students who want greenery in small spaces but lack time for plant care.

**Core Value Proposition:** Bring nature into small spaces with zero-maintenance, self-sustaining terrariums that fit perfectly on a desk.

**Target Users:**
- Young urban professionals (25-35 years old)
- College students living in dorms or small apartments
- Plant enthusiasts with limited space and time
- Corporate clients seeking unique gifts

**Market Context:** Final web design course project targeting A+ grade across Creativity (25%), Layout & Imagery (20%), Content Quality (35%), and User Friendliness (20%).

---

## 2. Core Features

### 2.1 Site Architecture (6 Pages)

1. **Home Page** - Landing page with hero, value proposition, bestsellers, testimonials, mission banner, and CTAs
2. **Shop Page** - Product grid with filtering by price range and style
3. **Custom Design Page** - Service explanation, 4-step process, case gallery, and inquiry form
4. **Care Guide Page** - Terrarium science, category-specific care, FAQ accordion, seasonal tips
5. **About Us Page** - Brand story, founder profile, values, eco commitment, timeline
6. **Contact & FAQ Page** - Contact info, shipping/return policy, message form, categorized FAQ

### 2.2 Shared Components

- **Sticky Header Navigation:** Logo, nav links (Home, Shop, Custom Design, Care Guide, About, Contact), converts to hamburger menu on mobile
- **Footer:** Social links, quick links, newsletter signup, copyright
- **Back to Top Button:** Floating button on all pages
- **Consistent Internal Linking:** All pages link to each other

---

## 3. Core User Flows

### Navigation Flow
```
Home → Shop (browse products)
     → Custom Design (submit inquiry)
     → Care Guide (learn about care)
     → About (brand story)
     → Contact (reach out)
```

### Purchase Intent Flow
```
Home (CTA) → Shop (select product) → View details → Add to Cart
           → Custom Design (for bulk/corporate)
```

### Education Flow
```
Home → Care Guide → FAQ Accordion (find answers)
```

---

## 4. User Interface Design

### 4.1 Design Style

**Aesthetic Direction:** Calm, natural, premium lifestyle brand. Morandi color tones with nature-inspired palette. Generous white space, refined typography, breathable layouts.

**Color Palette:**
- Primary: Moss Dark Green (`#3D5A47`)
- Secondary: Warm Off-White (`#F5F2EB`)
- Accent: Light Wood Brown (`#B8A398`)
- Background: Soft Cream (`#FAF9F6`)
- Text Primary: Charcoal (`#2D3436`)
- Text Secondary: Warm Gray (`#6B7280`)
- Highlight: Sage Green (`#9CAF88`)

**Typography:**
- Display/Headings: Playfair Display (serif) - elegant, premium feel
- Body: Inter (sans-serif) - clean readability
- Accent: Cormorant Garamond - for quotes and special text

**Layout Style:** Card-based sections, asymmetric layouts, generous padding, visual breathing room

**Icon Style:** Lucide icons (line style, rounded)

**Animation:**
- Subtle hover transitions (0.3s ease)
- Card lift on hover
- Smooth scroll
- Staggered fade-in for grid items

### 4.2 Page Modules

#### Home Page
| Module | Elements |
|--------|----------|
| Hero | Full-width banner, brand name, slogan, hero product image, two CTAs |
| Value Props | 3 feature blocks with icons, titles, descriptions |
| Bestsellers | 3 product cards with images, names, prices, care tags |
| Testimonials | 3 review cards with avatars, stars, review text |
| Mission Banner | Eco/donation initiative highlight with CTA to About |
| Bottom CTA | Dual CTAs for shop and custom inquiry |

#### Shop Page
| Module | Elements |
|--------|----------|
| Filter Nav | Price range tabs (Entry/Advanced/Premium), Style pills (Forest/Rainforest/Desert) |
| Product Grid | 8+ product cards with hover effects |
| Shipping Info | Free shipping notice, delivery time |

#### Custom Design Page
| Module | Elements |
|--------|----------|
| Service Intro | Use cases (gifts, decor, corporate) |
| Process Steps | 4-step visual timeline |
| Case Gallery | 6 custom terrarium images with descriptions |
| Inquiry Form | Name, email, budget, size, style, requests, submit |

#### Care Guide Page
| Module | Elements |
|--------|----------|
| Science Section | How closed terrariums work |
| Category Care | Forest, Rainforest, Desert specific tips |
| FAQ Accordion | 8+ collapsible Q&A pairs |
| Seasonal Tips | 4-season care recommendations |

#### About Us Page
| Module | Elements |
|--------|----------|
| Brand Story | Narrative about nature deficit disorder |
| Founder Profile | Photo placeholder, bio, philosophy |
| Design Values | Nature, wellness, sustainability |
| Eco Commitment | $1 donation rule, sustainable materials |
| Timeline | Brand milestones |

#### Contact & FAQ Page
| Module | Elements |
|--------|----------|
| Contact Info | Email, hours, social links |
| Policies | Shipping, returns, warranty |
| Message Form | Name, email, message, submit |
| FAQ Categories | Ordering, Shipping, Care, Custom Orders |

### 4.3 Responsiveness

- **Desktop-first** design (target primary audience)
- Breakpoints: 1280px (desktop), 1024px (laptop), 768px (tablet), 480px (mobile)
- Mobile: Single column, hamburger menu, adjusted spacing
- No horizontal scroll on any viewport
- Touch-friendly tap targets (min 44px)

---

## 5. Technical Architecture

### 5.1 Technology Stack

- **Frontend:** Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Variables for theming
- **Icons:** Lucide Icons via CDN
- **Fonts:** Google Fonts (Playfair Display, Inter, Cormorant Garamond)
- **No Framework Dependencies**

### 5.2 File Structure

```
/
├── index.html (Home)
├── shop.html
├── custom.html
├── care.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── (placeholder images with proper aspect ratios)
```

### 5.3 Key Implementation Notes

- CSS custom properties for consistent theming
- JavaScript modules for interactivity (mobile menu, accordion, filters, forms)
- Lazy loading for images
- Semantic HTML5 elements throughout
- ARIA labels for accessibility
- Prefers-reduced-motion support for animations

---

## 6. Acceptance Criteria

1. All 6 pages complete with working internal links
2. Consistent header/footer across entire site
3. Value proposition clear within 3 seconds on homepage
4. Visible primary CTAs above the fold
5. Flawless responsive design (desktop + mobile)
6. Rich content covering products, services, education, brand
7. Unified brand identity with memorable visual style
8. Interactive elements functional (filters, accordion, forms)
9. Subtle animations without being distracting
10. Professional English copy (no Chinglish)
