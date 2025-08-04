const express = require('express');
const router = express.Router();
const postsObject = require('../content/posts.js')
    //console.log(postsObject)

//definisco la route principale Index
router.get("/", (req, res) => {
    res.json(postsObject)
});

//definisco la route Show principale con id e restituisco l'articolo con id ricevuto
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const risp = [];

    postsObject.forEach(elem => {
        if (elem.id == id) {
            risp.push(elem);
        }
    });
    if (risp.length != 0) {
        res.json(risp);
    } else {
        res.send('nessun articolo trovato')
    }

});

//definisco la route per Creare un post
router.post("/", (req, res) => {
    res.send(`Sezione creazione nuovo post`)
});

//definisco la route per Modificare totale un post
router.put("/:id", (req, res) => {
    res.send(`Modifica totale del post n: ${req.params.id}`)
});

//definisco la route per Modificare parziale di un post
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post n: ${req.params.id}`)
});

//definisco la route per Eliminare  di un post
router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post: ${req.params.id}`)
});

//esporto le route
module.exports = router;