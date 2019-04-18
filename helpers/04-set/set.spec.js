const db = require('../../data/dbConfig');
const Sets  = require('./set-model');

describe('set model testing', () => {

    beforeEach(async () => {
        await db('sets').truncate()
    })

    test('should add a set', async () => {
        const set = await Sets.add({  reps: 101,
                                           weight: 199,
                                           exercise_id: 1
                                           });

        expect(set.reps).toEqual(101);
      
    })
    
})