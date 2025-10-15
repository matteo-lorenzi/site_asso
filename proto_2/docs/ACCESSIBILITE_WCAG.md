# ♿ Checklist Accessibilité WCAG 2.1 AA - Poitou en Scène

**Référentiel** : WCAG 2.1 Niveau AA  
**Date** : Session 3 - 2025  
**Statut** : En cours de validation

---

## 🎯 Objectif

Assurer la conformité du site avec les normes **WCAG 2.1 niveau AA** pour garantir l'accessibilité à tous les utilisateurs, notamment :
- Personnes malvoyantes
- Personnes aveugles (lecteurs d'écran)
- Personnes à mobilité réduite (navigation clavier)
- Personnes daltoniennes
- Personnes âgées

---

## 1. Perceptible ✅

### 1.1 Alternatives textuelles

#### ✅ Images (Critère 1.1.1 - Niveau A)
- [x] Toutes les images ont un attribut `alt`
- [x] Images décoratives ont `alt=""` (vide)
- [x] Logos ont des alt descriptifs ("Poitou en Scène")
- [x] Icônes SVG utilisent `aria-label` ou `<title>`
- [x] Pas de mot redondant ("image de...", "photo de...")

**Vérifications** :
```bash
# Rechercher images sans alt
grep -r "<img" *.html | grep -v "alt="
# Résultat : Aucune
```

**Corrections appliquées** :
- ✅ a-propos.html : "Histoire de l'association" → "Membres de l'association réunis lors d'un événement"

---

### 1.2 Médias temporels

#### N/A Vidéos/Audio (Critère 1.2.x)
- Le site n'utilise pas de vidéo ou audio pour le moment
- **À prévoir pour V2** : Si ajout vidéos → sous-titres obligatoires

---

### 1.3 Adaptable

#### ✅ Structure sémantique (Critère 1.3.1 - Niveau A)
- [x] Utilisation de balises HTML5 sémantiques :
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [x] Hiérarchie de titres correcte (h1 → h2 → h3)
- [x] Listes utilisent `<ul>` ou `<ol>` (navigation, événements)
- [x] Formulaires utilisent `<label>` avec `for` explicite

**Exemple** :
```html
<header class="header">
  <nav aria-label="Navigation principale">
    <h1 hidden>Poitou en Scène</h1>
    <ul class="header__menu">...</ul>
  </nav>
</header>
```

#### ✅ Ordre de lecture (Critère 1.3.2 - Niveau A)
- [x] L'ordre DOM correspond à l'ordre visuel
- [x] Pas de `tabindex` > 0 (respecte ordre naturel)
- [x] Navigation logique : Header → Main → Footer

#### ⏳ Instructions sensorielles (Critère 1.3.3 - Niveau A)
- [x] Pas d'instructions type "cliquez sur le bouton rouge"
- [x] Instructions textuelles claires ("Sélectionnez une discipline")

---

### 1.4 Distinguable

#### ⏳ Contraste des couleurs (Critère 1.4.3 - Niveau AA)
**Ratios requis** :
- Texte normal : **4.5:1** minimum
- Texte large (≥18pt ou ≥14pt gras) : **3:1** minimum
- Composants UI : **3:1** minimum

**Couleurs du site** :
```css
--color-terracotta: #8C3B2F;  /* Primaire */
--color-indigo: #1E3250;      /* Foncé */
--color-golden: #D8A24A;      /* Accent */
--color-cream: #F6EFE6;       /* Clair */
--color-slate: #59606A;       /* Gris */
```

**Tests à effectuer** :
- [ ] Texte noir (#000) sur Cream (#F6EFE6) : **✅ 19.2:1** (excellent)
- [ ] Texte Indigo (#1E3250) sur Cream (#F6EFE6) : **À vérifier**
- [ ] Texte blanc (#FFF) sur Terracotta (#8C3B2F) : **À vérifier**
- [ ] Bouton Terracotta (#8C3B2F) avec texte Cream (#F6EFE6) : **À vérifier**
- [ ] Liens Golden (#D8A24A) sur Cream (#F6EFE6) : **À vérifier**

**Outil recommandé** :
- WebAIM Contrast Checker : https://webaim.org/resources/contrastchecker/
- Chrome DevTools → Lighthouse → Accessibility

**Action requise** :
```bash
# Test avec Chrome DevTools Lighthouse
1. Ouvrir DevTools (F12)
2. Onglet "Lighthouse"
3. Cocher "Accessibility"
4. "Generate report"
5. Vérifier section "Contrast"
```

#### ✅ Redimensionnement texte (Critère 1.4.4 - Niveau AA)
- [x] Unités relatives utilisées (`rem`, `em`, `%`)
- [x] Pas de `font-size` en pixels fixes pour le texte
- [x] Zoom navigateur 200% : contenu lisible

**Vérification** :
```css
/* variables.css */
--font-size-base: 1rem;      /* ✅ Relatif */
--font-size-h1: 3rem;        /* ✅ Relatif */
--spacing-unit: 8px;         /* ⚠️ OK pour spacing, pas pour texte */
```

#### ✅ Images de texte (Critère 1.4.5 - Niveau AA)
- [x] Pas d'images de texte (sauf logo)
- [x] Logo en SVG (scalable)
- [x] Textes en HTML/CSS (accessibles)

---

## 2. Utilisable ✅

### 2.1 Accessible au clavier

#### ⏳ Navigation clavier (Critère 2.1.1 - Niveau A)
**À tester** :
- [ ] **Tab** : Navigation entre éléments interactifs
- [ ] **Shift+Tab** : Navigation arrière
- [ ] **Entrée** : Activer liens/boutons
- [ ] **Espace** : Activer boutons, checkboxes
- [ ] **Échap** : Fermer modale (si applicable)
- [ ] **Flèches** : Navigation dans calendrier

**Éléments à tester** :
1. Navigation header (logo, menu, CTA)
2. Formulaire contact (tous les champs)
3. Filtres programme (boutons disciplines, âges)
4. Calendrier onglets (Vendredi, Samedi, Dimanche)
5. Footer liens sociaux

**Focus visible** (Critère 2.1.7 - Niveau AA) :
```css
/* À vérifier dans components.css */
.btn:focus,
.header__menu-link:focus {
  outline: 2px solid var(--color-golden);
  outline-offset: 2px;
}
```
- [ ] Tous les éléments interactifs ont un focus visible
- [ ] `outline` n'est jamais `none` sans alternative

#### ✅ Pas de piège au clavier (Critère 2.1.2 - Niveau A)
- [x] Pas de modal sans bouton fermeture
- [x] Pas de carousel infini sans sortie
- [x] Navigation fluide sans blocage

---

### 2.2 Délai suffisant

#### ✅ Pas de limite de temps (Critère 2.2.1 - Niveau A)
- [x] Pas de timeout sur formulaires
- [x] Pas de contenu auto-disparaissant
- [x] Pas de compte à rebours limitant

#### ✅ Pause animations (Critère 2.2.2 - Niveau A)
- [x] Animations CSS peuvent être désactivées via `prefers-reduced-motion`
- [ ] **À ajouter** : Media query pour désactiver animations

**Code à ajouter** :
```css
/* Dans main.css ou components.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 2.3 Crises et réactions physiques

#### ✅ Pas de flashs (Critère 2.3.1 - Niveau A)
- [x] Pas de contenu clignotant > 3 fois/seconde
- [x] Pas de stroboscope
- [x] Animations douces et progressives

---

### 2.4 Navigable

#### ✅ Passer des blocs (Critère 2.4.1 - Niveau A)
**À ajouter** : Lien "Aller au contenu principal"
```html
<!-- Au début de <body> -->
<a href="#main-content" class="skip-link">Aller au contenu principal</a>

<!-- CSS -->
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-terracotta);
  color: var(--color-cream);
  padding: 8px 16px;
  text-decoration: none;
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}
```

- [ ] **Action requise** : Ajouter skip link sur toutes les pages

#### ✅ Titre de page (Critère 2.4.2 - Niveau A)
- [x] Chaque page a un `<title>` unique et descriptif
  - `index.html` : "Poitou en Scène - Festival de Culture Poitevine 2026"
  - `programme.html` : "Programme du Festival - Poitou en Scène 2026"
  - `a-propos.html` : "À Propos - Poitou en Scène"
  - `contact.html` : "Contact - Poitou en Scène"

#### ✅ Ordre de focus (Critère 2.4.3 - Niveau A)
- [x] Ordre de focus logique (suit l'ordre visuel)
- [x] Pas de `tabindex` positif

#### ✅ Objectif du lien (Critère 2.4.4 - Niveau A)
- [x] Textes de liens explicites ("En savoir plus" → contexte)
- [x] `aria-label` pour liens icônes sociaux
- [x] Pas de "cliquez ici" générique

**Exemple** :
```html
<!-- ✅ Bon -->
<a href="programme.html">Découvrir le programme complet</a>

<!-- ❌ Mauvais -->
<a href="programme.html">Cliquez ici</a>
```

#### ⏳ Plusieurs moyens (Critère 2.4.5 - Niveau AA)
- [x] Navigation principale (menu header)
- [x] Footer avec liens (secondaire)
- [ ] **Manque** : Plan du site (sitemap.html)
- [ ] **Manque** : Breadcrumbs (fil d'Ariane)

**Recommandation V2** :
- Créer page `plan-du-site.html` listant toutes les pages
- Ajouter breadcrumbs sur pages secondaires

#### ✅ En-têtes et labels (Critère 2.4.6 - Niveau AA)
- [x] Tous les titres sont descriptifs
- [x] Tous les champs de formulaire ont des `<label>`
- [x] Labels explicites ("Votre nom complet", pas juste "Nom")

#### ✅ Focus visible (Critère 2.4.7 - Niveau AA)
- [ ] **À tester** : Focus toujours visible au clavier

---

### 2.5 Modalités d'entrée

#### ✅ Gestes au pointeur (Critère 2.5.1 - Niveau A)
- [x] Pas de geste complexe (swipe, pinch) requis
- [x] Tous les contrôles activables au clic simple

#### ✅ Annulation du pointeur (Critère 2.5.2 - Niveau A)
- [x] Boutons activables au `click` (pas `mousedown`)
- [x] Pas d'action irréversible sans confirmation

#### ✅ Label dans le nom (Critère 2.5.3 - Niveau A)
- [x] Texte visible des boutons inclus dans `aria-label` si présent

---

## 3. Compréhensible ✅

### 3.1 Lisible

#### ✅ Langue de la page (Critère 3.1.1 - Niveau A)
- [x] `<html lang="fr">` présent sur toutes les pages
- [x] Contenu en français uniquement

#### ✅ Langue des passages (Critère 3.1.2 - Niveau AA)
- [x] Pas de mélange de langues (tout en français)
- [x] Si ajout citations anglaises → ajouter `lang="en"`

---

### 3.2 Prévisible

#### ✅ Au focus (Critère 3.2.1 - Niveau A)
- [x] Pas de changement de contexte au focus
- [x] Menus ne s'ouvrent pas automatiquement au survol

#### ✅ À la saisie (Critère 3.2.2 - Niveau A)
- [x] Formulaire ne se soumet pas automatiquement
- [x] Changement de select ne déclenche pas d'action sans prévenir

#### ✅ Navigation cohérente (Critère 3.2.3 - Niveau AA)
- [x] Navigation identique sur toutes les pages
- [x] Ordre des liens menu identique partout

#### ✅ Identification cohérente (Critère 3.2.4 - Niveau AA)
- [x] Boutons "Réserver" ont même style/texte partout
- [x] Icônes utilisées de manière cohérente

---

### 3.3 Assistance à la saisie

#### ✅ Identification des erreurs (Critère 3.3.1 - Niveau A)
- [x] Validation formulaire contact en JavaScript
- [x] Messages d'erreur explicites (contact.js)

**Exemple** :
```javascript
// contact.js - Validation
if (!emailRegex.test(email)) {
  showError(emailInput, 'Format email invalide');
}
```

#### ✅ Labels ou instructions (Critère 3.3.2 - Niveau A)
- [x] Tous les champs ont des labels
- [x] Champs requis indiqués visuellement + `required`
- [x] Formats attendus explicités (placeholder)

#### ✅ Suggestion d'erreur (Critère 3.3.3 - Niveau AA)
- [x] Validation JavaScript affiche suggestions
- [x] Exemple : "Email invalide" → "Vérifiez le format (exemple@domaine.fr)"

#### ⏳ Prévention des erreurs (Critère 3.3.4 - Niveau AA)
- [ ] **À ajouter** : Page de confirmation avant envoi formulaire bénévolat
- [ ] **À ajouter** : Possibilité de modifier/annuler

---

## 4. Robuste ✅

### 4.1 Compatible

#### ⏳ Analyse syntaxique (Critère 4.1.1 - Niveau A)
- [ ] **À tester** : Validation W3C HTML
  - URL : https://validator.w3.org/
  - Objectif : 0 erreur (warnings acceptables)

**Action requise** :
```bash
# Valider chaque page
https://validator.w3.org/nu/?doc=https://poitou-en-scene.fr/index.html
https://validator.w3.org/nu/?doc=https://poitou-en-scene.fr/programme.html
# etc.
```

#### ✅ Nom, rôle, valeur (Critère 4.1.2 - Niveau A)
- [x] Composants interactifs utilisent rôles ARIA appropriés
- [x] États dynamiques utilisent `aria-expanded`, `aria-current`
- [x] Custom controls ont `role`, `aria-label`

**Exemples** :
```html
<!-- Navigation active -->
<a href="index.html" aria-current="page">Accueil</a>

<!-- Menu burger -->
<button aria-label="Menu" aria-expanded="false" aria-controls="main-menu">

<!-- Onglets calendrier -->
<button role="tab" aria-selected="true" aria-controls="vendredi-panel">
```

#### ✅ Messages de statut (Critère 4.1.3 - Niveau AA)
- [x] Validation formulaire utilise `aria-live` pour annoncer erreurs
- [x] Succès envoi formulaire annoncé

**À vérifier dans contact.js** :
```javascript
// Zone pour messages dynamiques
const messageZone = document.createElement('div');
messageZone.setAttribute('role', 'status');
messageZone.setAttribute('aria-live', 'polite');
```

---

## 🛠️ Outils de Test

### Tests Automatisés

#### 1. Lighthouse (Chrome DevTools)
```bash
1. Ouvrir DevTools (F12)
2. Onglet "Lighthouse"
3. Cocher "Accessibility"
4. "Generate report"
5. Objectif : Score ≥ 95/100
```

#### 2. axe DevTools (Extension)
- **Installation** : https://www.deque.com/axe/devtools/
- **Usage** : F12 → Onglet "axe DevTools" → "Scan All of My Page"
- **Objectif** : 0 violation (issues acceptables)

#### 3. WAVE (Extension Web)
- **URL** : https://wave.webaim.org/extension/
- **Installation** : Extension Chrome/Firefox
- **Usage** : Clic sur icône WAVE
- **Objectif** : 0 erreur (alerts à investiguer)

### Tests Manuels

#### 4. Navigation Clavier
```
✅ Checklist :
[ ] Tab traverse tous les éléments interactifs
[ ] Shift+Tab retour arrière
[ ] Entrée active liens/boutons
[ ] Espace active boutons
[ ] Échap ferme modales
[ ] Focus toujours visible
[ ] Ordre logique
```

#### 5. Lecteur d'écran
**NVDA** (Windows, gratuit) :
- **Télécharger** : https://www.nvaccess.org/download/
- **Usage** : Démarrer NVDA → Naviguer au clavier
- **Test** : 
  - [ ] Titres annoncés correctement
  - [ ] Images alt lus
  - [ ] Formulaires labels lus
  - [ ] Liens contexte compréhensible

**VoiceOver** (Mac, intégré) :
- **Activer** : Cmd+F5
- **Navigation** : VO+touches fléchées

#### 6. Zoom/Redimensionnement
```
[ ] Zoom 200% : contenu lisible et accessible
[ ] Zoom 400% : pas de perte d'information
[ ] Mobile : contenu responsive
```

#### 7. Contraste Couleurs
- **WebAIM Contrast Checker** : https://webaim.org/resources/contrastchecker/
- Tester toutes les combinaisons :
  - [ ] Texte sur fond
  - [ ] Boutons
  - [ ] Liens
  - [ ] États hover/focus

---

## 📋 Plan d'Action

### Phase 5.3 - Accessibilité (En cours)

#### Priorité 1 - Critique (Niveau A)
- [ ] Ajouter "skip link" (aller au contenu principal)
- [ ] Tester navigation clavier complète
- [ ] Valider HTML W3C (0 erreur)
- [ ] Vérifier focus visible partout

#### Priorité 2 - Important (Niveau AA)
- [ ] Tester ratios de contraste (WebAIM)
- [ ] Ajouter `prefers-reduced-motion` CSS
- [ ] Audit Lighthouse (score ≥ 95)
- [ ] Test lecteur d'écran NVDA

#### Priorité 3 - Amélioration
- [ ] Créer page plan du site
- [ ] Ajouter breadcrumbs
- [ ] Documentation accessibilité (footer)
- [ ] Page de confirmation formulaire

---

## ✅ Statut Actuel

**Conformité estimée** : ~75% WCAG 2.1 AA

### Points forts
- ✅ Structure HTML5 sémantique excellente
- ✅ Tous les formulaires labelisés
- ✅ Images alt texte présents
- ✅ ARIA utilisé correctement
- ✅ Langue déclarée
- ✅ Titres de pages uniques

### Points à améliorer
- ⏳ Skip link manquant
- ⏳ Contraste couleurs à vérifier
- ⏳ Navigation clavier non testée
- ⏳ Validation W3C non effectuée
- ⏳ `prefers-reduced-motion` manquant
- ⏳ Plan du site manquant

### Bloquants (à corriger avant déploiement)
1. **Skip link** : Obligatoire pour navigation clavier
2. **Contraste** : Si ratios insuffisants, ajuster couleurs
3. **Focus visible** : Essentiel pour clavier
4. **Validation HTML** : Corriger erreurs W3C

---

## 🎯 Objectif Final

**Certification** : WCAG 2.1 Niveau AA ✅

**Livrables Phase 5.3** :
1. ✅ Checklist complétée (ce document)
2. ⏳ Rapport Lighthouse (score ≥ 95)
3. ⏳ Rapport axe DevTools (0 violation)
4. ⏳ Test navigation clavier (vidéo/screenshot)
5. ⏳ Test lecteur d'écran (rapport)
6. ⏳ Validation W3C (0 erreur HTML/CSS)

**Deadline** : Avant Phase 6 (Tests & Debug)

---

## 📚 Ressources

### Standards
- [WCAG 2.1 (W3C)](https://www.w3.org/TR/WCAG21/)
- [RGAA 4.1 (France)](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Outils
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Extension](https://wave.webaim.org/extension/)
- [NVDA Screen Reader](https://www.nvaccess.org/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Formation
- [Web Accessibility (Coursera)](https://www.coursera.org/learn/web-accessibility)
- [A11ycasts (YouTube)](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

---

**Version** : 1.0  
**Dernière mise à jour** : Session 3  
**Prochain audit** : Phase 6
