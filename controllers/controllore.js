const posts = require('../data/array')

function index (req, res) {
    res.json(post)
};
// show
function show (req, res) {
    const postId = parseInt(req.params.id); 
    const post = posts.find(element => element.id === postId);
    res.json(post); 
  };

// store
function store (req, res) {
    res.send('Creazione nuovo post');
};
// update
function update (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
};
// modify
function modify (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
};
// destroy
function destroy (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
};

module.exports = { index, show, store, update, modify, destroy }