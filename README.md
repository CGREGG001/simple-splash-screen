# Splash Screen

[![Status](https://img.shields.io/badge/status-complete-green)](#)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Made with HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JS-ES6-F7DF1E?logo=javascript&logoColor=white)](#)

## Description

Ce projet met en œuvre un **écran d’introduction (Splash Screen)** pour un site web. Il s'agit d'une page de chargement initiale qui affiche un **logo animé** avant de laisser place au **contenu principal du site** via un **effet de fondu progressif** (_fade transition_).

Ce type d'écran améliore l'expérience utilisateur en donnant une première impression professionnelle et fluide tout en permettant de charger en arrière-plan les ressources essentielles du site.

## Objectifs

- Créer une transition visuelle soignée entre le chargement initial du site et son contenu.
- Mettre en valeur le branding à travers un **logo animé**.
- Appliquer des techniques de **CSS animation** et de **JavaScript événementiel** pour contrôler l’apparition/disparition du splash screen.

## Technologies utilisées

- **HTML5** : Structure de la page.
- **CSS3** : Animations et styles (animation du logo, effet de fondu).
- **JavaScript** : Contrôle de l’affichage et de la transition vers le contenu principal.

## Fonctionnement

1. Lors du chargement initial de la page :

   - Le **splash screen** s’affiche avec un **logo animé** (ex : rotation, zoom, clignotement...).
   - Le reste du contenu est masqué temporairement.

2. Après un court délai (ou une fois que la page est complètement chargée) :
   - Une **animation de fondu** (_fade out_) est déclenchée sur le splash screen.
   - Le **contenu principal du site** devient visible.

## Structure des fichiers

```bash
.
├── css
│   ├── animations.css
│   ├── base.css
│   ├── main.css
│   └── splash-screen.css
├── favicon.ico
├── index.html
├── LICENSE
├── README.md
└── scripts
    └── disable-scroll-after-splash.js

```

## Fonctionnement

1. Lorsque la page est chargée :

   - Le **splash screen** est affiché en pleine page avec une **animation du logo**.
   - Le reste du contenu reste masqué et le défilement de la page est temporairement désactivé.

2. Après quelques secondes (ou après chargement complet) :
   - Le splash screen disparaît via un **effet de fondu** (fade out).
   - Le contenu principal devient visible.
   - Le **défilement est réactivé** automatiquement.

## Installation et test local

1. Clone le dépôt ou télécharge les fichiers.
2. Ouvre `index.html` dans ton navigateur.
3. Observe le comportement suivant :
   - Animation du logo sur fond plein écran.
   - Transition fluide vers le site après quelques secondes.

## Comportement attendu

- Le **logo** peut avoir une animation comme un zoom, une rotation, ou un fondu.
- Le **splash screen** disparaît avec une animation (`opacity`, `transform`, etc.).
- Le **scroll de la page** est désactivé tant que le splash screen est actif (géré via JS).

## Bonnes pratiques appliquées

- **Séparation des responsabilités** : fichiers CSS spécialisés (`splash`, `animations`, etc.).
- **Accessibilité** : contenu masqué sans le supprimer, permettant aux lecteurs d'écran de fonctionner.
- **Performance** : animations basées sur `opacity` et `transform` (fluides sur tous les navigateurs).
- **UX** : empêche le scroll pendant l’animation pour une meilleure immersion.

## Auteur

- **Nom** : Gregory Colard
- **Statut** : Junior .NET dev
