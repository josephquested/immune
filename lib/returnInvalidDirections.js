'use strict'

import $ from 'jquery'

export default (currentTile) => {
  let surroundingTiles = [$(currentTile).closest('tr').prev().children().eq($(currentTile).index()), $(currentTile).next(), $(currentTile).closest('tr').next().children().eq($(currentTile).index()), $(currentTile).prev()]
  let directions = ['north', 'east', 'south', 'west']
  let invalidDirections = []
  surroundingTiles.forEach((tile) => {
    if (!$(tile).is('td')) {
      invalidDirections.push(directions[surroundingTiles.indexOf(tile)])
    }
  })
  return invalidDirections
}