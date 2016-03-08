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
    let sortedScores = []
    scores.forEach((item) => {
      // sort the scores, maybe using sortArray()
    })

  res.render('scores', {scores: scores})
  })
})

router.post('/scores', (req, res) => {
  console.log(req.body.name)
  console.log(req.body.score)
  // ^^ these aren't actually getting the information, something about url encodinfg maybe
  // knex('Scores').insert({name: req.body.name, score: req.body.score})
  // .then((user) => {
  res.send('sucessfully posted user')
  // })
})

export default router
