const postsObject = require('../content/posts.js');

const index = (req, res) => {
    res.send("Index del mio blog")
        ////  res.json(postsObject)
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Dettaglio del post n: ${id}`)

}

const store = (req, res) => {
    res.send(`Sezione creazione nuovo post`)
}

const update = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Sezione intero aggiornamento post n: ${id}`)

}


module.exports = {
    index,
    show,
    store,
    update
}