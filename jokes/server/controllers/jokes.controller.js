const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({jokes: allDaJokes})
        })
        .catch((err) => {
            res.json({message: "something went wrong", error: err})
        })
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneSingleJoke => {
            res.json({user: oneSingleJoke})
        })
        .catch((err) => {
            res.json({message: "something went wrong", error: err})
        })
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({message: "something went wrong", error: err})
        })
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedJoke => {
        res.json({joke: updatedJoke})
    })
    .catch((err) => {
        res.json({message: "something went wrong", error: err})
    })
}

module.exports.deleteJoke = (red, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: "something went wrong", error: err})
        })
}

