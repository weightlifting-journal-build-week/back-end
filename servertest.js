// Import

const db = knex(dbconfig.development);


const knex = require('knex');

const dbconfig = require('./knexfile');

const server = require('./server.js');
const request = require('supertest');
