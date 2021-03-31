const router = require('express').Router();
const {Reservation,reservation_validate,reservation_validate_update}= require('../models/reservation');
const _ = require('lodash');
const { Film } = require('../models/film');

router.get('',async (req,res) => {
    res.send(await Reservation.find());
});

router.get(':id' , async (req,res) => {
    res.send(await Reservation.findById(req.params.id));
} );

router.post('', async (req,res) => {
    let validation = reservation_validate(req.body);
    if(validation.error){
        return res.status(400).send(validation.error.details[0].message);
    }
    
    let reservation = new Reservation({
           seance : req.body.seance
    });
        
    try {
       // reservation = await Reservation.findById(Film)
        reservation = await Reservation.save();
    } catch (error) {
        res.status(400).send("save error BD :  "+error.message);
    }
    //let film=Film.findById(Film);
    console.log(reservation);
    res.send(reservation);

});

router.delete('/:id ',async (req,res) => {
    let reservation = await Reservation.findById(req.params.id);
    await Reservation.deleteOne({_id : req.params.id});
    res.send(reservation);

});

module.exports=router;