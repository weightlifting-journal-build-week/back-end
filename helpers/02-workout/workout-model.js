const db = require('../../data/dbConfig');

module.exports = {
    find,
    add,
    destroy,
    getWorkoutExercises
}

function find(){
    return db('workouts')
}

async function add(workout){
    const [id] = await db('workouts').insert(workout);

    return db('workouts').where({ id }).first()
}

function destroy(id){
    return db('workouts').where({ id }).del()
}

function getWorkoutExercises(workoutID){
    return db('exercises')
        .join('workouts', 'workouts.id', 'exercises.workout_id')
        .select('exercises.*')
        .where('exercises.workout_id', workoutID)
}
