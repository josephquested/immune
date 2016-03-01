'use strict'
import $ from 'jquery'

export default () => {
  let timerInterval = window.setInterval(() => {
    $('#timer').html(Number($('#timer').html()) + 1)
  }, 1000)
}
