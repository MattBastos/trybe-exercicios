const longestWord = (phrase) => {
  let wordArray = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));