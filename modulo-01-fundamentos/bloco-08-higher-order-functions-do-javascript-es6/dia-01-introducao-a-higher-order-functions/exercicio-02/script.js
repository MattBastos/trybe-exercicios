const employeeData = (fullName) => {
  const email = `${fullName.toLowerCase().replace(' ', '_')}@trybe.com`;
  return {fullName, email};
}

const newEmployee = (callback) => {
  const employees = {
    id1: callback('Matthews Bastos')
  };
  return employees
}