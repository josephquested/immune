'use strict'

const returnRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const returnRandomDirection = () => {
  let direction = returnRandomInt(0, 3)
    if (direction === 0) return 'north'
    if (direction === 1) return 'east'
    if (direction === 2) return 'south'
    if (direction === 3) return 'west'
}

export default {
  "returnRandomInt": returnRandomInt,
  "returnRandomDirection": returnRandomDirection
}