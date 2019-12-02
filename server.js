const express = require('express')
const helmet = require('helmet')
const db = require('./data/db-config.js')
const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => res.send('DB4 Project'))

server.get('/recipes', (req, res) => {
  db('recipes')
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json(err))
})

module.exports = server
