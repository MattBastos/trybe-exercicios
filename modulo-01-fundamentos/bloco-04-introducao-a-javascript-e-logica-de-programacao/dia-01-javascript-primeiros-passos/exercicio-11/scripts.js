let angleA = 65;
let angleB = 180;
let angleC = 15;

let sumOfAngles = angleA + angleB + angleC;

let positiveAngles = angleA > 0 && angleB > 0 && angleC > 0;

if (positiveAngles) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Error: Invalid angle!");
};