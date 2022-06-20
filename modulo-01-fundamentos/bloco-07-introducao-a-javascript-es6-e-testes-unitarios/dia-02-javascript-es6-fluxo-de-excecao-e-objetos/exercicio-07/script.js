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

const lessonsAndStudents = (lesson, name) => {
  const allLessons = [];
  let students = 0;
  const valuesArray = Object.values(lesson);
  for (let i in valuesArray) {
    if (valuesArray[i].professor === name) {
      allLessons.push(valuesArray[i].materia);
      students += valuesArray[i].numeroDeEstudantes;
    }
  }
  return {materias: allLessons, estudantes: students};
};

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, lessonsAndStudents(allLessons, name));
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));