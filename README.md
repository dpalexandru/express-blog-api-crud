express-blog-routing
===
### Esercizio
Milestone 1
Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 
Se tutto funziona, passiamo alla prossima milestone

Milestone 2
Per iniziare, creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller. 
Ora passiamo ad implementare le logiche delle nostre CRUD:
Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

Buon Lavoro e buon divertimento

### Cosa ho imparato 
Ho organizzato meglio il codice separando le rotte dai controller, migliorando la struttura del progetto.
Ho usato require per importare dati esterni (l’array di post) e per riutilizzare funzioni tra file.
Ho implementato le operazioni CRUD reali con risposte HTTP corrette, gestendo anche gli errori con status 404.
Ho imparato a usare Postman per testare gli endpoint, simulando chiamate reali e verificando il comportamento delle chiamate.

## Consegna 04/08/2025 

### Esercizio 2 
<@&1371425945176510544>
 
 Ciao ragazzi,
 esercizio di oggi: Express Blog - API CRUD (parte 2)
 
 repo: `express-blog-api-crud`
 
 ### Esercizio
 
 
 **Milestone 1**
 
 Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store. 
 - Impostiamo il verbo e l’endpoint corretti
 - Selezioniamo il tab body e scegliamo il formato raw e JSON
 - Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
 
 *Nota: se vogliamo avere delle immagini, inventiamole pure.* 
 *Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*
 
 **Milestone 2**
 
 Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
 Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log` 
 
 **Milestone 3**
 
 Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
 Testiamolo con postman.
 
 **Milestone 4**
 
 Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse. 
 
 ### Bonus
 
 - Quelli del giorno prima, se non già fatti
 - In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
 
 Buon Lavoro e buon divertimento

 ### Cosa ho imparato 
 o imparato a usare express.json() come middleware essenziale per poter accedere correttamente a req.body e ho testato il funzionamento stampando i dati ricevuti nel terminale.

Successivamente ho implementato la logica per aggiungere un nuovo post a un array simulando un database, generando un nuovo id, e restituendo una risposta JSON con status 201.
Infine, ho applicato lo stesso principio per la rotta PUT, imparando a validare l’input, verificare l’esistenza del post da modificare e aggiornare solo i campi previsti, evitando errori come la doppia risposta o l’accesso a oggetti undefined.

 ## Consegna 05/08/2025 

### Esercizio 3

Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.

Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

### Cosa ho imparato

In questa terza parte dell'esercizio ho capito l'importanza di gestire gli errori ritornando un oggetto in certe occasioni come la pagina non trovata o quando vi è un errore interno a una funzine.

 ## Consegna 06/08/2025 
