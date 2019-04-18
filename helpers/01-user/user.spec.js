const db = require('../../data/dbConfig');
const Users = require('./user-model');
const Workouts = require('../02-workout/workout-model')

describe('user model testing', () => {

    beforeEach(async () => {
        await db('users').truncate()
        await db('workouts').truncate()
    })

    test('should add a user', async () => {
        const user = await Users.add({  
        fullname: 'Luke Skywalker', 
        email: 'chosenone@yahoo.com',
        username: 'chosenone',
        password: 'blue',
        height: 62,
        weight: 165
        })

        expect(user.password).toBe('blue');
      
    })

    test('should return db of users', async () => {
        const users = await Users.find();

        expect(users).toHaveLength(0)
    })

    test('should find a user by id', async () =>{
        await Users.add({  
            fullname: 'Luke Skywalker', 
            email: 'chosenone@yahoo.com',
            username: 'chosenone',
            password: 'blue',
            height: 62,
            weight: 165
            })
        const user = await Users.findById(1)

        expect(user.fullname).toEqual('Luke Skywalker')
    })
    
    test('should find a user by id', async () =>{
        await Users.add({  
            fullname: 'Luke Skywalker', 
            email: 'chosenone@yahoo.com',
            username: 'chosenone',
            password: 'blue',
            height: 62,
            weight: 165
            })

        const user = await Users.getBy({ email: 'chosenone@yahoo.com' })

        expect(user.fullname).toEqual('Luke Skywalker')
    })

    test('should destroy a user', async () =>{
        const user = await Users.add({  
            fullname: 'Luke Skywalker', 
            email: 'chosenone@yahoo.com',
            username: 'chosenone',
            password: 'blue',
            height: 62,
            weight: 165
            })
        expect(user.fullname).toEqual('Luke Skywalker')
        destroy = await Users.destroy(1)

        expect(destroy.fullname).toEqual(undefined)
    })

    test('should get workouts for a userID', async () => {
            await Users.add({  
            fullname: 'Luke Skywalker', 
            email: 'chosenone@yahoo.com',
            username: 'chosenone',
            password: 'blue',
            height: 62,
            weight: 165
            })

                await Workouts.add({
                    name: 'Cheat Day',
                    date: 'Wednesday, April 17',
                    user_id: 1
            })
        const workouts = await Users.getUserWorkouts(1)

        expect(workouts[0].user_id).toBe(1)
    });    
});