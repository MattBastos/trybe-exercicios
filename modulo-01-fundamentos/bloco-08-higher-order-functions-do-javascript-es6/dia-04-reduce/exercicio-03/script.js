const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (names) => {
  return names.reduce((acc1, curr1) => 
    acc1 + curr1.split('').reduce((acc2, curr2) => {
      if (curr2 === 'a' || curr2 === 'A') {
        return acc2 + 1;
      }
      return acc2;
  }, 0), 0);
};

console.log(containsA(names));