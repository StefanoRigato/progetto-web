# Progetto Applicazioni Web
Progetto di Rigato Stefano, matricola 869441.

## Struttura
Il progetto è strutturato dividento in componenti, model, viewModel e views.

Il model chiama l'API e la risposta viene utilizzata dal suo corrispettivo ViewModel per prendere i dati e passarli alle View che necessitano i dati dell'API, in questo caso la view "WeaponDetail" e la "WeaponPage".

Le view principale è "WeaponPage" dove vengono mostrate tutte le armi del gioco Warframe, in griglia o in elenco, è possibile anche effettuare una ricerca.
Premendo sull'immagine di una qualsiasi arma si passa alla view "WeaponDetail" dove vengono mostrate le statistiche e descrizione dell'arma.

Per quanto riguarda la ricerca delle armi nella view principale, visto che si riceve una grossa risposta dalla API che contiene tutte le armi, viene fatta una ricerca direttamente su questa risposta per evitare di richiamare l'API numerose volte, visto che è abbastanza grande come file JSON.

La ricerca se effettuata utilizzando "npm run dev" potrebbe risultare lenta, se si prova a fare la preview della build invece risulta fluida.

## Components principali
### Loading
Componente che mostra un'immagine in attesa di risposta dell'API.

### WeaponCard
Singola card bootsrap che mostra l'immagine dell'arma con la sua categoria.

### WeaponCardsGrid
Tabella bootstrap che si usa il componente WeaponCard molteplici volte.

### WeaponInfo
Mostra statistiche e descrizione di una singola arma.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
