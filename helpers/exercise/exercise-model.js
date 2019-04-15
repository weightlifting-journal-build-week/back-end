const db = require('../../data/dbConfig');

module.exports = {
    find,
    add,
    destroy
}

function find(){
    return db('exercises');
}

async function add(exercise){
    const [id] = await db('exercises').insert(exercise);

    return db('exercises').where({ id }).first()
}

function destroy(id){
    return db('exercises').where({ id }).del()
}