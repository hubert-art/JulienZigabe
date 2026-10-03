# Julien Zigabe — Portfolio

Site portfolio professionnel de Julien Zigabe, consultant, formateur, speaker et entrepreneur engagé dans le développement d’entreprise, le leadership et l’innovation sociale.

## Démarrer le projet

Le front-end se trouve dans le dossier `client`.

```bash
cd client
npm install
npm run dev
```

L’application sera accessible à l’adresse affichée par Vite, généralement `http://localhost:5173`.

## Commandes disponibles

```bash
npm run dev    # Lance le serveur de développement
npm run lint   # Vérifie la qualité du code
npm run build  # Génère la version de production dans client/dist
```

## Pages

- Accueil : introduction, domaines d’intervention, actions en images, partenaires et prise de contact.
- À propos : présentation professionnelle de Julien Zigabe.
- Parcours : chronologie des expériences et collaborations majeures.
- Contact : coordonnées et liens vers les réseaux professionnels.

## Technologies

- React
- Vite
- Tailwind CSS
- Lucide React

## Ressources visuelles

Les images et documents de référence sont conservés dans `client/public`. La favicon du site se trouve dans `client/public/favicon.svg`.

## Vérification avant publication

Exécuter les commandes suivantes depuis `client` :

```bash
npm run lint
npm run build
```
