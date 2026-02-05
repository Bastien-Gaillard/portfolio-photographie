# Images Directory Structure

## Portfolio Images

```
public/images/
├── hero.jpg                    # Hero image (1920x1080 or higher)
├── portrait.jpg                # Portrait photographer image
├── seoul-winter/
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ... (12 total)
├── tokyo-nights/
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ... (15 total)
├── urban-silence/
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ... (18 total)
├── street-portraits/
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ... (20 total)
└── climbing-culture/
    ├── photo-1.jpg
    ├── photo-2.jpg
    └── ... (14 total)
```

## Image Requirements

- **Format**: JPG/JPEG (optimized) or WebP
- **Quality**: High resolution (2000+ pixels on long side)
- **Aspect Ratio**: 
  - Hero: 16:9 or similar
  - Series photos: 4:5 (portrait)
  - Portrait: 1:1 (square)

## Optimization Tips

1. Use a tool like ImageOptim or TinyJPG to compress before adding
2. Next.js will automatically optimize using the Image component
3. WebP format preferred for better performance
4. Consider using a CDN for images in production

## Adding Photos

1. Place images in appropriate folder under `public/images/`
2. Name them as `photo-1.jpg`, `photo-2.jpg`, etc.
3. Images will be automatically served via Next.js Image optimization
4. Update the image count in portfolio series data if needed
