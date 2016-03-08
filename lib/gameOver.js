'use strict'
import $ from 'jquery'
import request from 'superagent'

export default () => {
  alert('immune system compromised! score: ' + $('#score').html())
  // request
  //   .post('/scores')
  //   .send($('#score').html())
  //   .end((err, res) => {
  //     if (err) throw err
  //     console.log(res)
  //   })

  window.location.replace('/scores')



}