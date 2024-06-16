const express = require('express')

const {
    httpGetAllPlanets,
} = require('./planets.c')

const planetsRouter = express.Router()

planetsRouter.get('/', httpGetAllPlanets)

module.exports = planetsRouter;
