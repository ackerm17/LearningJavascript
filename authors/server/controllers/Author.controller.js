const { response } = require('express');
const Author = require('../models/Author.model');

module.exports.getAllAuthors = (req,res) => {
    Author.find({})
        .then(author=>res.json(author))
        .catch(err=>res.json(err))
}

module.exports.getOneAuthor = (req,res) => {
    Author.findById({_id:req.params.id})
        .then(author=>res.json(author))
        .catch(err=>res.json(err))
}

module.exports.createAuthor = (req,res) => {
    const {name} = req.body;
    Author.create({
        name
    })
    .then(author=>res.json(author))
    .catch(err=>res.status(400).json(err))
}

module.exports.updateAuthor = (req,res)  => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id: req.params.id})
        .then(delConfirm=>res.json(delConfirm))
        .catch(err => res.json(err))
}