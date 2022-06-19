const lesson1 = {
  materia: 'Matemática',
  numeroDeEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã'
};

const lesson2 = {
  materia: 'História',
  numeroDeEstudantes: 20,
  professor: 'Carlos'
};

const lesson3 = {
  materia: 'Matemática',
  numeroDeEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite'
};

const addNewKey = (lesson, key, value) => lesson[key] = value;
addNewKey(lesson2, 'turno', 'noite');

const listKeys = (lesson) => Object.keys(lesson);
console.log(listKeys(lesson2));

const listValues = (lesson) => Object.values(lesson);
console.log(listValues(lesson2));

const objSize = (lesson) => Object.keys(lesson).length;
console.log(objSize(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getNumberOfStudents = (lessons) => {
  let totalStudants = 0;
  const arrayOfKeys = Object.keys(lessons);

  for (let i in arrayOfKeys) {
    totalStudants += lessons[arrayOfKeys[i]].numeroDeEstudantes;
  }
  return totalStudants;
}
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (lesson, number) => Object.values(lesson)[number];
console.log(getValueByNumber(lesson3, 0))

const verifyPair = (lesson, key, value) => {
  const keysAndValues = Object.entries(lesson);
  let isEqual = false;
  for (let i in keysAndValues) {
    if (keysAndValues[i][0] === key && keysAndValues[i][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
}
console.log(verifyPair(lesson1, 'turno', 'manhã'));