const urlEncode = function(text) {
  let product = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      product += text[i];
    }
    else if (product.length !== 0 && (text[i + 1])) { 
      // text[i+1] detects whether there is another character after the current character. In other words, it checks whether the current letter is the last one. If the last character is a space, it will not be added to the product.
      product += '%20';
    }
  }
  return product;
};

// urlEncode('Lighthouse Labs');
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));