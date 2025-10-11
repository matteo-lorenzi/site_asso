# Poitou en Scène Festival 2026

Site web officiel du festival Poitou en Scène 2026, dédié à la valorisation et à la transmission du patrimoine artistique poitevin à travers le chant, la musique et la danse traditionnels.

## Description du projet

Poitou en Scène est une association créée en 2024 qui organise un festival culturel annuel à Poitiers et ses alentours. Le festival propose des ateliers pédagogiques, des concerts professionnels, des expositions et des événements communautaires célébrant les arts anciens du Poitou.

Ce site web constitue la vitrine numérique du festival, permettant au public de découvrir la programmation, de s'inscrire aux ateliers et de réserver des places pour les événements.

## Technologies utilisées

### Phase actuelle (v1.0)
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Stylisation avec variables CSS, Flexbox et Grid
- **Aucune dépendance externe** : Site statique pur

### Phases futures
- JavaScript vanilla pour l'interactivité
- Backend (Node.js ou PHP) pour les fonctionnalités avancées
- Intégration de services tiers (paiement, emailing, cartographie)

## Structure du projet

```
site_asso/
│
├── index.html              # Page d'accueil
├── css/
│   └── styles.css         # Feuille de styles principale
├── images/                # Ressources visuelles (à compléter)
├── docs/                  # Documentation additionnelle
├── ROADMAP.md            # Feuille de route du développement
└── README.md             # Ce fichier
```

## Charte graphique

### Palette de couleurs

Le site utilise une palette inspirée du patrimoine poitevin :

- **Ocre** : `#C9976D` - Couleur principale, évoque la pierre et la tradition
- **Bordeaux** : `#6B2737` - Couleur d'accent, pour les titres et éléments importants
- **Vert patiné** : `#7A8B7F` - Couleur tertiaire, rappelant la nature et l'authenticité
- **Crème** : `#F5F1E8` - Fond principal, douceur et lisibilité
- **Blanc** : `#FFFFFF` - Sections alternées pour la respiration visuelle

### Typographie

- **Titres** : Playfair Display (serif élégante, traditionnelle)
- **Corps de texte** : Open Sans (sans-serif moderne, lisible)

Cette combinaison assure un équilibre entre tradition et modernité, reflétant l'esprit du festival.

## Sections de la page d'accueil

1. **Navigation** : Menu sticky avec liens d'ancrage
2. **Hero** : Bannière immersive avec titre, sous-titre et boutons d'action
3. **À propos** : Présentation de l'association et de sa mission
4. **Faits marquants** : 4 points clés de l'édition 2026
5. **Programme** : Aperçu des prochains événements avec dates
6. **Lieu** : Carte interactive (placeholder) et informations logistiques
7. **Témoignages** : Citations de participants et artistes
8. **Partenaires** : Logos des soutiens institutionnels
9. **CTA** : Appels à l'action pour inscription et réservation
10. **Footer** : Contact, navigation secondaire, réseaux sociaux

## Principes de conception

### Accessibilité
- Structure HTML sémantique (header, nav, section, article, footer)
- Contraste de couleurs respectant les normes WCAG
- Navigation au clavier possible
- Textes alternatifs pour les images (à compléter)

### Responsive Design
- Mobile-first approach
- Points de rupture : 480px, 768px, 1200px
- Grilles flexibles avec CSS Grid et Flexbox
- Images adaptatives

### Performance
- CSS vanilla sans framework (poids minimal)
- Aucune bibliothèque JavaScript dans la v1.0
- Structure optimisée pour le chargement rapide

### Professionnalisme
- Design sobre et élégant
- Mise en page aérée avec espaces généreux
- Cohérence visuelle sur toutes les sections
- Absence d'éléments non professionnels

## Installation et utilisation

### Prérequis
- Aucun : le site est entièrement statique
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)

### Lancement local
1. Cloner ou télécharger le projet
2. Ouvrir `index.html` dans un navigateur web
3. Ou utiliser un serveur local (optionnel) :
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec PHP
   php -S localhost:8000
   
   # Avec Node.js (http-server)
   npx http-server
   ```
4. Accéder à `http://localhost:8000` dans le navigateur

### Déploiement
Le site peut être hébergé sur n'importe quel serveur web statique :
- GitHub Pages
- Netlify
- Vercel
- Serveur Apache/Nginx classique

## Points importants

### Contenu à compléter
- **Images** : Ajouter les photos réelles du festival, des artistes et des lieux
- **Carte interactive** : Intégrer Google Maps ou OpenStreetMap avec les emplacements réels
- **Logos partenaires** : Remplacer les placeholders par les logos officiels
- **Coordonnées** : Compléter l'adresse, téléphone et email réels

### Évolutions prioritaires
1. Création des pages secondaires (Programme complet, Ateliers, Contact)
2. Formulaire de contact fonctionnel
3. Système d'inscription aux ateliers
4. Réservation de billets en ligne

Consulter `ROADMAP.md` pour le détail complet des phases de développement.

### Maintenance
- Mise à jour régulière du programme et des événements
- Ajout de nouveaux témoignages au fil des éditions
- Actualisation des informations partenaires

## Valeurs du projet

Le développement de ce site respecte les valeurs de l'association :

- **Inclusion** : Site accessible à tous, design responsive
- **Partage** : Code propre et documenté pour faciliter la collaboration
- **Proximité** : Interface intuitive, navigation fluide
- **Qualité** : Code professionnel, rendu soigné

## Contact

**Poitou en Scène**  
Association culturelle  
12 Rue de la Culture  
86000 Poitiers

Email : contact@poitouenscene.fr  
Téléphone : 05 49 XX XX XX

## Licence

Ce projet est développé pour l'association Poitou en Scène.  
Tous droits réservés - 2024-2026
