const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('../01-user/user-model');
const db = require('../../data/dbConfig.js')

const { generateToken } = require('./token');


router.post('/register', async (req, res) => {
    try {
        let user = req.body;
        if(user.username && user.password){
            const hash = bcrypt.hashSync(user.password, 10);
            user.password = hash;
            let saved = await Users.add(user)
            res.status(201).json(saved)
        } else {
            res.status(404).send("fill out the required fields")
        }
    } catch(error){
        res.status(500).json(error)
    }
});


router.post('/login', async (req, res) => {

    try{
        const {username, password } = req.body
        user = await Users.getBy({ username });
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({ message: `welcome, here is your token ${user.username}`, token });
        } else {
            res.status(401).json({ message: 'invalid credentials' })
        }

    } catch(error){
        res.status(500).json(error)
    }
})

module.exports = router;