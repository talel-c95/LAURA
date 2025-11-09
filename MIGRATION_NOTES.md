# Migration Notes

## Conversion Summary

This document outlines the migration from static HTML/CSS/JS to Next.js 14 (App Router) with TypeScript.

## What Was Converted

### 1. HTML Structure → React Components

- **Root Layout** (`app/layout.tsx`): Contains metadata, global styles, and page structure
- **Header** (`components/Header.tsx`): Navigation with dropdowns, mobile menu, search, cart
- **Footer** (`components/Footer.tsx`): Footer with links and company information
- **Hero Section** (`components/HeroSection.tsx`): Video background hero section
- **Story Section** (`components/StorySection.tsx`): Brand story section
- **Category Banners** (`components/CategoryBanners.tsx`): Category grid with images
- **Perfume Collection** (`components/PerfumeCollection.tsx`): Perfume showcase with video
- **Product Grid** (`components/ProductGrid.tsx`): Product listing with hover effects

### 2. CSS Files

All original CSS files are preserved and imported:
- `siteground-optimizer-combined-css-86507ae69c10d4022e5dc2d1ab06e130.css`
- `brands.css`
- `wc-blocks.css`

These are imported in `app/globals.css` using `@import` statements.

### 3. Fonts

Font face definitions are in `app/fonts.css`:
- Montserrat (headings)
- Raleway (body text)
- Dancing Script (alt font)
- fl-icons (icon font)

All font files are in `public/fonts/`.

### 4. JavaScript Functionality

**Converted to React:**
- Mobile menu toggle → React state
- Search lightbox → React component with state
- Cart dropdown → React component
- Language switcher → React state
- Scroll effects → React `useEffect` hooks
- Video autoplay → React refs

**Preserved (loaded when needed):**
- jQuery and other original JS files in `public/js/`
- Some functionality may need additional integration

### 5. Images and Media

- All images preserved in `public/images/`
- Videos preserved in `public/media/`
- Using Next.js `Image` component for optimization
- Hover image swapping implemented in ProductGrid

## Manual Steps Required

### 1. Asset Verification

Verify all assets are copied:
```bash
# Check asset directories
ls public/css/
ls public/fonts/
ls public/images/
ls public/js/
ls public/media/
```

### 2. Environment Variables (if needed)

Create `.env.local` for any API endpoints or configuration:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

### 3. Image Paths

Update image paths in `data/products.ts` if images are renamed or moved.

### 4. Backend Integration

The site currently uses static product data. To connect to a backend:

1. Create API routes in `app/api/`
2. Update product fetching in components
3. Implement cart state management
4. Add user authentication

### 5. Search Functionality

Currently, search form is UI-only. To implement:

1. Create search API route
2. Implement search logic
3. Create search results page
4. Add debouncing for search input

### 6. Multi-language Support

Language switcher UI is implemented. To add full i18n:

1. Install `next-intl` or similar
2. Create translation files
3. Update routing for language prefixes
4. Implement language switching logic

## Known Issues

1. **jQuery Dependencies**: Some original JS files depend on jQuery. These may need to be refactored or jQuery needs to be loaded.

2. **CSS Specificity**: Original CSS may have high specificity. Some styles may need adjustment.

3. **Video Autoplay**: Browser autoplay policies may prevent videos from autoplaying. Handle gracefully.

4. **Image Optimization**: Some images may be very large. Consider optimization or lazy loading.

5. **Performance**: Original CSS files are large. Consider splitting or optimizing.

## Testing Checklist

- [ ] Header scroll behavior
- [ ] Mobile menu functionality
- [ ] Search lightbox
- [ ] Cart dropdown
- [ ] Language switcher
- [ ] Product hover effects
- [ ] Video autoplay
- [ ] Responsive breakpoints
- [ ] Footer links
- [ ] Navigation routing
- [ ] Page loader animation
- [ ] Image loading
- [ ] Font loading

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component (already implemented)
2. **Code Splitting**: Next.js automatically code-splits
3. **CSS Optimization**: Consider splitting large CSS files
4. **Lazy Loading**: Implement lazy loading for below-the-fold content
5. **Font Optimization**: Use `font-display: swap` (already implemented)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

1. Build: `npm run build`
2. Start: `npm start`
3. Deploy `out/` directory (static export) or run Node.js server

## Support

For issues or questions:
1. Check this migration notes
2. Review Next.js documentation
3. Check component code comments
4. Review original HTML/CSS/JS for reference

