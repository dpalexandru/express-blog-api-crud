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