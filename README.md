# Laura RCG - Next.js E-commerce Website

This is a Next.js 14 (App Router) conversion of the Laura RCG e-commerce website, originally built as a static HTML site. The project preserves all visual design, functionality, and assets from the original site while leveraging Next.js features for better performance and maintainability.

## Project Structure

```
converterlaurarossa/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles with CSS imports
│   └── fonts.css          # Font face definitions
├── components/            # React components
│   ├── Header.tsx         # Main navigation header
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero section with video
│   ├── StorySection.tsx   # Brand story section
│   ├── CategoryBanners.tsx # Category banner grid
│   ├── PerfumeCollection.tsx # Perfume collection showcase
│   ├── ProductGrid.tsx    # Product grid display
│   ├── PageLoader.tsx     # Page loading animation
│   ├── MobileMenu.tsx     # Mobile navigation menu
│   ├── SearchLightbox.tsx # Search modal
│   └── CartDropdown.tsx   # Shopping cart dropdown
├── data/                  # Data files
│   └── products.ts        # Product data
├── types/                 # TypeScript type definitions
│   └── index.ts           # Type interfaces
├── public/                # Static assets
│   ├── css/               # CSS files (original)
│   ├── fonts/             # Font files
│   ├── images/            # Image assets
│   ├── js/                # JavaScript files
│   └── media/             # Video files
└── package.json           # Dependencies and scripts
```

## Features

- ✅ **Next.js 14 App Router** - Latest Next.js with App Router
- ✅ **TypeScript** - Full type safety
- ✅ **Original CSS Preserved** - All original CSS files imported
- ✅ **Responsive Design** - Mobile and desktop optimized
- ✅ **Video Backgrounds** - Hero section with autoplay video
- ✅ **Product Grid** - Hover effects and image swapping
- ✅ **Mobile Menu** - Responsive navigation
- ✅ **Search Functionality** - Search lightbox modal
- ✅ **Cart Integration** - Shopping cart dropdown (UI only)
- ✅ **Language Switcher** - Multi-language support (UI)
- ✅ **Page Loader** - Smooth page load animation

## Installation

1. **Install dependencies:**
   ```bash
   cd converterlaurarossa
   npm install
   ```

2. **Copy assets** (if not already copied):
   The assets (CSS, fonts, images, JS, media) should already be in the `public` folder. If not, copy them from the original project:
   - `css/` → `public/css/`
   - `fonts/` → `public/fonts/`
   - `images/` → `public/images/`
   - `js/` → `public/js/`
   - `media/` → `public/media/`

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Key Migrations

### HTML to React Components

- **Header**: Converted to React component with state management for scroll effects, mobile menu, and dropdowns
- **Navigation**: Converted to Next.js `Link` components with proper routing
- **Forms**: Converted to React controlled components
- **Inline Scripts**: Moved to React `useEffect` hooks and event handlers

### CSS Integration

- Original CSS files are imported in `globals.css` using `@import`
- Custom styles preserved from original site
- Font faces defined in `fonts.css`
- Inline styles converted to CSS-in-JS using styled-jsx

### Images

- Using Next.js `Image` component for optimization
- Original image paths preserved in `public/images/`
- Hover image swapping implemented in ProductGrid

### JavaScript

- jQuery-dependent scripts preserved in `public/js/` (loaded when needed)
- Interactive features converted to React state and effects
- Video autoplay handled with React refs

## Notes

1. **Original CSS Files**: The project uses the original CSS files from the static site. These are imported via `@import` in `globals.css`.

2. **JavaScript Dependencies**: Some original JS files (jQuery, etc.) are preserved in `public/js/` but may not be fully integrated. The site works with React components, but some original JS functionality may need additional integration.

3. **Product Data**: Product data is currently in `data/products.ts`. For a full e-commerce solution, this should be connected to a backend API or CMS.

4. **Cart Functionality**: The cart dropdown is UI-only. Full cart functionality would require backend integration or state management (Redux, Zustand, etc.).

5. **Search**: Search form is present but needs backend integration for actual search functionality.

6. **Language Switching**: Language switcher UI is implemented but routes need to be created for multi-language support.

## Testing

### Visual Testing
- ✅ Verify header scroll behavior
- ✅ Test mobile menu toggle
- ✅ Check video autoplay in hero section
- ✅ Verify product hover effects
- ✅ Test responsive breakpoints
- ✅ Check footer layout

### Functional Testing
- ✅ Navigation links work
- ✅ Mobile menu opens/closes
- ✅ Search lightbox opens/closes
- ✅ Cart dropdown toggles
- ✅ Language switcher UI works
- ✅ Page loader animation

## Next Steps

1. **Backend Integration**: Connect to a backend API for products, cart, and user management
2. **State Management**: Add state management (Redux/Zustand) for cart and user state
3. **Product Pages**: Create individual product pages (`/product/[slug]`)
4. **Category Pages**: Create category listing pages
5. **Search**: Implement backend search functionality
6. **Internationalization**: Add i18n support for multi-language content
7. **Payment Integration**: Integrate payment gateway
8. **Analytics**: Add analytics tracking
9. **SEO**: Optimize meta tags and add structured data
10. **Performance**: Optimize images and implement lazy loading

## Troubleshooting

### Images not loading
- Ensure all images are in `public/images/`
- Check image paths in `data/products.ts`

### CSS not applying
- Verify CSS files are in `public/css/`
- Check `globals.css` for correct import paths
- Clear `.next` cache and restart dev server

### Video not playing
- Check video files are in `public/media/`
- Verify browser autoplay policies
- Check video file formats (MP4 recommended)

## License

This project is a conversion of the original Laura RCG website. All design and assets remain the property of Laura RCG.

