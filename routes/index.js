'use strict'

import { Router } from 'express'
import exphbs from 'express-handlebars'

let knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db/scores.sqlite'
  },
  useNullAsDefault: true
})

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/scores', (req, res) => {
  knex.select().table('Scores').then((scores) => {
    scores.sort((a, b) => { return parseInt(b.score) - parseInt(a.score)})
    scores = scores.slice(0, 10)
    res.render('scores', {scores: scores})
  })
})

router.post('/scores', (req, res) => {
  knex('Scores').insert({name: req.body.name, score: req.body.score})
  .then((user) => {
  res.send('sucessfully posted user')
  })
})

export default router
