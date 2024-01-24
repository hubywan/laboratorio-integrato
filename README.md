# PistONE

Piattaforma di statistiche, risultati e approfondimenti su
piloti, scuderie e tracciati. Con un archivio dal
2012 e aggiornamenti sulle nuove competizioni. È inoltre presente una sezione dedicata agli articoli.

## Versioni

Angular 16.1.0

Node.js 20.1.0

## Struttura del Progetto

La pagina di apertura della piattaforma è l'HOME PAGE. Presenta diverse sezioni: podio dell'ultima gara (nel nostro caso è il podio finale della stagione 2023), ultimi articoli pubblicati, un countdown relativo alla prossima gara, un calendario a carosello con le gare del 2024 e un form per la newsletter. Podio e articoli hanno il collegamento alla pagina dedicata.

In ogni pagina della piattaforma è possibile interagire con la Navbar e il Footer.

Partendo da sinistra dalla NAVBAR è possibile accedere alle pagine Home, Stagione 2023, Scuderie, Piloti, Home (dal logo PistONE), Tracciati, Classifiche, Chi siamo e Articoli.

La pagina STAGIONE 2023 è una scorciatoia che passa direttamente alla pagina Classifiche > 2023 dato che ha delle funzionalità in più rispetto agli altri anni. Nella pagina SCUDERIE si trova la lista completa delle stesse dal 2012 al 2023 ed è possibile vedere il DETTAGLIO SCUDERIA dove si possono vedere dati, risultati e approfondimenti della stessa. Anche lista PILOTI e lista TRACCIATI sono strutturati nello stesso modo con la possibilità di accedere ai relativi dettagli.

La pagina classifiche ti permette di scegliere l'anno del campionato. Dopo aver deciso l'anno

-   area-riservata => Area riservata per la pubblicazione degli articoli.
-   articoli => Sezione dedicata alla visualizzazione degli articoli.
-   carosello-home => Carosello contenente la lista dei Gran Premi del 2024 assieme alle rispettive date.
-   chi-siamo => Pagina contenente value pro position, vision e mission.
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
-   tabella-pilota-andamento-stagione => Tabella che ripercorre l’andamento dei piloti nella stagione 2023.
