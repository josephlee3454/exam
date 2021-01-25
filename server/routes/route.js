const  PirateController = require("../controllers/pirates");



module.exports = (app) => {
    app.get("/pirates/index", PirateController.index);
    app.post("/pirates", PirateController.createPirate);
    app.get("/pirates", PirateController.allPirates);
    app.get("/pirates/:id", PirateController.onePirate);
    app.delete("/pirates/:id", PirateController.deletePirates);
    app.put("/pirates/:id", PirateController.updatePirates);

}

