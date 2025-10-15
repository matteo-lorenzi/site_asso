# Questions & Réponses - Projet Poitou en Scène

**Date** : 15 octobre 2025  
**Projet** : Site web Poitou en Scène  
**Type** : Site statique (HTML/CSS/JS)

---

## 1. Billetterie & Système d'inscriptions

**Question** : Quelle solution de billetterie et d'inscription souhaitez-vous pour le site ?

**Réponse** :  
Le site intégrera une plateforme publique capable de gérer un grand nombre de visiteurs simultanés. Les ateliers seront organisés et filtrés par thématique (Danse, Musique, Chant) et par tranches d'âges. Le système de réservation sera externalisé vers une plateforme tierce dédiée, garantissant la scalabilité et la performance lors des pics de fréquentation.

**Action technique** :  
- Intégration d'un lien/bouton vers plateforme externe (HelloAsso, Billetweb, ou similaire)
- Présentation claire des ateliers avec filtres par thème et âge
- Interface de navigation intuitive pour choisir son atelier

---

## 2. Calendrier & Dates des événements

**Question** : Disposez-vous de dates précises pour le festival ? Un calendrier interactif est-il nécessaire ?

**Réponse** :  
Le festival Poitou en Scène se déroulera en 2026 sur un week-end de 3 jours (Vendredi - Dimanche). Les dates exactes ne sont pas encore fixées. Un calendrier interactif sera intégré au site pour permettre aux visiteurs de visualiser l'ensemble de la programmation de manière dynamique et engageante.

**Action technique** :  
- Développement d'un calendrier interactif responsive
- Système modulaire permettant l'ajout/modification facile des dates
- Affichage du programme jour par jour avec filtres par discipline

---

## 3. Espace bénévoles & Gestion des membres

**Question** : Faut-il prévoir un espace membre et/ou un système de recrutement de bénévoles ?

**Réponse** :  
Pour cette première version, aucun espace membre ne sera développé. L'appel aux bénévoles se fera via la page Contact avec un formulaire dédié. L'idée d'un espace recrutement plus élaboré est envisagée pour une évolution future du site, mais n'est pas à implémenter immédiatement.

**Action technique** :  
- Formulaire de contact avec option "Je souhaite devenir bénévole"
- Section dédiée sur la page Contact expliquant les missions bénévoles
- Pas d'authentification ni de back-office pour cette version

---

## 4. Contenus multimédia

**Question** : Disposez-vous de photos, vidéos ou extraits audio à intégrer au site ?

**Réponse** :  
Pour le développement initial, des images temporaires (placeholders) seront utilisées. Aucun contenu audio des chants traditionnels ne sera intégré dans cette première version.

**Action technique** :  
- Utilisation d'images placeholder cohérentes avec l'identité visuelle
- Structure HTML préparée pour l'intégration future de médias réels
- Optimisation des emplacements images pour un remplacement facile

---

## 5. Pages prioritaires & Multilinguisme

**Question** : Quelles sont les pages essentielles et le site doit-il être multilingue ?

**Réponse** :  
Les trois pages prioritaires sont : **Accueil**, **Programme** et **À Propos**. Le site sera conçu pour être bilingue (Français/Anglais) dans le cadre de Poitiers Capitale Européenne de la Culture 2026. Le développement se fera d'abord entièrement en français, avec l'infrastructure technique préparée pour l'ajout ultérieur de la version anglaise.

**Action technique** :  
- Développement prioritaire : Accueil, Programme, À Propos
- Architecture de fichiers préparée pour le multilinguisme (structure i18n)
- Sélecteur de langue dans l'en-tête (activable plus tard)

---

## 6. Accessibilité

**Question** : Y a-t-il des besoins spécifiques d'accessibilité au-delà des normes standards ?

**Réponse** :  
Les normes WCAG (Web Content Accessibility Guidelines) standards seront appliquées et sont suffisantes pour cette version. L'identité visuelle intègre déjà des ratios de contraste conformes (4.5:1 pour le texte, 3:1 pour les titres).

**Action technique** :  
- Respect des normes WCAG 2.1 niveau AA minimum
- Navigation au clavier fonctionnelle
- Attributs ARIA sur tous les éléments interactifs
- Alt text sur toutes les images

---

## 7. Partenaires & Sponsors

**Question** : Combien de logos partenaires faut-il afficher ?

**Réponse** :  
Les partenaires actuels à afficher sont : Ville de Poitiers, Grand Poitiers, Département de la Vienne, Région Nouvelle-Aquitaine, Ministère de la Culture, Union Européenne, et la Fondation du Patrimoine Pictavien (commanditaire principal). La section partenaires sera conçue de manière scalable pour permettre l'ajout facile de nouveaux sponsors à l'avenir.

**Action technique** :  
- Section sponsors responsive avec système de grille flexible
- 7 logos initiaux à intégrer
- Architecture CSS permettant l'ajout illimité de nouveaux logos

---

## 8. Technologies & Maintenance

**Question** : Quelle technologie utiliser et qui maintiendra le site ?

**Réponse** :  
Le site sera développé en **HTML/CSS/JavaScript pur** (statique), sans framework complexe ni CMS. La maintenance sera effectuée manuellement, permettant un contrôle total du code et des performances optimales sans dépendances externes.

**Action technique** :  
- Site statique HTML5/CSS3/Vanilla JavaScript
- Code commenté et structuré pour faciliter la maintenance
- Documentation technique pour les futures modifications
- Hébergement simple (GitHub Pages, Netlify, ou serveur classique)

---

## Récapitulatif des priorités

| Priorité | Fonctionnalité | Statut |
|----------|----------------|--------|
| 🔴 Haute | Pages : Accueil, Programme, À Propos | V1 |
| 🔴 Haute | Calendrier interactif du festival | V1 |
| 🔴 Haute | Identité visuelle complète (charte graphique) | V1 |
| 🟡 Moyenne | Page Contact avec formulaire bénévoles | V1 |
| 🟡 Moyenne | Section sponsors (7 logos, scalable) | V1 |
| 🟡 Moyenne | Version responsive (mobile/tablette/desktop) | V1 |
| 🟢 Basse | Version anglaise | V2 (future) |
| 🟢 Basse | Intégration contenus audio | V2 (future) |
| 🟢 Basse | Espace recrutement bénévoles avancé | V2 (future) |

---

**Document maintenu par** : Équipe de développement  
**Dernière mise à jour** : 15 octobre 2025
