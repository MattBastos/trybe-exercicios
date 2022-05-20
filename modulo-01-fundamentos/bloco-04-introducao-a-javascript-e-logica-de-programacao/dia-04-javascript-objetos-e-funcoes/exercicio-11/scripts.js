function higherIndex(numbers) {
  let higher = numbers[0];
  for (let i in numbers) {
    if (higher < numbers[i]) {
      higher = i;
    };
  };
  return higher;
};

console.log(higherNumber([2, 3, 6, 7, 10, 1]));