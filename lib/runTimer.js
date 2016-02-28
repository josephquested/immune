'use strict'

import $ from 'jquery'

export default () => {
  window.setInterval(() => {
    let currentCount = Number($('#score').html()) + 1
    $('#score').html(currentCount)
  }, 1000)
}
