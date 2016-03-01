'use strict'
import $ from 'jquery'

export default () => {
  let score = 0
  let scoreInterval = window.setInterval(() => {
    $('#score').html(score += 1 + window.cellChain.length)
  }, 5000)
}
