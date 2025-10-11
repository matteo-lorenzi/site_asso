# ROADMAP - Poitou en Scène Festival 2026

## Vue d'ensemble

Ce document présente la feuille de route du développement du site web pour le festival Poitou en Scène 2026. Le projet suit une approche progressive, privilégiant d'abord la solidité des fondations avant l'ajout de fonctionnalités avancées.

---

## Phase 1 : Fondations (Complétée)

### Objectifs
Établir la structure de base du site avec HTML et CSS, sans dépendances externes.

### Livrables
- [x] Architecture des dossiers (css, images, docs)
- [x] Page d'accueil HTML sémantique
- [x] Feuille de styles CSS avec charte graphique patrimoniale
- [x] Design responsive (mobile, tablette, desktop)
- [x] Navigation sticky fonctionnelle
- [x] Sections principales : Hero, À propos, Faits marquants, Programme, Lieu, Témoignages, Partenaires, CTA, Footer

### Résultats
Site statique fonctionnel avec identité visuelle cohérente.

---

## Phase 2 : Enrichissement du contenu (À venir)

### Objectifs
Compléter le site avec les pages secondaires et le contenu multimédia.

### Tâches prévues
- [ ] Créer la page Programme détaillé (programme.html)
- [ ] Créer la page Ateliers (ateliers.html)
- [ ] Créer la page À propos étendue (about.html)
- [ ] Créer la page Contact avec formulaire (contact.html)
- [ ] Ajouter les images authentiques (photos du festival, artistes, lieux)
- [ ] Intégrer une carte interactive réelle (Google Maps ou OpenStreetMap)
- [ ] Créer une page Mentions légales
- [ ] Créer une page FAQ
- [ ] Créer un Espace Presse

### Délai estimé
3-4 semaines

---

## Phase 3 : Interactivité JavaScript (À venir)

### Objectifs
Améliorer l'expérience utilisateur avec des interactions dynamiques légères.

### Fonctionnalités prévues
- [ ] Menu mobile hamburger responsive
- [ ] Galerie d'images interactive (lightbox)
- [ ] Animations au scroll (révélation progressive des sections)
- [ ] Carrousel de témoignages
- [ ] Filtre du programme par date/type d'événement
- [ ] Accordéon pour la FAQ
- [ ] Validation côté client du formulaire de contact

### Technologies
JavaScript vanilla (sans framework pour maintenir la légèreté)

### Délai estimé
2-3 semaines

---

## Phase 4 : Fonctionnalités avancées (À venir)

### Objectifs
Ajouter des fonctionnalités nécessitant une infrastructure backend.

### Fonctionnalités prévues
- [ ] Système d'inscription aux ateliers
- [ ] Réservation de billets en ligne
- [ ] Newsletter (intégration avec service d'emailing)
- [ ] Espace participant connecté
- [ ] Gestion du calendrier dynamique
- [ ] Formulaire de contact fonctionnel (envoi d'emails)
- [ ] Système de paiement sécurisé

### Technologies envisagées
- Backend : Node.js/Express ou PHP
- Base de données : MySQL ou PostgreSQL
- API de paiement : Stripe ou PayPal
- Service email : SendGrid ou Mailchimp

### Délai estimé
6-8 semaines

---

## Phase 5 : Optimisation et SEO (À venir)

### Objectifs
Améliorer les performances et la visibilité du site.

### Tâches prévues
- [ ] Optimisation des images (compression, formats modernes WebP)
- [ ] Minification CSS et JavaScript
- [ ] Mise en cache des ressources
- [ ] Optimisation du temps de chargement
- [ ] Métadonnées SEO complètes
- [ ] Schema.org pour les événements
- [ ] Fichier sitemap.xml
- [ ] Fichier robots.txt
- [ ] Accessibilité WCAG 2.1 niveau AA
- [ ] Tests multi-navigateurs

### Outils
- Google Lighthouse
- PageSpeed Insights
- WAVE (Web Accessibility Evaluation Tool)

### Délai estimé
2-3 semaines

---

## Phase 6 : Maintenance et évolution (Continue)

### Objectifs
Assurer la pérennité et l'évolution du site.

### Actions récurrentes
- [ ] Mise à jour régulière du contenu
- [ ] Suivi des statistiques (Google Analytics)
- [ ] Corrections de bugs
- [ ] Ajustements selon les retours utilisateurs
- [ ] Mise à jour du programme et des événements
- [ ] Archivage des éditions précédentes
- [ ] Veille technologique et mises à jour de sécurité

### Fréquence
Hebdomadaire pour le contenu, mensuelle pour la maintenance technique

---

## Jalons critiques

| Date cible | Jalon | Status |
|------------|-------|--------|
| Novembre 2024 | Phase 1 - Site de base | Complété |
| Décembre 2024 | Phase 2 - Contenu complet | Planifié |
| Janvier 2025 | Phase 3 - Interactivité JS | Planifié |
| Mars 2025 | Phase 4 - Fonctionnalités backend | Planifié |
| Avril 2025 | Phase 5 - Optimisation | Planifié |
| Mai 2025 | Lancement officiel | Objectif |
| Mai 2025 - 2026 | Maintenance continue | Objectif |

---

## Risques identifiés

### Techniques
- **Risque** : Complexité de l'intégration du système de réservation
  - **Mitigation** : Évaluer des solutions SaaS existantes (Eventbrite, Billetweb)

- **Risque** : Performances sur mobile avec images haute résolution
  - **Mitigation** : Implémenter lazy loading et formats responsive

### Organisationnels
- **Risque** : Disponibilité du contenu (photos, textes)
  - **Mitigation** : Planifier séances photo et rédaction en amont

- **Risque** : Budget limité pour l'hébergement et les services
  - **Mitigation** : Privilégier solutions open source et hébergement mutualisé

---

## Évolutions futures possibles

- Application mobile progressive (PWA)
- Version multilingue (anglais, espagnol)
- Streaming en direct des concerts
- Boutique en ligne (merchandising)
- Forum communautaire
- Blog culturel sur les arts poitevins
- Plateforme de partage de médias (photos/vidéos des participants)

---

**Dernière mise à jour** : Novembre 2024  
**Responsable** : Équipe de développement Poitou en Scène
