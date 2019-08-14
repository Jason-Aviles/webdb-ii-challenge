const express = require('express');
const helmet = require('helmet');

const Router = require('../router/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', Router);

module.exports = server;