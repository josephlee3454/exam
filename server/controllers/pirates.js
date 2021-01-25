
const { Pirate } = require("../models/pirate")// basically like import but in node format 

module.exports.index = (req,res) => {
    res.json({"message": "hello world"});
},

module.exports.createPirate = (request, response) => {

    Pirate.create(request.body)
        .then(pirates => response.json(pirates))
        .catch(err => response.status(400).json(err));
},
module.exports.onePirate = (req,res)=>{
    Pirate.findById(req.params.id)
        .then( pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));

},


module.exports.allPirates = (req,res)=>{
    Pirate.find({})
        .then(pirates => res.json(pirates))
        .catch(err => res.status(400).json(err));


}


module.exports.updatePirates = (req,res)=>{
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(pirates => res.json(pirates))
        .catch(err => res.status(400).json(err));


}


module.exports.deletePirates = (req,res)=>{
    Pirate.deleteOne({_id: req.params.id})
        .then(pirates => res.json(pirates))
        .catch(err => res.status(400).json(err));


}
