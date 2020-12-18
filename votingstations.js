const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let accepted = [];
  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === 'community centre' || station[2] === 'school')) {
      // console.log(station[0]);
      // console.log(station[2]);
      accepted.push(station[0]);
    }
  }
  return accepted;
}

console.log(chooseStations(stations));
