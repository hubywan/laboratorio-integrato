# PistONE

Piattaforma di statistiche, risultati e approfondimenti su
piloti, gran prix, scuderie e tracciati della Formula 1.
Ha un archivio di dati dal 2012 e aggiornamenti sulle nuove competizioni. L’applicazione è stata progettata mobile first ma con la possibilità della visualizzazione desktop in quanto responsive.

## Versioni e Utilities

Angular 16.1.0

Node.js 20.1.0

come setuppare Angular : https://angular.io/guide/setup-local
repository git : https://github.com/hubywan/laboratorio-integrato

## Struttura del Progetto

La pagina di apertura della piattaforma è l'HOME PAGE. Presenta diverse sezioni: podio dell'ultima gara (nel nostro caso è il podio finale della stagione 2023), ultimi articoli pubblicati, un countdown relativo alla prossima gara, un calendario a carosello con le gare del 2024 e un form per la newsletter. Podio e articoli hanno il collegamento alla pagina dedicata.

In ogni pagina della piattaforma è possibile interagire con la Navbar e il Footer.

Partendo da sinistra nella NAVBAR è possibile accedere alle pagine Home, Stagione 2023, Scuderie, Piloti, Home (dal logo PistONE), Tracciati, Classifiche, Chi siamo e Articoli.

La pagina **STAGIONE 2023** è una scorciatoia che passa direttamente dalla pagina **CLASSIFICHE** > **2023**. In questa sezione sono disponibili maggiori dati rispetto agli altri anni dato che è la stagione più recente.

Nella pagina **SCUDERIE** troviamo la lista completa dei team dal 2012 al 2023 e cliccando su ognuno si accede al DETTAGLIO SCUDERIA. Qui troviamo dati, risultati e approfondimenti. Anche la pagina PILOTI e la pagina TRACCIATI sono strutturati nello stesso modo con la possibilità di accedere ai relativi dettagli.

La pagina **CLASSIFICHE** ti permette di scegliere l'anno del campionato di interesse. Dopo aver deciso l'anno si ha la possibilità di vedere la classifica dei **PILOTI** di quell'anno, la lista **GRAN PREMI** che compongono il campionato dell'anno scelto e la classifica delle **SCUDERIE** cliccando sugli appositi bottoni. Dalla lista **GRAN PREMI** è possibile inoltre accedere alla pagina di DETTAGLIO GRAN PREMIO che contiene informazioni sulla corsa e la classifica della stessa.

Nella pagina **CHI SIAMO** troviamo value proposition, vision e mission del nostro brand.

L'ultima pagina raggiungibile tramite la navbar è la pagina **ARTICOLI**. Contiene la lista di tutti gli articoli pubblicati e ciascuno di essi può essere aperto per leggerne il testo e condividerlo.

Dal FOOTER si possono raggiungere la pagina Area riservatA e la pagina Sotto il cofano.

Per accedere all’**AREA RISERVATA** è necessario inserire le credenziali corrette (nome utente: martinamascolo / password:password). Una volta entrati è possibile visionare gli articoli pubblicati dall’utente che ha fatto l’accesso e creare un nuovo articolo.

La sezione **SOTTO IL COFANO** è una pagina dimostrativa per testare le chiamate all’API.

## Funzionalità della piattaforma

### Funzionalità HOME PAGE

**Calendario a carosello**

Si trova nella Homepage della piattaforma e mostra le date delle corse relative alla stagione 2024. I dati al suo interno sono richiamati dall’API, mentre le bandiere sono state implementate manualmente nel database. Il carosello si aggiorna automaticamente eliminando le date delle corse dopo il loro svolgimento.

**Countdown**

Il countdown funziona grazie ad una chiamata API allo stesso servizio del carosello. Prende la data del primo elemento dell'array e tramite la libreria dayjs viene calcolato e visualizzato un conto alla rovescia. Il countdown è aggiornato ogni secondo.

**Form newsletter**

Nell’ultima parte della Homepage c’è il form per iscriversi alla newsletter. Il codice HTML è stato generato direttamente dalla piattaforma di Mailchimp e implementato con la parte di CSS. Ha un collegamento diretto al sito che raccoglie le email degli utenti.

### Funzionalità STAGIONE 2023

**Piloti**

La sezione mostra la classifica piloti completa della stagione 2023 oltre a due grafici, uno a linee e uno a tabella, che si soffermano sull’andamento di ogni atleta in ogni evento. I dati sono tutti richiamati dall’API tranne le immagini, tutte implementate manualmente. Invece i grafici sono stati implementati grazie a Chartjs.

**Gran Premi**

È presente l’intera lista delle gare nella stagione 2023 con nazione, nome dell’evento, data dello stesso e la bandiera. Come per le altre sezioni in stagioni 2023 i dati sono chiamati tramite API tranne le immagini, mentre le date sono state formattate con Dayjs.

**Scuderie**

Sono indicate le posizioni della classifica costruttori 2023, assieme al numero di punti e alla line-up dei piloti di ogni team. Nella versione desktop è anche visualizzabile il podio.

### Funzionalità SCUDERIE

**Scuderie**

Oltre alla lista delle scuderie presenti in Formula 1 dal 2012 ad oggi. Si possono notare il filtro di ricerca per nome e quello per anno. La ricerca per nome confronta la stringa inserita con i nomi e mostra quelli nel quale le stringhe combaciano. Il filtro per anno è una select con gli anni che se selezionati chiamano l’API, che risponderà con i dati dell’anno corrispondente. Questi filtri funzionano allo stesso modo anche per le liste di piloti e tracciati, così come il click su un’icona che porta alla pagina dettaglio.
Quando viene selezionato un elemento della lista viene passato come parametro attraverso la navigazione delle route. La pagina di dettaglio riceve l'ID dal parametro della route e utilizza l’ID per effettuare una chiamata API e viene usato come parametro da passare al servizio corrispondente.

**Dettaglio scuderia**

Nel dettaglio scuderia sono presenti tutti i dati forniti dall’API riguardante la stessa, con le immagini del logo e dei piloti inseriti manualmente nel database. Inoltre è visibile il punteggio della squadra in ogni edizione disputata del campionato mondiale.

### Funzionalità PILOTI

**Piloti**

Esattamente come per le scuderie si nota la lista dei piloti presenti in Formula 1 dal 2012 ad oggi. Anche in questo caso ci sono i filtri per nome e per anno.

**Dettaglio pilota**

Nel dettaglio pilota vengono mostrati tutti i dati degli atleti, come il numero di gara, i team presenti e passati e l’andamento stagionale per anno via grafico.
Il confronto pilota paragona quello della pagina stessa con uno a scelta. Il pilota da confrontare viene inserito tramite una select che contiene i nomi di tutti i piloti presi tramite un servizio GET. In seguito alla selezione viene effettuata un'ulteriore chiamata la quale tramite l'id del pilota restituisce i dati da comparare.

### Funzionalità TRACCIATI

**Tracciati**

Ancora una volta c’è la lista dei tracciati presenti in Formula 1 dal 2012 ad oggi. Anche in questo caso ci sono i filtri per nome e per anno.

**Dettaglio tracciato**

Oltre ai canonici dati statistici si notano due caratteristiche esclusive: sono infatti state scritte a mano delle descrizioni per ogni circuito e sono stati registrati video tramite F1 23 e Assetto Corsa con il fine di mostrarlo nella sua interezza. Questi video sono stati caricati sul canale YouTube di PistONE.

### Funzionalità CLASSIFICHE

**Classifiche**

Tutte le stagioni dal 2012 ad oggi sono selezionabili tramite questa pagina.

**Classifica anno**

Il funzionamento è il medesimo della sezione Classifiche 2023, senza però mostrare grafici date le diverse modalità di assegnazione del punteggio.

### Funzionalità CHI SIAMO

La pagina Chi siamo non presenta funzionalità in quanto ha l’unico scopo di condividere la value proposition, la vision e la mission.

### Funzionalità ARTICOLI

**Articoli**

Lista di tutti gli articoli scritti dai nostri autori tramite l’area riservata.

**Dettaglio articolo**

Presenta l’articolo in tutta la sua interezza.

### Funzionalità AREA RISERVATA

**Login**

Il processo di login ha lo scopo di gestire l'autenticazione degli utenti. Gli utenti inseriscono nel form il loro nome utente e la password, che vengono successivamente inviati tramite una richiesta POST al server. Se le credenziali sono corrette, il server risponde fornendo un token di autenticazione. Tale token viene memorizzato nel local storage del browser. Successivamente, l'utente viene reindirizzato all'area riservata, e il nome utente è incluso come parametro nella query string per ulteriori operazioni.
In caso di insuccesso nel processo di login, viene mostrato un messaggio di feedback per informare l'utente dell'errore.

**Area riservata**

Sono visibili gli articoli scritti dall’autore che ha effettuato il login e ne consente la stesura di uno nuovo.

**Stesura articolo**

La pagina stesura articolo contiene un form nel quale bisogna inserire un titolo,un'immagine e il testo. Dopodiché c'è la possibilità di pubblicare direttamente l'articolo o di programmarlo in una determinata data. Come nel login il form viene mandato tramite un servizio POST che inserisce il nuovo articolo direttamente nel database. Pubblicato un articolo si è reindirizzati alla pagina dell’area riservata.

### Funzionalità SOTTO IL COFANO

Sotto il cofano permette di testare alcune chiamate API. I titoli, se cliccati, aprono e chiudono il paragrafo che mostra la risposta in formato json.

## Servizi

I due file che gestiscono i servizi sono api.service.ts e post.service.ts. **api.service.ts** è responsabile per la gestione delle chiamate API GET al server. **post.service.ts** è responsabile per la gestione delle chiamate API POST al server.
