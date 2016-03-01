export default (cellChain) => {
  let newSpeed = 200
  cellChain.forEach(()=> newSpeed -= 5)
  return newSpeed
}

