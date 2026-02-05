# 📸 Guide d'intégration des images

## Structure des images

Toutes les images doivent être placées dans le dossier `public/images/` :

```
public/images/
├── hero.jpg                      # Image héro de la page d'accueil
├── portrait.jpg                  # Portrait du photographe
└── [series-id]/                  # Dossiers pour chaque série
    ├── photo-1.jpg
    ├── photo-2.jpg
    └── ...
```

## Comment ajouter vos photos

### 1. Image Héro (Page d'accueil)

1. Placez votre image principale dans `public/images/hero.jpg`
2. Format recommandé : JPG, minimum 1920x1080px
3. Aspect ratio idéal : 16:9 ou plus large
4. Fichier : `public/images/hero.jpg`

### 2. Portrait (Page About)

1. Placez votre portrait dans `public/images/portrait.jpg`
2. Format : JPG, minimum 1000x1000px
3. Aspect ratio : 1:1 (carré)
4. Fichier : `public/images/portrait.jpg`

### 3. Séries de Portfolio

#### Seoul Winter

- Chemin : `public/images/seoul-winter/`
- Photos : `photo-1.jpg`, `photo-2.jpg`, ... `photo-12.jpg`
- Aspect ratio : 4:5 (portrait)
- Nombre : 12 photos

#### Tokyo Nights

- Chemin : `public/images/tokyo-nights/`
- Photos : `photo-1.jpg` à `photo-15.jpg`
- Aspect ratio : 4:5 (portrait)
- Nombre : 15 photos

#### Urban Silence

- Chemin : `public/images/urban-silence/`
- Photos : `photo-1.jpg` à `photo-18.jpg`
- Aspect ratio : 4:5 (portrait)
- Nombre : 18 photos

#### Street Portraits

- Chemin : `public/images/street-portraits/`
- Photos : `photo-1.jpg` à `photo-20.jpg`
- Aspect ratio : 4:5 (portrait)
- Nombre : 20 photos

#### Climbing Culture

- Chemin : `public/images/climbing-culture/`
- Photos : `photo-1.jpg` à `photo-14.jpg`
- Aspect ratio : 4:5 (portrait)
- Nombre : 14 photos

## Optimisation des images

Pour les meilleures performances :

1. **Compression** : Utilisez TinyJPG.com ou ImageOptim
2. **Format** : JPG pour les photos (qualité 75-85%)
3. **Dimensions** : 
   - Images portrait (4:5) : ~1200px de large
   - Images héro (16:9) : ~2400px de large
   - Portrait carré (1:1) : ~1000px de côté

4. **Taille fichier** : Idéalement < 500KB par image

## Exemple de structure complète

```
public/images/
├── hero.jpg (1920x1080)
├── portrait.jpg (1000x1000)
├── seoul-winter/
│   ├── photo-1.jpg (1200x1500)
│   ├── photo-2.jpg (1200x1500)
│   └── ... (12 total)
├── tokyo-nights/
│   ├── photo-1.jpg (1200x1500)
│   └── ... (15 total)
└── ... autres séries
```

## Next.js Image Optimization

Le site utilise automatiquement l'optimisation Next.js qui :

- ✅ Convertit en WebP/AVIF pour les navigateurs modernes
- ✅ Redimensionne les images pour différentes résolutions
- ✅ Lazy-loading automatique des images hors écran
- ✅ Responsive images avec sizes attribute

Aucune action supplémentaire n'est nécessaire !

## Dépannage

**Les images ne s'affichent pas ?**
1. Vérifiez le chemin du fichier (sensible à la casse)
2. Assurez-vous que le fichier existe dans `public/images/`
3. Relancez le serveur dev : `npm run dev`

**Les images sont lentes ?**
1. Compressez davantage vos images (TinyJPG)
2. Vérifiez que les fichiers < 500KB
3. Utilisez le format JPG au lieu de PNG

**Changer le nombre de photos ?**
1. Éditez le compte en `src/app/portfolio/page.tsx`
2. Nommez les photos séquentiellement : `photo-1.jpg`, `photo-2.jpg`, etc.
3. Le site chargera automatiquement toutes les photos !
