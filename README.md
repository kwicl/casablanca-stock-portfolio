# Casablanca Stock Portfolio (Maroc Bourse Tracker)

Application web (PWA) de suivi de la Bourse de Casablanca : cotations en temps réel, gestion de portefeuille personnel et simulateur de cession aux frais du marché marocain (BVC).

**Valeurs suivies** : Maroc Telecom (IAM), TGCC (TGC), SGTM (GTM), Risma (RIS), CIH Bank (CIH).

## Fonctionnalités

- **Cours en direct** : dernier cours, variation (MAD et %), ouverture, plus haut / plus bas, volume, montant échangé, sparklines intrajournaliers, indice MASI indicatif.
- **Mon Portefeuille** : ajout / modification / suppression de positions (quantité, PRU, date), valorisation en temps réel, plus/moins-value latente (MAD et %), persistance locale (localStorage).
- **Simulateur de cession** : vente partielle ou totale, commission de courtage HT paramétrable, TVA 10 % sur commissions, TPC 15 % sur la plus-value nette, calcul du **net à recevoir** et de la plus/moins-value nette réalisée.
- **Analyses** : répartition du portefeuille (donut) et performance par position (barres).
- **PWA installable** : iOS (Ajouter à l'écran d'accueil) et Android — ouverture plein écran comme une application native, icônes dédiées, fonctionnement hors-ligne (service worker).
- Mode sombre / clair, interface responsive (barre de navigation inférieure style app sur mobile).

## Stack technique

React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Zustand (persist) · Recharts · vite-plugin-pwa (Workbox)

## Démarrage

```bash
npm install
npm run dev      # développement — http://localhost:3000
npm run build    # build de production → dist/
npm run preview  # prévisualisation du build
```

## Déploiement sur GitHub Pages

Le dépôt contient un workflow prêt à l'emploi (`.github/workflows/deploy.yml`) qui compile l'application et publie `dist/` automatiquement :

1. Poussez ce dossier sur votre dépôt GitHub (branche `main`).
2. Dans GitHub : **Settings → Pages → Source : « GitHub Actions »**.
3. À chaque push sur `main`, le site est compilé et déployé sur `https://<votre-compte>.github.io/<votre-repo>/`.

Les chemins sont relatifs (`base: './'`) : l'application, ses icônes et son manifeste fonctionnent directement sous le sous-chemin GitHub Pages.

### Icône iPhone (écran d'accueil)

iOS met en cache l'icône de manière agressive. Après un redéploiement :

1. Supprimez l'ancienne icône de l'écran d'accueil (appui long → Supprimer).
2. Rouvrez l'adresse dans **Safari** (obligatoire — pas Chrome).
3. Partager → **Sur l'écran d'accueil** : l'icône photo (`apple-touch-icon` 180×180) est alors utilisée.

## Architecture des données de marché

La couche cotations est isolée derrière le contrat `MarketDataProvider` (`src/lib/market/`) :

- `SimulatedMarketProvider` (défaut) : moteur de démonstration (random walk) calé sur les dernières clôtures publiées.
- `HttpMarketProvider` : prêt à brancher sur un proxy backend exposant `GET /api/quotes` (polling) — la Bourse de Casablanca ne publiant pas d'API publique gratuite, un flux réel nécessite une source de données licenciée côté serveur.

Aucune vue React ne dépend de l'implémentation : basculer du mode simulé au flux réel se fait dans `src/lib/market/provider.ts`.

## Avertissement

Outil indicatif fourni à titre de démonstration — les cotations par défaut sont simulées et les calculs de frais (courtage, TVA, TPC) sont des estimations qui dépendent de votre société de bourse et de votre situation fiscale. Ne constitue pas un conseil en investissement.
