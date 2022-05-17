let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
  };
};

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < smallestWord.length) {
    smallestWord = array[i];
  };
};

console.log(biggestWord);
console.log(smallestWord);