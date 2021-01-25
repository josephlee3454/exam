const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors")



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true})); //helps us read json properly 



require("./server/config/mongoose")
require ("./server/routes/route")(app);
app.listen(port, () => console.log(`Listening on port which is awesome fo the priate project: ${port}`) );