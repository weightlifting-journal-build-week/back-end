router = require('express').Router();

const Exercises = require('./exercise-model');

router.get('/', async (req, res) => {
    try{
        exercises = await Exercises.find();
        res.status(200).json(exercises);
    } catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;