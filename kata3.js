const numberOfVowels = function(data) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];


  for (let letter of data) { // loop through every letter in the argument
    for (let vowel of vowels) { // in every loop through letters in the arugment, loop through the vowels
      if (letter == vowel) {
        count++;
      }
    }
  }
  return count;
};

// numberOfVowels('orange');
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));