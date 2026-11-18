# Avant / après : refontes de sites d'artisans

Comparaisons entre des sites d'artisans vieillissants et leur refonte. Sert de vitrine pour mon activité freelance.

> Les entreprises sont fictives. Les versions « avant » sont des reconstitutions de sites typiques des années 2010, pas d'anciens sites de clients réels. Les versions « après » sont les sites de démonstration publiés dans leurs propres dépôts.

## Comparaisons

| Dossier | Site après | Contenu |
|---|---|---|
| [morel-plomberie/](morel-plomberie/index.html) | [skorpiozzz.github.io/morel-plomberie](https://skorpiozzz.github.io/morel-plomberie/) | Plombier-chauffagiste, Paris et petite couronne |

## Structure

```
.
├── index.html            liste des comparaisons
├── css/style.css         styles communs
├── js/compare.js         curseur avant / après (commun à toutes les pages)
└── morel-plomberie/
    ├── index.html        page de comparaison
    ├── avant/index.html  version « avant » reconstituée
    └── img/              captures (WebP) et photos utilisées par la version avant
```

## Ajouter une comparaison

1. Copier le dossier `morel-plomberie/` sous le nom du nouveau site.
2. Remplacer `avant/index.html` et les captures dans `img/` :
   - `avant-desktop.webp` et `apres-desktop.webp` : 1440 × 900 ;
   - `avant-mobile.webp` et `apres-mobile.webp` : 390 × 844 (capturées en ×2 pour la netteté).
3. Adapter le texte et le tableau des corrections dans `index.html`.
4. Ajouter une carte dans `index.html` à la racine.

## Technique

HTML, CSS et JavaScript sans framework ni étape de build. Lancer en local :

```bash
python3 -m http.server 8000
```

## Auteur

Alexandre Zapolski, développeur web freelance : [profil Malt](https://www.malt.fr/profile/alexandrezapolski)
