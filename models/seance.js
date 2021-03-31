const mongoose=require('mongoose');
const Joi = require('joi-oid')

const  date_validator = require("DateValidator").DateValidator;
const Film =require('./film');
const Reservation=require('./reservation');
const seanceSchema = new mongoose.Schema({
    date :Date,
    temps:Number,
    place:Number,
    films:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film"
    }],

    reservations:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation"
        }
    ]
}) ;

let seance_validate_schema= Joi.object({
        date : Joi.date().required(),
        temps:Joi.number(),
        place : Joi.number(),
        films : Joi.array().items(Joi.objectId()),
        reservations : Joi.array().items(Joi.objectId())
    
})

let seance_validate_schema_update= Joi.object({
    date : Joi.date(),
    temps:Joi.number(),
    place : Joi.number(),
    films : Joi.array().items(Joi.objectId()),
    reservations : Joi.array().items(Joi.objectId())

})
function seance_validate(body) {
    return seance_validate_schema.validate(body)
}


function seance_validate_update(body) {
    return  seance_validate_schema_update.validate(body )
}

const Seance = mongoose.model('Seance',seanceSchema);
module.exports.Seance=Seance;
module.exports.seance_validate=seance_validate;
module.exports.seance_validate_update=seance_validate_update;