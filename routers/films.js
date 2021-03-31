const router = require('express').Router();
const {Film, validate_film,validate_update_film} = require('../models/film');
const _ = require('lodash');
router.get('', async (req,res) => {
    
    res.send(await Film.find());
});

router.get('/:id',async (req,res) => {
    res.send(await Film.findById(req.params.id));
})

router.post('', async (req,res) => {
    let validation = validate_film(req.body);
    if(validation.error){
        return res.status(400).send(validation.error.details[0].message);
    }
    
    let film = new Film(_.pick(req.body , 'nom','acteurs','seances'));
    try {
        film = await film.save();
    } catch (error) {
        res.status(400).send("save error BD :  "+error.message);
    }
    
    res.send(film);


});

router.put('/:id',async (req,res) => {
    let validation = validate_film_update(req.body);
    if(validation.error){
        return res.status(400).send(validation.error.details[0].message);
    }
    
    let film = await Film.findById(req.params.id);
    film=_.merge(film,req.body);
    film=await film.save();
    res.send(film); 
});

router.get('/:id',async (req,res) => {
    res.send(await Film.findById(req.params.id));
});

router.delete('/:id ',async (req,res) => {
    let film = await Film.findById(req.params.id);
    await Film.deleteOne({_id : req.params.id});
    res.send(film);

});

module.exports= router;