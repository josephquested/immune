'use strict'
import $ from 'jquery'
import request from 'superagent'

export default () => {
  alert('immune system compromised! score: ' + $('#score').html())

  let name
  while (name === undefined) {
  name = prompt("what's your name?", "idk")
  }

  console.log('done picking name')
  alert(name)
  alert($('#score').html())

  // wtf aren;t they getting passed through sucessfully

  request
    .post('/scores')
    .send({name: name, score: $('#score').html()})
    .end((err, res) => {
      if (err) throw err
      window.location.replace('/scores')
    })
}