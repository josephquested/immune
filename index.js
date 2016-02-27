process.env.NODE_ENV = process.env.NODE_ENV || 'development'

import express from 'express'
import exphbs from 'express-handlebars'
import http from 'http'
import logger from 'morgan'
import parser from 'body-parser'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.load()

const app = express()
const server = http.createServer(app)

app.use(logger('dev'))
app.use(parser.urlencoded({ extended: false }))
app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.json({ error: error.message })
})
app.use(express.static(__dirname + '/public'))
app.use('/', routes)
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

if (require.main === module) {
  server.listen(3000, () => {
    let port = server.address().port

    console.log('immune system active on port %s', port)
  })
}

export default app
