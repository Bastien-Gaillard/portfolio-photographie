# 🚀 Guide de démarrage rapide

## ✅ Votre site est prêt !

Voici ce qui a été créé :

### 🏠 Pages

- **Home** (`/`) - Page d'accueil avec image héro
- **Portfolio** (`/portfolio`) - Grille des séries
- **Séries** (`/portfolio/[series]`) - Détails avec galerie
- **About** (`/about`) - À propos du photographe
- **Contact** (`/contact`) - Formulaire de contact + réseaux sociaux
- **Navigation fixe** - Header responsive avec menu mobile

### 🎨 Design

✨ Minimaliste, cinématique, haut de gamme
- Typographie élégante : Playfair Display + Inter
- Design invisible, images au centre
- Responsive mobile & desktop
- Transitions douces et subtiles

### 🖼️ Images

Le site utilise des images **réelles** (composant Next.js Image) :

1. **Image héro** : `public/images/hero.jpg`
2. **Portrait** : `public/images/portrait.jpg`
3. **Séries** : Dossiers `public/images/[series-id]/photo-*.jpg`

## 🎯 Prochaines étapes

### 1. Ajouter vos photos (Priorité 1)

```bash
# Créez les dossiers (déjà fait)
# Ajoutez vos images JPG dans :
public/images/hero.jpg
public/images/portrait.jpg
public/images/seoul-winter/photo-{1-12}.jpg
public/images/tokyo-nights/photo-{1-15}.jpg
public/images/urban-silence/photo-{1-18}.jpg
public/images/street-portraits/photo-{1-20}.jpg
public/images/climbing-culture/photo-{1-14}.jpg
```

📖 Lire [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) pour les spécifications

### 2. Personnaliser le contenu (Priorité 2)

- **Contact** : `src/app/contact/page.tsx`
  - Email
  - Instagram/Twitter links
  
- **À propos** : `src/app/about/page.tsx`
  - Bio du photographe
  - Équipement technique

- **Portfolio** : `src/app/portfolio/page.tsx`
  - Descriptions des séries
  - Titres et taglines

### 3. Déployer en ligne (Priorité 3)

```bash
# Vercel (recommandé)
npm install -g vercel
vercel

# Ou votre hébergeur préféré
# Next.js génère automatiquement une build statique
npm run build
```

## 📚 Fichiers clés

```
src/
├── app/
│   ├── page.tsx              ← Home avec image héro
│   ├── portfolio/page.tsx    ← Grille des séries
│   ├── portfolio/[series]/   ← Détail série + galerie
│   ├── about/page.tsx        ← À propos
│   ├── contact/page.tsx      ← Contact
│   ├── layout.tsx            ← Layout racine
│   └── globals.css           ← Styles globaux
└── components/
    ├── Header.tsx            ← Navigation
    ├── Footer.tsx            ← Pied de page
    └── ImageGrid.tsx         ← Grille images optimisée

public/images/               ← Vos photos vont ici !
```

## 🛠️ Commandes

```bash
# Développement (avec live reload)
npm run dev
# Visitez http://localhost:3000

# Compilation (vérifier les erreurs)
npm run build

# Production
npm run start

# Linting
npm run lint
```

## ✨ Fonctionnalités incluses

- ✅ Images Next.js optimisées (WEBP/AVIF)
- ✅ Responsive design (mobile-first)
- ✅ Navigation fixe avec menu mobile
- ✅ Formulaire contact (logs en console, à intégrer)
- ✅ TypeScript pour la type-safety
- ✅ Tailwind CSS pour les styles
- ✅ SEO-friendly
- ✅ Footer avec liens sociaux

## 🚨 Important

**Avant de déployer** :

1. ✅ Vérifier que vous avez des images dans `public/images/`
2. ✅ Tester en local : `npm run dev`
3. ✅ Vérifier mobile + desktop
4. ✅ Intégrer le backend pour le formulaire contact
5. ✅ Ajouter votre domaine personnalisé

## 📞 Support

- Consulter [README.md](./README.md) pour l'architecture complète
- Consulter [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) pour les images
- Consulter [.github/copilot-instructions.md](./.github/copilot-instructions.md) pour les guidelines de développement

---

**Bon courage pour vos photos ! 📸** ✨
