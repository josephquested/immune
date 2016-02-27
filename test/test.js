import test from 'tape'
import request from 'supertest'

import app from '../index.js'

test('GET /', (assert) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .end((err, res) => {
      assert.error(err, 'No error')
      assert.end()
    })
})
