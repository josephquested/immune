'use strict'

const returnRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const returnRandomDirection = () => {
  let directions = ['north', 'east', 'south', 'west']
  console.log('IM RANDOM')
  return directions[returnRandomInt(0, 3)]
}

export default {
  "returnRandomInt": returnRandomInt,
  "returnRandomDirection": returnRandomDirection
}