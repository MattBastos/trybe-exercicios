let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
};

let average = sum / numbers.length;

console.log(average);

if (average > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
};