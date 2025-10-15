# 🎭 Poitou en Scène - Site Web Officiel

Site web officiel du festival **Poitou en Scène**, célébrant la culture et les arts traditionnels poitevins dans le cadre de Poitiers Capitale Européenne de la Culture 2026.

## 📋 À propos du projet

**Poitou en Scène** est une association artistique créée en 2024 qui organise un festival mettant en avant trois disciplines : la Danse, la Musique et le Chant traditionnels du Poitou. Le site web vise à promouvoir l'événement, informer le public et faciliter les inscriptions aux ateliers et spectacles.

### Identité visuelle

- **Palette de couleurs** :
  - Terracotta Deep : `#8C3B2F`
  - Indigo Night : `#1E3250`
  - Golden Thread : `#D8A24A`
  - Warm Cream : `#F6EFE6`
  - Slate Gray : `#59606A`

- **Typographie** :
  - Titres : Playfair Display (serif)
  - Corps de texte : Inter (sans-serif)

## 🏗️ Structure du projet

```
proto_2/
├── index.html              # Page d'accueil
├── programme.html          # Page programme du festival
├── a-propos.html          # Page à propos
├── contact.html           # Page contact
├── assets/
│   ├── css/
│   │   ├── variables.css   # Variables CSS (couleurs, typographie, espacements)
│   │   ├── reset.css       # Reset/normalisation CSS
│   │   ├── grid.css        # Système de grille responsive 12 colonnes
│   │   ├── utilities.css   # Classes utilitaires
│   │   ├── components.css  # Composants réutilisables
│   │   └── main.css        # Styles principaux
│   ├── js/
│   │   ├── navigation.js   # Gestion navigation et menu mobile
│   │   ├── calendar.js     # Calendrier interactif
│   │   ├── filters.js      # Système de filtres
│   │   └── main.js         # Script principal
│   ├── images/            # Images du site
│   ├── fonts/             # Fichiers de polices
│   └── icons/             # Icônes SVG
├── QA_PROJET.md           # Questions/Réponses projet
├── ROADMAP.md             # Feuille de route du développement
└── README.md              # Ce fichier
```

## 🚀 Installation et utilisation

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local pour le développement (optionnel mais recommandé)

### Lancement en local

**Option 1 : Avec Python (recommandé)**
```bash
# Python 3
cd proto_2
python -m http.server 8000

# Ouvrir http://localhost:8000 dans le navigateur
```

**Option 2 : Avec Node.js**
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
cd proto_2
http-server -p 8000

# Ouvrir http://localhost:8000 dans le navigateur
```

**Option 3 : Avec Live Server (VS Code)**
- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

## 🎨 Conventions de code

### Nomenclature CSS (BEM)

Le projet utilise la méthodologie **BEM** (Block Element Modifier) pour une meilleure organisation du CSS :

```css
/* Block */
.card {}

/* Element */
.card__title {}
.card__image {}

/* Modifier */
.card--featured {}
.card__title--large {}
```

### Nommage des fichiers

- HTML : `kebab-case.html` (ex: `a-propos.html`)
- CSS : `kebab-case.css` (ex: `variables.css`)
- JavaScript : `camelCase.js` (ex: `navigation.js`)
- Images : `kebab-case.jpg/png/svg` (ex: `hero-image.jpg`)

## 📝 Modification du contenu

### Changer les couleurs

Modifier les variables CSS dans `assets/css/variables.css` :
```css
:root {
  --color-terracotta: #8C3B2F;
  --color-indigo: #1E3250;
  /* ... */
}
```

### Ajouter un événement au programme

Éditer `programme.html` et ajouter une nouvelle card événement dans la structure appropriée.

### Modifier les informations de contact

Éditer `contact.html` et mettre à jour les informations dans la section contact.

## 🌐 Déploiement

### GitHub Pages

1. Pousser le code sur GitHub
2. Aller dans Settings → Pages
3. Sélectionner la branche `main` et le dossier `/proto_2`
4. Le site sera disponible sur `https://username.github.io/site_asso/proto_2/`

### Netlify

1. Créer un compte sur Netlify
2. Glisser-déposer le dossier `proto_2`
3. Le site sera déployé automatiquement

### Serveur classique (OVH, etc.)

1. Uploader tous les fichiers via FTP
2. Configurer le domaine pour pointer vers le dossier
3. Activer HTTPS

## ✅ Standards et accessibilité

Le site respecte :
- **WCAG 2.1 niveau AA** pour l'accessibilité
- **HTML5 sémantique** (header, nav, main, section, footer, etc.)
- **Validation W3C** HTML et CSS
- **Responsive design** (mobile-first)
- **Performance** : Score Lighthouse > 90

## 🤝 Contribution

### Pour contribuer au projet :

1. Lire la ROADMAP.md pour comprendre la structure
2. Respecter les conventions de code (BEM, nommage)
3. Tester sur plusieurs navigateurs
4. Valider le HTML/CSS (W3C validator)
5. Vérifier l'accessibilité (axe DevTools)

## 📞 Contact

**Association Poitou en Scène**  
📧 Email : contact@poitou-en-scene.fr  
📍 Adresse : 36 rue Victor Hugo, 86000 Poitiers  
🌐 Réseaux : Facebook | Instagram

## 📄 Licence

© 2025 Association Poitou en Scène - Tous droits réservés

---

**Version** : 1.0  
**Dernière mise à jour** : 15 octobre 2025  
**Commandité par** : Fondation du Patrimoine Pictavien
