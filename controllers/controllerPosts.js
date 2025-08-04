const posts = require('../data/posts.js');

//definisco funzione Index
const index = (req, res) => {
    res.json(posts);
}

//definisco funzione Show
const show = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Dettaglio del post n: ${id}`)

}

//definisco funzione Store
const store = (req, res) => {
    res.send(`Sezione creazione nuovo post`)
}

//definisco funzione Update
const update = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Sezione intero aggiornamento post n: ${id}`)

}

//definisco funzione Modify
const modify = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Sezione aggiornamento parziale post n: ${id}`)
}

//definisco funzione DESTROY
const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Sezione ELIMINAZIONE post n: ${id}`)
}

//esporto tutte le funzioni in un oggetto
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}