function biggestName(names) {
  let greatName = names[0];
  for (let i in names) {
    if (greatName.length < names[i].length) {
      greatName = names[i];
    };
  };
  return greatName;
};

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));