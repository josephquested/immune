'use strict'
import $ from 'jquery'
import request from 'superagent'

export default () => {
  let name = null
  name = prompt('immune system compromised! score: ' + $('#score').html() + ".\n" + "please enter your name...")
  if (name === null || name === '') name = prompt('I said enter your name, numbskull.')
  if (name === null || name === '') alert("fine, be that way.")

console.log("NAME", name)
  if (name !== null && name !== '') {
    request
      .post('/scores')
      .type('form')
      .send({name: name, score: $('#score').html()})
      .end((err, res) => {
        if (err) throw err
        window.location.replace('/scores')
    })

  } else {
      location.reload()
  }
}