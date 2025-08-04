const postsObject = require('../content/posts.js');

const index = (req, res) => {
    res.send("Index del mio blog")
        ////  res.json(postsObject)

}


module.exports = {
    index
}