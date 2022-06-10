const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo'
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom'
};

const listOfSkills = (obj) => {
  const skills = Object.keys(obj);
  const skillsGrade = Object.values(obj);
  for (const i in skills) {
    console.log(`${skills[i]}, Nível: ${skillsGrade[i]}`);
  }
}

console.log('Estudante 1:');
listOfSkills(student2);