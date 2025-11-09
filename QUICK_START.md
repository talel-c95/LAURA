# Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd converterlaurarossa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure Overview

```
converterlaurarossa/
├── app/              # Next.js App Router
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   └── globals.css  # Global styles
├── components/      # React components
├── public/          # Static assets
│   ├── css/        # Original CSS files
│   ├── fonts/      # Font files
│   ├── images/     # Image assets
│   ├── js/         # JavaScript files
│   └── media/      # Video files
└── data/           # Data files
```

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## What's Included

✅ Next.js 14 with App Router
✅ TypeScript
✅ Original CSS files preserved
✅ All assets (images, fonts, videos, JS)
✅ React components for all sections
✅ Responsive design
✅ Mobile menu
✅ Search functionality
✅ Product grid with hover effects
✅ Video backgrounds

## Next Steps

1. Customize product data in `data/products.ts`
2. Add backend API integration
3. Implement cart functionality
4. Add product detail pages
5. Implement search backend
6. Add internationalization (i18n)

## Troubleshooting

### Port already in use
Change port: `npm run dev -- -p 3001`

### Images not loading
Check that images exist in `public/images/`

### CSS not applying
Verify CSS files are in `public/css/` and imported in `globals.css`

### Build errors
Clear cache: `rm -rf .next` (Linux/Mac) or `rmdir /s .next` (Windows)

## Support

See `README.md` for detailed documentation.
See `MIGRATION_NOTES.md` for migration details.

