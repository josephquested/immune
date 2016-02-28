'use strict'

import $ from 'jquery'
import returnRandomEdgeCell from './returnRandomEdgeCell'

export default (enemy) => {
  let cell = returnRandomEdgeCell()
  $(cell).addClass('enemy')
  $(cell).addClass('lazy')
}