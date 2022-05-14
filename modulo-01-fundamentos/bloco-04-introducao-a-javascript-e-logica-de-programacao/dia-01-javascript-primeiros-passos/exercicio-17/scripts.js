let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

if (grossSalary <= 1903.98) {
  aliquotIR = 0;
} else if (grossSalary <= 2826.65) {
  aliquotIR = (grossSalary * 0.075) - 142.80;
} else if (grossSalary <= 3751.05) {
  aliquotIR = (grossSalary * 0.15) - 354.80;
} else if (grossSalary <= 4664.68) {
  aliquotIR = (grossSalary * 0.225) - 636.13;
} else {
  aliquotIR = (grossSalary * 0.275) - 869.36;
};

let baseSalary = grossSalary - (aliquotINSS + aliquotIR);

console.log("Salary:", baseSalary);