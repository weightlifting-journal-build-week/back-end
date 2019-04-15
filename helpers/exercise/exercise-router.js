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

router.post('/', async (req, res) => {
    try{
        exercise = await Exercises.add(req.body);
        res.status(200).json(exercise);
    } catch(error){
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        count = await Exercises.destroy(req.params.id);
        if(count > 0){
            res.status(200).json('exercise destroyed')
        } else {
            res.status(401).json('could not find exercise')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;