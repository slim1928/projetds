const mongoose=require('mongoose');
const Joi = require('joi-oid')
const  date_validator = require("DateValidator").DateValidator;
const Film = require('./film');
const Seance =require('./seance');

const reservationSchema= new mongoose.Schema({

    seance : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Seance"
    }

});

let reservation_validate_schema= {
       seance: Joi.objectId()
}          

    
    function reservation_validate(body) {
        return Joi.validate(body, reservation_validate_schema)
    }


    

const Reservation = mongoose.model('reservation',reservationSchema);

module.exports.Reservation=Reservation;
module.exports.reservation_validate = reservation_validate;
