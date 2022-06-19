const verifyInputs = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error('Informe números nos campos obrigatórios!');
  }

  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Informe apenas números nos campos obrigatórios!');
  }
};



const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyInputs(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerText = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerText = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};

console.log(sum(1, 2));