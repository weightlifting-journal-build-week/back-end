const db = require('../../data/dbConfig');
const Workouts  = require('./workout-model');

describe('workout model testing', () => {

    beforeEach(async () => {
        await db('workouts').truncate()
        await db('exercises').truncate()
    })

    test('should add a workout', async () => {
        const workout = await Workouts.add({
              name: 'Cardio Day',
              date: 'Wednesday, April 17',
              user_id: 1
              });

        expect(workout.name).toBe('Cardio Day');
      
    })

    test('should find all workouts', async () => {
      const workouts = await Workouts.find()

      expect(workouts).toHaveLength(0)
    })

    test('should add an exercise to a workout', async () =>{
            await Workouts.add({
            name: 'Cardio Day',
            date: 'Wednesday, April 17',
            user_id: 1
            });

                await Workouts.addExerciseToWorkout({ 
                name: 'leg lifts',
                targetArea: 'Abs',
                workout_id: 1
            })

            const exercises = await Workouts.getWorkoutExercises(1)

            expect(exercises[0].name).toBe('leg lifts')
            

    })
    
    
});