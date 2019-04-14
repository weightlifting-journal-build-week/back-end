const express = require('express');
const helmet = require('helmet');

const server = express();
const userRouter = require('../helpers/user/user-router');
const workoutRouter = require('../helpers/workout/workout-router');
const exerciseRouter = require('../helpers/exercise/exercise-router');
const setRouter = require('../helpers/set/set-router');

server.use(express.json());
server.use(helmet());
server.use('/users', userRouter);
server.use('/workouts', workoutRouter);
server.use('/exercises', exerciseRouter);
server.use('/sets', setRouter);

server.get('/', (req, res) => {
    res.send("I'm on it boss!")
});

module.exports = server;