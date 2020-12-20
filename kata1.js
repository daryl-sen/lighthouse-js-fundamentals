const sumLargestNumbers = function(data) {
  let largest = data[0]; // arbituarily set largest value to be the first number in the array
  let second = data[0]; // same for second largest

  for (let number of data) {
    if (number > largest) {
      second = largest; // assign the current largest number to the 2nd largest
      largest = number; // assign the current number to the largest
    }
  }

  return largest + second;
}




console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));