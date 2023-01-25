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

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products=> res.json(products))
        .catch(err=>res.json(err))
}

module.exports.findOneProduct = (req,res) => {
    Product.findById({_id:req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}