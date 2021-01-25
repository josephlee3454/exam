const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pirate-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("you made a connection to the amazing database"))
    .catch(err => console.log("Oh shit Something went wrong when connecting to the database", err));

    require("../models/pirate");