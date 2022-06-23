const checkNumber = (comparedNumber ,numberDrawn) => comparedNumber === numberDrawn;

const raffleResult = (comparedNumber, callback) => {
  const generatedNumber = Math.floor((Math.random() * 5) + 1);
  return callback(comparedNumber, generatedNumber) ? 'Congratulations, you won!' : 'Try again!';
}

console.log(raffleResult(1, checkNumber));