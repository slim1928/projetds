const router = require('express').Router();
const _ =require('lodash');
const {Seance , seance_validate , seance_validate_update} = require('../models/seance');

router.get('' , async (req,res) => {
    res.send(await Seance.find());

})

router.get('/:id',async (req,res) => {
    res.send(await Seance.findById(req.params.id));
})

router.post('', async (req,res) => {
    let validation = seance_validate(req.body);
    if(validation.error){
        return res.status(400).send(validation.error.details[0].message);
    }
    
    let seance = new Seance(_.pick(req.body , 'date','temps', 'place','films','reservations'));
    try {
        seance = await seance.save();
    } catch (error) {
        res.status(400).send("save error BD :  "+error.message);
    }
    
    res.send(seance);


});

module.exports=router;