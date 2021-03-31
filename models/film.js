const mongoose=require('mongoose');
const Joi = require('joi-oid');
const  date_validator = require("DateValidator").DateValidator;
const Reservation=require('./reservation');

const filmSchema = new mongoose.Schema({
    nom : {type : String , required : true},
    acteurs : {type : [String], validate :{ validator : function (v) {
        return v.length > 0
    }, message : "A acteurs must have one acteur "}} ,
    seances : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film"
    }
          /*{ type : [seanceSchema] ,  validate :{ validator : function (v) {
        return date_validator.validate(v.date )  
    }, message : " the date is not valid " }}*/,
    reservation : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation"
    }]
});


const Film =mongoose.model('Films', filmSchema);

let film_validate_schema= Joi.object({
     nom : Joi.string().required(),
     acteurs : Joi.array().items(Joi.string()),
     seances: Joi.objectId(),
     reservation : Joi.array().items(Joi.objectId())
})

let film_validate_schema_update= Joi.object({
    nom : Joi.string(),
    acteurs : Joi.array().items(Joi.string()),
    seances: Joi.array().items(Joi.object({
        date: Joi.date(),
        temps:Joi.number(),
        place : Joi.number()
    })) 
})
function validate_film(body) {
    return  film_validate_schema.validate(body)
}

function validate_update_film(body) {
    return film_validate_schema_update.validate(body)
}

module.exports.Film=Film;
module.exports.validate_film=validate_film;
module.exports.validate_update_film= validate_update_film;
