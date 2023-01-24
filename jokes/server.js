const express = require("express");
const app = express();

require("./server/config/mongoose.config")


// req is short for request
// res is short for response
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./server/routes/jokes.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log(`Server is locked and loaded on port 8000!`));
