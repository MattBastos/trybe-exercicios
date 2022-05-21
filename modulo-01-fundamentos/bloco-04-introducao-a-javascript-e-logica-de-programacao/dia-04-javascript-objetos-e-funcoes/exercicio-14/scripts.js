function mostRepeated(numbers) {
  let repeatedNumber = 0;
  let indexOfRepeatedNumber = 0;
  let countNumber = 0;
  for (let index in numbers) {
    let verifyNumber = numbers[index];
    for (let index2 in numbers) {
      if (verifyNumber === numbers[index2]) {
        countNumber += 1;
      };
    };
    if (countNumber > repeatedNumber) {
      repeatedNumber = countNumber;
      indexOfRepeatedNumber = index;
    };
    countNumber = 0;
  };
  return numbers[indexOfRepeatedNumber];
};

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));