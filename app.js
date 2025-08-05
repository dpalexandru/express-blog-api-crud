const express = require('express');
const app = express();
const port = 3000;

//importo le routes 
const postRoutes = require('./routers/posts.js')

// body parsere per recuperare le informazioni passate tramite body della richiesta
app.use(express.json());

//creo la routs principale 
app.get("/", (req, res) => {
    res.send("Benvenuto, collegamento riuscito")
});

//autorizzo all'uso delle routes a posts
app.use('/posts', postRoutes);

// body parsere per recuperare le informazioni passate tramite body della richiesta
app.use(express.json());


//middlware
app.use(express.static('public'));

//lascio il server in ascolto sulla porto stabilit
app.listen(port, () => {
    console.log("richiesta effettuata")
})