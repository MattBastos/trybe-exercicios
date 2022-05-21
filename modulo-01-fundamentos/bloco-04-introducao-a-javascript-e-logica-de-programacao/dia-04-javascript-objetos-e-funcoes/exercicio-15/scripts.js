function sumNumbers(numbers) {
  let total = 0;
  for (let i = 1; i <= numbers; i += 1) {
    total += i;
  };
  return total;
};

console.log(sumNumbers(5));