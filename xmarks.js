const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves) {
  let coords = [0,0]; // x, y
  for (let move of moves) {
    switch (move) {
    case 'north':
      coords[1] += 1;
      break;
    case 'south':
      coords[1] -= 1;
      break;
    case 'east':
      coords[0] += 1;
      break;
    case 'west':
      coords[0] -= 1;
      break;
    default:
      return 'Error';
    }
  }
  return coords;
}

finalPosition(moves);
// console.log(finalPosition(moves));