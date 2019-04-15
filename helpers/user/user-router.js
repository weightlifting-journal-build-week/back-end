const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./user-model');

const { authenticate } = require('../auth/auth-model');
const { generateToken } = require('../auth/token');

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

router.post('/register', async (req, res) => {
    try {
        user = await Users.add(req.body)
        res.status(200).json(user)
    } catch(error){
        res.status(500).json(error)
    }
})



router.delete('/:id', async (req, res) => {
    try {
        user = await Users.destroy(req.params.id)
        if(user > 0){
            res.status(200).send('user destroyed')
        } else {
            res.status(404).send('user not found')
        }
    } catch(error){
        res.status(500).send(error)
    }
})


router.get('/:id/workouts/', async (req, res) => {
    try{
        let user = await Users.getUserWithWorkouts(req.params.id)
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