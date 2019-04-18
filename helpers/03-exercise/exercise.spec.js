const db = require('../../data/dbConfig');
const Exercises  = require('./exercise-model');

describe('exercise model testing', () => {

    beforeEach(async () => {
        await db('exercises').truncate()
    })

    test('should add an exercise', async () => {
        const exercise = await Exercises.add({  name: 'tummytuck',
                                                targetArea: 'tummy',
                                                workout_id: 1
                                           });

        expect(exercise.name).toBe('tummytuck');
      
    })
    
})