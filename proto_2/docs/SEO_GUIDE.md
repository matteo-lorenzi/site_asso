# 🔍 Guide SEO - Poitou en Scène

## ✅ Optimisations Mises en Place

### 1. Fichiers Techniques SEO

#### sitemap.xml
- ✅ **Créé** : Sitemap XML avec 4 URLs principales
- 📍 Priorités définies : Homepage (1.0), Programme (0.9), À Propos (0.8), Contact (0.7)
- 🔄 Fréquences de mise à jour : weekly pour Programme, monthly pour les autres
- 📅 Dates de dernière modification incluses

#### robots.txt
- ✅ **Créé** : Permet l'indexation complète par tous les moteurs
- 🔗 Référence le sitemap.xml
- 🚫 Bloque les fichiers système non pertinents (.json, /fonts/)
- ⏱️ Crawl-delay: 1 seconde (éviter surcharge)

#### manifest.json
- ✅ **Créé** : Manifest PWA complet
- 📱 Support multi-appareil (192×192, 512×512, Apple Touch)
- 🎨 Couleurs de thème définies (Terracotta #8C3B2F)
- 🌐 Métadonnées complètes (nom, description, catégories)

### 2. Structured Data (JSON-LD)

#### index.html - Organization Schema
```json
{
  "@type": "Organization",
  "name": "Poitou en Scène",
  "contactPoint": {...},
  "address": {...}
}
```

#### programme.html - Festival Schema
```json
{
  "@type": "Festival",
  "startDate": "2026-06-19",
  "endDate": "2026-06-21",
  "location": {...},
  "performer": [...]
}
```

#### a-propos.html - AboutPage Schema
```json
{
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "foundingDate": "2010"
  }
}
```

#### contact.html - ContactPage Schema
```json
{
  "@type": "ContactPage",
  "contactPoint": {...}
}
```

### 3. Meta Tags Optimisés

#### Chaque page contient :
- ✅ Meta description unique (150-160 caractères)
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URL (à ajouter en production)
- ✅ Meta keywords (secondaire pour SEO moderne)
- ✅ Lang="fr" sur balise HTML

### 4. Favicons Multi-formats

#### Formats créés :
- ✅ `favicon.svg` - Vectoriel, scalable
- ⏳ `favicon-16.png` - À générer (16×16)
- ⏳ `favicon-32.png` - À générer (32×32)
- ⏳ `apple-touch-icon.png` - À générer (180×180)
- ⏳ `favicon-192.png` - À générer (192×192, Android)
- ⏳ `favicon-512.png` - À générer (512×512, Android)

**Note** : Générer les PNG à partir du SVG avec un outil comme ImageMagick ou un éditeur graphique.

### 5. Performance

#### Lazy Loading
- ✅ Script `lazy-loading.js` créé avec Intersection Observer
- 🖼️ Fade-in animation au chargement
- 🎯 Preload des images critiques (hero)
- 🔧 Fallback pour navigateurs anciens

#### Compression & Cache (.htaccess)
- ✅ GZIP compression activée (HTML, CSS, JS, SVG, fonts)
- ⏱️ Browser caching configuré :
  - Images : 1 an
  - CSS/JS : 1 mois
  - HTML : 1 heure
  - Fonts : 1 an
- 🔒 Headers de sécurité ajoutés

### 6. Sécurité Headers (.htaccess)

- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `X-Frame-Options: SAMEORIGIN`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy` restrictive

---

## 📋 Checklist SEO Post-Déploiement

### À faire après mise en ligne

#### Google Search Console
- [ ] Créer un compte Google Search Console
- [ ] Vérifier la propriété du site (méthode HTML file ou DNS)
- [ ] Soumettre le sitemap.xml (`https://poitou-en-scene.fr/sitemap.xml`)
- [ ] Vérifier l'indexation des pages
- [ ] Corriger les erreurs d'exploration éventuelles

#### Google Analytics (optionnel)
- [ ] Créer une propriété Google Analytics 4
- [ ] Ajouter le script de tracking dans toutes les pages
- [ ] Configurer les événements personnalisés (formulaire contact, clics CTA)

#### Bing Webmaster Tools
- [ ] Créer un compte Bing Webmaster
- [ ] Soumettre le sitemap
- [ ] Importer les données depuis Google Search Console

#### Tests de Performance
- [ ] **Lighthouse** (Chrome DevTools)
  - Objectif : Score > 90 en Performance, Accessibility, SEO
- [ ] **PageSpeed Insights** (Google)
  - Vérifier mobile + desktop
- [ ] **GTmetrix**
  - Vérifier temps de chargement < 3 secondes

#### Tests SEO
- [ ] **Rich Results Test** (Google)
  - Vérifier que le JSON-LD est valide
  - URL : https://search.google.com/test/rich-results
- [ ] **Schema Markup Validator**
  - Tester chaque page individuellement
  
#### Tests Réseaux Sociaux
- [ ] **Facebook Sharing Debugger**
  - URL : https://developers.facebook.com/tools/debug/
  - Vérifier les aperçus Open Graph
- [ ] **Twitter Card Validator**
  - URL : https://cards-dev.twitter.com/validator
  - Vérifier les Twitter Cards

#### Accessibilité
- [ ] **WAVE** (WebAIM)
  - Vérifier conformité WCAG 2.1 AA
- [ ] **axe DevTools** (extension navigateur)
  - Scanner toutes les pages

---

## 🎯 Mots-clés Ciblés

### Primaires
- "festival Poitiers 2026"
- "Poitou en Scène"
- "culture poitevine"
- "arts de la scène Poitiers"

### Secondaires
- "théâtre Poitiers"
- "danse traditionnelle Poitou"
- "musique poitevine"
- "festival culturel Nouvelle-Aquitaine"
- "Poitiers capitale européenne culture 2026"

### Longue traîne
- "ateliers danse enfants Poitiers"
- "concerts musique traditionnelle Vienne"
- "bénévolat festival culturel Poitiers"
- "programme festival Poitou juin 2026"

---

## 📊 KPIs SEO à Suivre

### Trafic
- **Sessions organiques** (Google Analytics)
  - Objectif mois 1 : 500 sessions
  - Objectif mois 3 : 2000 sessions
  - Objectif mois 6 : 5000 sessions

### Positionnement
- **Top 3** pour "Poitou en Scène" (marque)
- **Top 10** pour "festival Poitiers 2026"
- **Top 20** pour "arts de la scène Poitiers"

### Engagement
- **Taux de rebond** < 60%
- **Pages par session** > 2.5
- **Durée moyenne session** > 2 minutes

### Conversions
- **Formulaire contact** : 5% des visiteurs
- **Clics "Réserver"** : 10% des visiteurs
- **Téléchargements programme PDF** (si ajouté)

---

## 🚀 Optimisations Futures (Phase V2)

### Contenu
- [ ] Blog / Actualités (SEO éditorial)
- [ ] Pages artistes avec biographies
- [ ] Galerie photos événements précédents
- [ ] Témoignages participants (contenu UGC)
- [ ] FAQ détaillée

### Technique
- [ ] Passer en HTTPS (certificat SSL)
- [ ] Implémenter AMP pour mobile
- [ ] Service Worker pour fonctionnement offline
- [ ] Optimiser images en WebP
- [ ] Lazy load des iframes (carte OpenStreetMap)

### Link Building
- [ ] Partenariats avec sites culturels locaux
- [ ] Articles invités sur blogs Nouvelle-Aquitaine
- [ ] Communiqués de presse médias régionaux
- [ ] Inscription annuaires événements culturels

### Local SEO
- [ ] Google My Business (si lieu physique)
- [ ] Schema LocalBusiness
- [ ] Citations NAP (Name, Address, Phone) cohérentes
- [ ] Avis Google (encourager participants)

---

## 📝 Notes Importantes

### URL Structure
```
https://poitou-en-scene.fr/           → Accueil
https://poitou-en-scene.fr/programme.html  → Programme
https://poitou-en-scene.fr/a-propos.html   → À Propos
https://poitou-en-scene.fr/contact.html    → Contact
```

**Recommandation future** : Passer à des URLs sans extension (.html) via réécriture Apache.

### Domaine
- **Actuel** : poitou-en-scene.fr (simulé)
- **À acheter** : Vérifier disponibilité et acheter avant déploiement
- **Alternative** : poitouenscene.fr (sans tirets)

### Hébergement
Critères pour le choix :
- ✅ Support HTTPS gratuit (Let's Encrypt)
- ✅ .htaccess supporté (Apache)
- ✅ Bande passante suffisante (images)
- ✅ Support HTTP/2
- ✅ Localisation serveur France (latence)

**Recommandations** :
1. **OVH** (français, fiable, pas cher)
2. **Netlify** (gratuit, HTTPS auto, CDN mondial)
3. **GitHub Pages** (gratuit, simple, bon pour projets statiques)

---

## ✅ Statut Actuel

**Phase 5.2 - Optimisation & SEO** : ✅ 80% complète

### Complétés
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ manifest.json
- ✅ favicon.svg
- ✅ JSON-LD structuré (4 pages)
- ✅ Meta tags optimisés
- ✅ lazy-loading.js
- ✅ .htaccess complet
- ✅ Guide SEO (ce document)

### Restants
- ⏳ Générer favicons PNG multi-tailles
- ⏳ Tester avec Lighthouse
- ⏳ Validation W3C HTML/CSS
- ⏳ Audit accessibilité WCAG

**Prochaine étape** : Phase 5.3 - Tests & Validation
