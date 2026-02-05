# Bastien Gaillard | Street & Travel Photography Portfolio

A minimaliste, cinematic portfolio website for street and travel photographer Bastien Gaillard.

## 🎯 Project Overview

This is a high-end, minimalist portfolio website showcasing cinematic urban photography. The design prioritizes the images as the centerpiece, with invisible, elegant, and modern UI elements.

## 🎨 Design Philosophy

- **Minimaliste**: Clean, airy design with plenty of whitespace
- **Cinematic**: Dark, moody aesthetic capturing urban atmosphere
- **Haut de gamme**: Premium, professional presentation
- **Image-first**: Design disappears behind the photography
- **Zero distractions**: No carousels, animations, or heavy text blocks

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Header navigation
│   ├── page.tsx             # Home page with hero section
│   ├── globals.css          # Global styles
│   ├── portfolio/
│   │   ├── page.tsx         # Portfolio grid listing all series
│   │   └── [series]/
│   │       └── page.tsx     # Individual series with image grid
│   ├── about/
│   │   └── page.tsx         # About page with photographer bio
│   └── contact/
│       └── page.tsx         # Contact page with form & social links
└── components/
    └── Header.tsx           # Navigation header component
```

## 📸 Portfolio Series

- **Seoul Winter** - Cold, urban, atmospheric ambiance (12 images)
- **Tokyo Nights** - Lights, night, urban solitude (15 images)
- **Urban Silence** - Architecture + small human figures (18 images)
- **Street Portraits** - Natural portraits in context (20 images)
- **Climbing Culture** - Climbing, bodies, textures, gestures (14 images)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm
- **Your photography images** (see [IMAGE_GUIDE.md](./IMAGE_GUIDE.md))

### Installation

```bash
# Install dependencies
npm install

# Add your images to public/images/ (see IMAGE_GUIDE.md)

# Run development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

See [QUICK_START.md](./QUICK_START.md) for next steps.

## 📝 Customization

### Adding Photography

1. **Read [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** - Complete guide for image integration
2. Place your images in:
   - Hero: `public/images/hero.jpg`
   - Portrait: `public/images/portrait.jpg`
   - Series: `public/images/[series-id]/photo-{1-N}.jpg`

Images are automatically optimized using Next.js Image component:
- ✅ Converts to WebP/AVIF for modern browsers
- ✅ Lazy loading out of viewport
- ✅ Responsive images
- ✅ Automatic resizing

**Performance**: Images < 500KB recommended

### Contact Information

Update in `src/app/contact/page.tsx`:
- Email: `contact@bastiengaillard.com`
- Instagram: `https://instagram.com/bastiengaillard`
- Twitter: `https://twitter.com/bastiengaillard`

### Adding New Series

Edit series data in `src/app/portfolio/page.tsx` and `src/app/portfolio/[series]/page.tsx`:
- Add to the series array
- Update image count
- Add images to `public/images/[series-id]/`
- The dynamic route handles the rest automatically

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (light weight)
- **Body**: Inter (regular weight)
- **Size Scale**: Responsive (sm: mobile, lg: desktop)

### Colors
- **Background**: White (#ffffff)
- **Text**: Black (#000000)
- **Accents**: Grays (used subtly)
- **Borders**: Thin black lines (#000000)

### Spacing
- Large, breathing whitespace throughout
- Consistent padding/margins (px-6 lg:px-12)
- Vertical rhythm maintained

## 🔍 SEO & Meta

- Optimized meta titles & descriptions
- Semantic HTML structure
- Mobile-responsive design
- Fast load times

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile navigation drawer
- Image grids adapt to screen size

## 🌐 Deployment

Build for production:

```bash
npm run build
npm run start
```

Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

## 📄 License

This portfolio is custom-built for Bastien Gaillard. All photography rights reserved.

## 💡 Future Enhancements

- [ ] Image optimization & lazy loading
- [ ] Light/dark mode toggle
- [ ] Image lightbox viewer
- [ ] Blog section for photography stories
- [ ] Analytics integration
- [ ] Email form backend integration
- [ ] Instagram feed integration
