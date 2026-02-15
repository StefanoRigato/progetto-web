# Progetto Applicazioni Web
Progetto di Rigato Stefano, matricola 869441.

Per visualizzare l'app: https://stefanorigato.github.io/progetto-web/

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
