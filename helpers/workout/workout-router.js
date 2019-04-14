router = require('express').Router();

const Workouts = require('./workout-model');

router.get('/', async (req, res) => {
    try{
        workouts = await Workouts.find();
        res.status(200).json(workouts);
    } catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;