const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy,
    getExerciseSets,
    update,
    addSetsToExercises
  
}

function find(){
    return db('exercises');
}

function findById(id) {
    return db('exercises')
      .where({ id })
      .first();
  }

async function add(exercise){
    const [id] = await db('exercises').insert(exercise);

    return db('exercises').where({ id }).first()
}

function addSetsToExercises(set){
    return db('sets')
    .insert({
        reps: set.reps,
        weight: set.weight,
        exercise_id: set.exercise_id
    })
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
