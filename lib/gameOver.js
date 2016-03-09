'use strict'
import $ from 'jquery'
import request from 'superagent'

export default () => {
  $('.player').removeClass('player')
  let name = null
  name = prompt('immune system compromised! score: ' + $('#score').html() + ".\n" + "please enter your name...")

  if (name !== null && name !== '') {
    request
      .post('/scores')
      .type('form')
      .send({name: name, score: $('#score').html()})
      .end((err, res) => {
        if (err) throw err
        window.location.assign('/scores')
    })

  } else {
      location.reload()
  }
}
