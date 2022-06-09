let clickCount = 0;
let count = document.getElementById('count')
let button = document.getElementById('button');

button.addEventListener('click', () => count.innerHTML = clickCount += 1);