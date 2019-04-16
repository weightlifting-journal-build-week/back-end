const db = require('../../data/dbConfig');

module.exports = {
    find,
    add,
    destroy,
    getExerciseSets,
    update
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

function getExerciseSets(exerciseID){
    return db('sets')
        .join('exercises', 'exercises.id', 'sets.exercise_id')
        .select('sets.*')
        .where('sets.exercise_id', exerciseID)
}

function update(id, changes){
    return db('exercises').where({ id }).update(changes)
}