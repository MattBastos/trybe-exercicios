const elementH1 = document.createElement('h1');
elementH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementH1);

const elementMain = document.createElement('main');
elementMain.className = "main-content";
document.body.appendChild(elementMain);

const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = "center-content";
elementMain.appendChild(elementSectionCenter);

const paragraph = document.createElement('p');
paragraph.innerHTML = "Text";
elementSectionCenter.appendChild(paragraph);

const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = "left-content";
elementMain.appendChild(elementSectionLeft);

const elementSectionRight = document.createElement('section');
elementSectionRight.className = "right-content";
elementMain.appendChild(elementSectionRight);

const elementImg = document.createElement('img');
elementImg.className = "small-image";
elementImg.src = 'https://picsum.photos/200';
elementSectionLeft.appendChild(elementImg);

const elementUL = document.createElement('ul');
const numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let i in numbers) {
  const elementLI = document.createElement('li');
  elementLI.innerHTML = numbers[i];
  elementUL.appendChild(elementLI);
};

for (let i = 1; i <= 3; i += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = "Show " + i;
  elementMain.appendChild(elementH3);
};

const title = document.querySelector('h1');
title.className = "title";

const elementsH3 = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
  elementsH3[i].className = "description";
};

const sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);

const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

ul.lastChild.remove();
ul.lastChild.remove();