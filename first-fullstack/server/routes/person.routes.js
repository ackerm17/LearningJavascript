const personController = require('../controller/person.controller');

module.exports = function(app){
    app.get('/api', personController.index);
    app.post('/api/people', personController.createPerson)
}