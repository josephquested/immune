'use strict'

import $ from 'jquery'

export default (exponent) => {
  for (let i = 0; i < exponent; i++) {
    $('#board').append('<tr id="row_' + i + '"></tr>')
    for (let j = 0; j < exponent; j++) {
      $('#row_' + i).append('<td id="cell_' + i + '_' + j + '"></td>')
    }
  }
}