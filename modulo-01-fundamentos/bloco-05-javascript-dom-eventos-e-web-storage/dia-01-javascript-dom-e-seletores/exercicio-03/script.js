function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Trabalhando como Desenvolvedor Full Stack";
};
changeText();

function changeSquareColorToGreen() {
  let square = document.getElementsByClassName('main-content')[0];
  square.style.background = "rgb(76,164,109)";
};
changeSquareColorToGreen();

function changeSquareColorToWhite() {
  let square = document.getElementsByClassName('center-content')[0];
  square.style.background = "white";
};
changeSquareColorToWhite();

function fixTitleText() {
  let title = document.getElementsByClassName('title')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
};
fixTitleText();

function paragraphToUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
};
paragraphToUpperCase();

function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i += 1) {
    console.log(paragraphs[i].innerHTML);
  };
};
showParagraphs();