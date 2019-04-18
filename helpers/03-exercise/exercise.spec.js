const db = require('../../data/dbConfig');
const Exercises  = require('./exercise-model');

describe('exercise model testing', () => {

    beforeEach(async () => {
        await db('exercises').truncate()
    })

    test('should add an exercise', async () => {
        const exercise = await Exercises.add({  
        name: 'tummytuck',
        targetArea: 'tummy',
        workout_id: 1
        });

        expect(exercise.name).toBe('tummytuck');
      
    })

    test('should add a set to a exercise', async () =>{
        await db('exercises').truncate();
        await db('sets').truncate();

        await Exercises.add({
        name: 'Jumpin Jacks',
        targetArea: 'Heart',
        workout_id: 1
        });

            await Exercises.addSetsToExercises({ 
            reps: 1,
            weight: 1,
            exercise_id: 1
        });

        const exercises = await Exercises.getExerciseSets(1)

        expect(exercises[0].reps).toBe(1)
        

})
    
})