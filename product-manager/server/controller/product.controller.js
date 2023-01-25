const { response } = require('express');
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

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}