const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database connection successful"))
    .catch(err=> console.log("error occurred", err))