const db = require('../../data/dbConfig');

module.exports = {
    find,
    add
}

function find(){
    return db('workouts')
}

async function add(workout){
    const [id] = await db('workouts').insert(workout);

    return db('workouts').where({ id }).first()
}
