const skillsArray = ["Android", "iOS", "Architecture", "Teach", "Run"];

const phraseBuilder = (string) => {
  const firstPhrase = (name) => (`Tryber ${name} aqui!`);
  
  let result = `${firstPhrase(string)}

Minhas cinco principais habilidades são:`;

  skillsArray.forEach((skill, index) =>
  result = `${result}

- ${skill}`);

  result = `
${result}

#goTrybe`;

  return result;
}

console.log(phraseBuilder("Matthews"))