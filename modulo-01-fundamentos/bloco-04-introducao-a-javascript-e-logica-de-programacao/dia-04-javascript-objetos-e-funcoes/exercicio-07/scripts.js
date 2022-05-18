let infoMargarida = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  rerorrente: 'Sim',
};

let infoTioPatinhas = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  rerorrente: 'Sim',
};

for (let key in infoMargarida) {
  if (
    key === 'recorrente'
    && infoMargarida.key === 'Sim'
    && infoTioPatinhas.key === 'Sim'
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(infoMargarida[key] + " e " + infoTioPatinhas[key]);
  };
};