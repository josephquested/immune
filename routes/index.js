'use strict'

import { Router } from 'express'
import exphbs from 'express-handlebars'

const router = Router()

router.get('/', (req, res) => {
  res.render('home')
})

export default router
