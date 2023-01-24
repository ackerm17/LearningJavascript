const { default: mongoose, model } = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "joke must have setup"],
            minlength: [10, "a good setup is at least ten characters long"]
        },
        punchline: {
            type: String,
            required: [true, "punchline is required"]
        }
    }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;