const carPassing = function (cars, speed) {
  let carList = [];
  for (let car of cars) {
    carList.push(car);
  }
  carList.push({ time: Date.now(), speed: speed });
  return carList;
}