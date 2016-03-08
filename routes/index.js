'use strict'

import { Router } from 'express'
import exphbs from 'express-handlebars'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/scores', (req, res) => {
  console.log('hit the scores rout!')
  res.render('scores')
})

export default router
