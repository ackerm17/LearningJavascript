const productController = require('../controller/product.controller');

module.exports = function(app){
    app.post('/api/products', productController.createProduct);
    app.get('/api/products', productController.getAllProducts);
    app.get('/api/products/:id', productController.findOneProduct)

}