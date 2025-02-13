const posts = require('../data/array')

function index (req, res) {

    //Inizialmente, il menu filtrato corrisponde a quello originale
    let filteredPosts = posts;

    //Se la richiesta contiene un filtro, allora filtriamo l'array
    //Filtriamo per "id"
    // if (req.query.id) {
    //     const postId = parseInt(req.query.id); 
    //     filteredPosts = posts.find(
    //         post => post.id === postId
    //     );
    // }

     //Filtriamo per "tags"
    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    } 
    res.json(filteredPosts)
};
// show
function show (req, res) {

    //Rendiamo "id" inserito dall'utente un numero intero invece che una stringa per poterlo trovare
    const postId = parseInt(req.params.id); 

    //Usiamo il ".find" per trovare il singolo id nell'array "posts" con un arrow function
    const post = posts.find(element => element.id === postId);

    //Facciamo il controllo se l'id é presente
    if (!post){

        //Impostaimo lo status 404
        res.status(404)

        //Restituiamo il json con altre informazioni
        return res.json({
            error: "Not Found",
            message: "Post non trovata"
        })
    }

    //Restituisce il singolo post con l'id inserito in formato json
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
        //Rendiamo "id" inserito dall'utente un numero intero invece che una stringa per poterlo trovare
        const postId = parseInt(req.params.id); 

        //Usiamo il ".find" per trovare il singolo id nell'array "posts" con un arrow function
        const post = posts.find(element => element.id === postId);
    
        //Facciamo il controllo se l'id é presente
        if (!post){
    
            //Impostaimo lo status 404
            res.status(404)
    
            //Restituiamo il json con altre informazioni
            return res.json({
                error: "Not Found",
                message: "Post non trovata"
            })
        }
    
        //Rimuove il singolo post con l'id inserito
        posts.splice(posts.indexOf(post), 1); 

        //Verifichiamo la presenza dell'elemento cancellato
        console.log(posts)

        //Restituiamo lo status corretto
        res.sendStatus(204)
      };


module.exports = { index, show, store, update, modify, destroy }