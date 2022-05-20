function smallerIndex(numbers) {
  let smaller = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (smaller > numbers[i]) {
      smaller = i;
    };
  };
  return smaller;
};

console.log(smallerNumber([2, 4, 6, 7, 10, 0, -3]));