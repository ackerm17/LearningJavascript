const authorController = require("../controllers/Author.controller")

module.exports = function(app){
    app.post('/api/authors', authorController.createAuthor);
    app.get('/api/authors', authorController.getAllAuthors);
    app.get('/api/authors/:id', authorController.getOneAuthor);
    app.put('/api/updateauthor/:id', authorController.updateAuthor);
    app.delete('/api/deleteproduct/:id', authorController.deleteAuthor);
}