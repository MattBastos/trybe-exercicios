function palindromeChecker(word) {
  let reverse = word.split('').reverse().join('');
  if (word === reverse) {
    return true;
  } else {
    return false;
  };
};

console.log(palindromeChecker('arara'));
console.log(palindromeChecker('desenvolvimento'));