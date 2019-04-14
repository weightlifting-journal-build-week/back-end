router = require('express').Router();

const Sets = require('./set-model');

router.get('/', async (req, res) => {
    try{
        sets = await Sets.find();
        res.status(200).json(sets);
    } catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;