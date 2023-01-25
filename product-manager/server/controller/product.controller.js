const {Product} = require('../models/product.model');



module.exports.createProduct = (req, res) => {
    const {Title, Price, Description} = req.body;
    Product.create({
        Title,
        Price,
        Description
    })
    .then(product => res.json(product))
    .catch(err=>res.json(err))
}