const whereCanIPark = function (spots, vehicle) {
  let coords;
  // extract the vehicle initial (r, s, or m), and convert it into the upper case, corresponding to an available spot for this specific vehicle type.
  const vehicle_type = vehicle[0].toUpperCase(); 

  function spotFitting(v_type, spot_status) {
    switch (v_type) {
      case 'R':
        (spot_status === 'R') ? true: false;
        break;
      case 'S':
        (spot_status === 'R' || spot_status === 'S') ? true: false;
        break;
      case 'M':
        (spot_status) ? true: false;
        break;
    }
  }

  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      if (spotFitting(vehicle_type, spots[y][x])) {
        coords = [x, y];
      }
    }
  }

  if (coords === undefined) {
    return false;
  }
  else {
    return coords;
  }
};







console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))