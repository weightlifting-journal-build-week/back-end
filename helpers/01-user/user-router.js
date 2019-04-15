const router = require('express').Router();
const Users = require('./user-model');

const { authenticate } = require('../00-auth/auth-model');



router.get('/', async (req, res) => {
    try{
        users = await Users.find();
        res.status(200).json(users);
    } catch(error){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        user = await Users.findById(req.params.id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).send('couldnt find user')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/:id/workouts/', async (req, res) => {
    try{
        let user = await Users.getUserWorkouts(req.params.id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).send('user workouts not found')
        }
    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;