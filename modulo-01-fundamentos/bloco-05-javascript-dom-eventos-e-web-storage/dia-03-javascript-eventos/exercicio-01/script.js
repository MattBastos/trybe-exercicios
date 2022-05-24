function createDaysOfTheWeek() {
  let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  let weekDaysList = document.querySelector('.week-days');

  for (let i = 0; i < weekDays.length; i += 1) {
    let days = weekDays[i];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  let decDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let monthDaysList = document.querySelector('#days');

  for (let i = 0; i < decDays.length; i += 1) {
    let day = decDays[i];
    let dayItem = document.createElement('li');
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem);
    };
  };
};

createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton("Feriados");

function displayHolidays() {
  let holidayButton = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  holidayButton.addEventListener('click', function() {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === setNewColor) {
        holidays[i].style.backgroundColor = backgroundColor;
      } else {
        holidays[i].style.backgroundColor = setNewColor;
      };
    };
  });
};

displayHolidays();

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createFridayButton('Sexta-Feira');

function displayFridays(fridaysArray) {
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU';

  fridayButton.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newFridayText) {
        fridays[i].innerHTML = newFridayText;
      } else {
        fridays[i].innerHTML = fridaysArray[i];
      };
    };
  });
};

let decFridays = [4, 11, 18, 25];
displayFridays(decFridays);

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  });
};

dayMouseOver();
dayMouseOut();