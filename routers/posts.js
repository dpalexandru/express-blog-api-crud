const express = require('express');
const router = express.Router();
const { index, show, store, update } = require('../controllers/controllerPosts.js')
    //console.log(postsObject)

//definisco la route principale Index
router.get('/', index);

//definisco la route Show principale con id e restituisco l'articolo con id ricevuto
router.get("/:id", show);

//definisco la route per Creare un post
router.post("/", store)

//definisco la route per Modificare totale un post
router.put("/:id", update)

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