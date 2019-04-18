const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');


describe('server testing', () =>{
    beforeEach(async () => {
        await db('users').truncate();
    });

    it("should return a token error", async () => {
        const response = await request(server).get('/users')

        expect(response.body.error).toBe("No token provided")
    });

    it('Tests register, login and get requests with a set token', async () => {
        const register = await request(server).post('/auth/register').send({    
        fullname: "Darth Vader",
        email: "killingyounglings@yahoo.com",
        username: "childslayer",
        password: "red",
        height: 72,
        weight: 250
        })

        const login = await request(server).post('/auth/login').send({
        username: 'childslayer',
        password: 'red',
        })

        const users = await request(server).get('/users').set(
            {
                Authorization: login.body.token
            }
        )

        expect(users.status).toEqual(200)

    })

    it('/exercises', async () => {
        const register = await request(server).post('/auth/register').send({    
            fullname: "Darth Vader",
            email: "killingyounglings@yahoo.com",
            username: "childslayer",
            password: "red",
            height: 72,
            weight: 250
            })
    
            const login = await request(server).post('/auth/login').send({
            username: 'childslayer',
            password: 'red',
            })

            const exercises = await request(server).get('/exercises').set(
                {
                    Authorization: login.body.token
                }
            )
    
            expect(exercises.status).toEqual(200)
    });

    it('/workouts', async () => {
        const register = await request(server).post('/auth/register').send({    
            fullname: "Darth Vader",
            email: "killingyounglings@yahoo.com",
            username: "childslayer",
            password: "red",
            height: 72,
            weight: 250
            })
    
            const login = await request(server).post('/auth/login').send({
            username: 'childslayer',
            password: 'red',
            })

            const workouts = await request(server).get('/workouts').set(
                {
                    Authorization: login.body.token
                }
            )
    
            expect(workouts.status).toEqual(200)
    })

    it('/sets', async () => {
        const register = await request(server).post('/auth/register').send({    
            fullname: "Darth Vader",
            email: "killingyounglings@yahoo.com",
            username: "childslayer",
            password: "red",
            height: 72,
            weight: 250
            })
    
            const login = await request(server).post('/auth/login').send({
            username: 'childslayer',
            password: 'red',
            })

            const sets = await request(server).get('/sets').set(
                {
                    Authorization: login.body.token
                }
            )
    
            expect(sets.status).toEqual(200)
    })



    

});