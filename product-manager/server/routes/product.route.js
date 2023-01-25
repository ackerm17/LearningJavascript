const productController = require('../controller/product.controller');

module.exports = function(app){
    app.post('/api/products', productController.createProduct);
}