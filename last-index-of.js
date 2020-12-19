function lastIndexOf(myArray, value) {
  let position = -1;
  for (let i = 0; i < myArray.length; i++) {
    if (value == myArray[i]) {
      position = i;
    }
  }
  // console.log(position);
  return position;
}