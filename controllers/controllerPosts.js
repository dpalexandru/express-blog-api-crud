const postsObject = require('../content/posts.js');

const index = (req, res) => {
    res.send("Index del mio blog")
        ////  res.json(postsObject)
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Dettaglio del post n: ${id}`)

}


module.exports = {
    index,
    show
}