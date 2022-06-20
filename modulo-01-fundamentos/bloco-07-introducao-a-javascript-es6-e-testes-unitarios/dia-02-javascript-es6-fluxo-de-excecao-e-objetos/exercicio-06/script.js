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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const mathStudents = (lesson) => {
  let students = 0;
  const keysArray = Object.keys(lesson);
  for (let i in keysArray) {
    if (lesson[keysArray[i]].materia === 'Matemática') {
      students += lesson[keysArray[i]].numeroDeEstudantes;
    }
  }
  return students;
};

console.log(mathStudents(allLessons));