const mongoose = require('mongoose');
const Schema = mongoose.Schema 
const PirateSchema = new mongoose.Schema({
    PirateName: { 
        type: String ,
        required: true,
        minlength: [3, "pirate name must be at least 3 or more characters"]
    },
    PirateImageUrl: {
        type: String,
        required: true,
        minlength: [5, "you need at least 5 chracters for url"]
    },
    PiratePosition: {
        type: String,
        required: [true," must have a pos"]
    },
    PiratePhrase: {
        type: String,
        required: [true," must have a phrase"]
    },
    PirateChestNumber: {
        type: Number,
        required: [true," must have a number "]
    },
    PiratePegLeg:{
        type:Boolean,
        default: false,
    },
    PirateHookHand:{
        type:Boolean,
        default: false,
    },

    PirateEyePatch:{
        type:Boolean,
        default: false,
    }


    


}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);