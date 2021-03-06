const coords = [1, 1]
let currentDirection = 'N'
const instructions = [
  'L5',
  'R1',
  'R3',
  'L4',
  'R3',
  'R1',
  'L3',
  'L2',
  'R3',
  'L5',
  'L1',
  'L2',
  'R5',
  'L1',
  'R5',
  'R1',
  'L4',
  'R1',
  'R3',
  'L4',
  'L1',
  'R2',
  'R5',
  'R3',
  'R1',
  'R1',
  'L1',
  'R1',
  'L1',
  'L2',
  'L1',
  'R2',
  'L5',
  'L188',
  'L4',
  'R1',
  'R4',
  'L3',
  'R47',
  'R1',
  'L1',
  'R77',
  'R5',
  'L2',
  'R1',
  'L2',
  'R4',
  'L5',
  'L1',
  'R3',
  'R187',
  'L4',
  'L3',
  'L3',
  'R2',
  'L3',
  'L5',
  'L4',
  'L4',
  'R1',
  'R5',
  'L4',
  'L3',
  'L3',
  'L3',
  'L2',
  'L5',
  'R1',
  'L2',
  'R5',
  'L3',
  'L4',
  'R4',
  'L5',
  'R3',
  'R4',
  'L2',
  'L1',
  'L4',
  'R1',
  'L3',
  'R1',
  'R3',
  'L2',
  'R1',
  'R4',
  'R5',
  'L3',
  'R5',
  'R3',
  'L3',
  'R4',
  'L2',
  'L5',
  'L1',
  'L1',
  'R3',
  'R1',
  'L4',
  'R3',
  'R3',
  'L2',
  'R5',
  'R4',
  'R1',
  'R3',
  'L4',
  'R3',
  'R3',
  'L2',
  'L4',
  'L5',
  'R1',
  'L4',
  'L5',
  'R4',
  'L2',
  'L1',
  'L3',
  'L3',
  'L5',
  'R3',
  'L4',
  'L3',
  'R5',
  'R4',
  'R2',
  'L4',
  'R2',
  'R3',
  'L3',
  'R4',
  'L1',
  'L3',
  'R2',
  'R1',
  'R5',
  'L4',
  'L5',
  'L5',
  'R4',
  'L5',
  'L2',
  'L4',
  'R4',
  'R4',
  'R1',
  'L3',
  'L2',
  'L4',
  'R3',
]

function turnLeft() {
  switch (currentDirection) {
    case 'N':
      currentDirection = 'W'
      break
    case 'W':
      currentDirection = 'S'
      break
    case 'S':
      currentDirection = 'E'
      break
    case 'E':
      currentDirection = 'N'
      break
    default:
      break
  }
}
function turnRight() {
  switch (currentDirection) {
    case 'N':
      currentDirection = 'E'
      break
    case 'W':
      currentDirection = 'N'
      break
    case 'S':
      currentDirection = 'W'
      break
    case 'E':
      currentDirection = 'S'
      break
    default:
      break
  }
}
function move(direction, steps) {
  if (direction === 'L') turnLeft()
  if (direction === 'R') turnRight()

  switch (currentDirection) {
    case 'N':
      coords[0] += steps
      break
    case 'W':
      coords[1] -= steps
      break
    case 'S':
      coords[0] -= steps
      break
    case 'E':
      coords[1] += steps
      break
    default:
      break
  }
}

instructions.forEach(item => {
  const direction = item.substring(0, 1)

  const steps = Number(item.substring(1))

  console.log(`Calculating ${item}`)

  move(direction, steps)

  console.log(`New Coords: ${coords}`)
})

console.log(`Final Coords: ${coords}`)

const distance = Math.abs(1 - coords[0]) + Math.abs(1 - coords[1])
console.log(`Total distance: ${distance}`)
