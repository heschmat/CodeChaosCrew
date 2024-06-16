const express = require('express')

const cors = require('cors')

const planetsRouter = require('./routes/planets/planets.r')

const app = express()
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())

// routes
app.use('/planets', planetsRouter)


module.exports = app;
