'use strict'

import $ from 'jquery'

export default () => {
  let timerInterval = window.setInterval(() => {
    let currentCount = Number($('#score').html()) + 1
    $('#score').html(currentCount)
  }, 1000)
}
