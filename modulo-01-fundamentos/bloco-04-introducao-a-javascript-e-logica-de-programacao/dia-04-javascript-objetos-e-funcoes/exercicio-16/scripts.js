function verifyWord(word, endOfTheWord) {
  word = word.split('');
  endOfTheWord = endOfTheWord.split('');
  control = true;
  for (let i = 0; i < endOfTheWord.length; i += 1) {
    if (word[word.length - endOfTheWord.length + i] != endOfTheWord[i]) {
      control = false;
    };
  };
  return control;
};

console.log(verifyWord('trybe', 'be'));