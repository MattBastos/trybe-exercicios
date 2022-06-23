const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  if (studentAnswers === 'N.A') {
    return 0;
  }
  if (rightAnswers === studentAnswers) {
    return 1;
  }
  return -0.5;
}

const countPoints = (rightAnswers, studentAnswers, callback) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const compareAnswers = callback(rightAnswers[i], studentAnswers[i]);
    count += compareAnswers;
  }
  return `${count} pontos`;
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));