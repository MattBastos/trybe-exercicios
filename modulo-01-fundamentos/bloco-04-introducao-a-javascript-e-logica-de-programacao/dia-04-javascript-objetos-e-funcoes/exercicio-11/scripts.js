function higherIndex(numbers) {
  let higherIndex = 0;
  for (let i in numbers) {
    if (numbers[higherIndex] < numbers[i]) {
      higherIndex = i;
    };
  };
  return higherIndex;
};

console.log(higherIndex([2, 3, 6, 7, 10, 1]));