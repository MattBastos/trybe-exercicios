const verifyInputs = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error('Preencha os campos obrigatórios!');
  }
};

const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyInputs(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerText = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    document.getElementById('result').innerText = `Erro: ${error.message}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

console.log(sum(1, 2));