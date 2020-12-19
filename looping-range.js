function range(start, end, step) {
  let numList = [];
  if (!('undefined' in [start, end, step]) && (start < end) && (step !== 0 && step > 0)) {
    numList.push(start);
    for (let i = 1; (start + step * i) <= end; i++) {
      numList.push((start + step * i));
      // console.log(start + step * i);
    }
  }
  return numList;
}

console.log(range());
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));