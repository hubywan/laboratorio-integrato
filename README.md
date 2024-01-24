# PistONE

Piattaforma di statistiche, risultati e approfondimenti su
piloti, gran prix, scuderie e tracciati della Formula 1.
Ha un archivio di dati dal 2012 e aggiornamenti sulle nuove competizioni.

## Versioni

Angular 16.1.0

Node.js 20.1.0

## Struttura del Progetto

La pagina di apertura della piattaforma è l'HOME PAGE. Presenta diverse sezioni: podio dell'ultima gara (nel nostro caso è il podio finale della stagione 2023), ultimi articoli pubblicati, un countdown relativo alla prossima gara, un calendario a carosello con le gare del 2024 e un form per la newsletter. Podio e articoli hanno il collegamento alla pagina dedicata.

In ogni pagina della piattaforma è possibile interagire con la Navbar e il Footer.

Partendo da sinistra nella NAVBAR è possibile accedere alle pagine Home, Stagione 2023, Scuderie, Piloti, Home (dal logo PistONE), Tracciati, Classifiche, Chi siamo e Articoli.

La pagina **STAGIONE 2023** è una scorciatoia che passa direttamente dalla pagina **CLASSIFICHE** > **2023**. In questa sezione sono disponibili maggiori dati rispetto agli altri anni dato che è la stagione più recente.

Nella pagina **SCUDERIE** troviamo la lista completa dei team dal 2012 al 2023 e cliccando su ognuno si accede al DETTAGLIO SCUDERIA. Qui troviamo dati, risultati e approfondimenti. Anche la pagina PILOTI e la pagina TRACCIATI sono strutturati nello stesso modo con la possibilità di accedere ai relativi dettagli.

La pagina **CLASSIFICHE** ti permette di scegliere l'anno del campionato di interesse. Dopo aver deciso l'anno si ha la possibilità di vedere la classifica dei **PILOTI** di quell'anno, la lista **GRAN PREMI** che compongono il campionato dell'anno scelto e la classifica delle **SCUDERIE** cliccando sugli appositi bottoni. Dalla lista **GRAN PREMI** è possibile inoltre accedere alla pagina di DETTAGLIO GRAN PREMIO che contiene informazioni sulla corsa e la classifica della stessa.

Nella pagina **CHI SIAMO** troviamo value proposition, vision e mission del nostro brand.

L'ultima pagina raggiungibile tramite la navbar è la pagina **ARTICOLI**. Contiene la lista di tutti gli articoli pubblicati e ciascuno di essi può essere aperto per leggerne il testo e condividerlo.

Dal FOOTER si possono raggiungere la pagina **Area riservata** e la pagina **Sotto il cofano**.

Per accedere all’**Area riservata** è necessario inserire le credenziali corrette (nome utente: martinamascolo / password:password). Una volta entrati è possibile visionare gli articoli pubblicati dall’utente che ha fatto l’accesso e creare un nuovo articolo.

La sezione **Sotto il cofano** è una pagina dimostrativa per testare le chiamate all’API.

## Funzionalità della piattaforma

### Funzionalità HOME PAGE

**Calendario a carosello**
Si trova nella Homepage della piattaforma e mostra le date delle corse relative alla stagione 2024. I dati al suo interno sono richiamati dall’API, mentre le bandiere sono state implementate manualmente nel database. Il carosello si aggiorna automaticamente eliminando le date delle corse dopo il loro svolgimento.

**Countdown**
Dall’Api si riceve la data della prossima gara e tramite Dayjs

**Form newsletter**
Nell’ultima parte della Homepage c’è il form per iscriversi alla newsletter. Il codice HTML è stato generato direttamente dalla piattaforma di Mailchimp e implementato con la parte di CSS. Ha un collegamento diretto al sito che raccoglie le email degli utenti.

-   area-riservata => Area riservata per la pubblicazione degli articoli.
-   articoli => Sezione dedicata alla visualizzazione degli articoli.
-   carosello-home => Carosello contenente la lista dei Gran Premi del 2024 assieme alle rispettive date.
-   chi-siamo => Pagina contenente value proposition, vision e mission.
-   classifica-piloti => Codice finalizzato alla creazione delle pagine dedicate alle classifiche stagionali dei piloti.
-   classifica-scuderie => Codice finalizzato alla creazione delle pagine dedicate alle classifiche stagionali delle scuderie.
-   classifiche => Pagina contenente la selezione dell’anno per la visualizzazione delle classifiche specifiche.
-   classifiche-anno => Selezione delle classifiche “Piloti”, “Gran Premi” e “Scuderie” per ogni anno disponibile.
-   confronto-piloti => Componente in grado di confrontare i successi e le vittorie di campionati tra due piloti.
-   countdown => Conto alla rovescia in tempo reale che indica la distanza dall’evento successivo.
-   dettaglio-articolo => Pagina di visualizzazione di un articolo specifico.
-   dettaglio-gran-premio => Risultati di ogni sessione all’interno del weekend di gara, comprese quelle presenti nei weekend “Sprint” quando richieste.
-   dettaglio-pilota => Sezione dedicata ai dati anagrafici dei piloti assieme al loro numero di gara, storico di team e risultati con la possibilità di utilizzare la funzione di confronto.
-   dettaglio-scuderia => Sezione dedicata alle informazioni riguardanti le squadre tra le quali la line-up di piloti, risultati, dati storici e dati generali.
-   dettaglio-tracciato => Sezione dedicata ai tracciati che comprende, oltre alle informazioni di base, l’anno d’esordio, la lunghezza, il giro più veloce mai svolto, una descrizione scritta a mano e un video con la simulazione di un giro.
-   footer => Componente finalizzato alla creazione del footer, comprendente di rimandi ai vari social, l’accesso all’area riservata e quello alla sezione “Sotto il cofano”.
-   grafico-pilota => Grafico a linee che ripercorre l’andamento dei piloti nelle proprie stagioni di attività.
-   grafico-pilota-andamento-stagione => Grafico a linee che ripercorre l’andamento dei piloti nella stagione 2023.
-   grafico-scuderia => Grafico a linee che ripercorre l’andamento delle scuderie nelle proprie stagioni di attività.
-   home => Homepage che comprende il podio dell’ultima gara disputata o del campionato appena concluso, gli articoli, il countdown, il calendario della stagione 2024 e l’iscrizione alla newsletter.
-   lista-piloti => Lista di tutti i piloti dal 2012 ad oggi con rispettiva immagine, nazionalità e punti conquistati nell’arco della carriera.
-   lista-scuderie => Lista di tutte le scuderie dal 2012 ad oggi con rispettiva immagine.
-   lista-tracciati => Lista di tutti i tracciati dal 2012 ad oggi con rispettiva immagine.
-   login => Pagina dedicata al login per l’area riservata.
-   navbar => Navbar del sito con le sezioni Home, Stagione 2023, Scuderie, Piloti, PistONE(Home), Tracciati, Classifiche, Chi siamo e Articoli.
-   stesura-articolo => Componente finalizzato alla stesura, alla pubblicazione e alla programmazione degli articoli.
-   tabella-pilota-andamento-stagione => Tabella che ripercorre l’andamento dei piloti nella stagione 2023.

**FILTRI**
I filtri includono la ricerca per nome e il filtro per anno
