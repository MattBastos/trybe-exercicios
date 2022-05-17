let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let column = 1; column <= n; column += 1) {
    if (column === controlLeft || column === controlRight || line === middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    };
  };
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
};