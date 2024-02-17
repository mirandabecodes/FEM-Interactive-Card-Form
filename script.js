const nameInput = document.getElementById("card-name-input");
const cardNumInput = document.getElementById("card-number-input");
const cardMonthInput = document.getElementById("card-month-input");
const cardYearInput = document.getElementById("card-year-input");
const cardCvcInput = document.getElementById("card-cvc-input");
const submitButton = document.getElementById("submit-btn");
const cardNumDisplay = document.getElementById("cardNumberDisplay");
const cardNameDisplay = document.getElementById("cardNameDisplay");
const cardMonthDisplay = document.getElementById("cardMonthDisplay");
const cardYearDisplay = document.getElementById("cardYearDisplay");
const cardCvcDisplay = document.getElementById("cardCvcDisplay");
const completedState = document.getElementById("completed-state")
const cardForm = document.querySelector(".cardInfo");
const errorSpan = document.querySelectorAll(".error-text");
let fieldState = [];
let regexArr = [
    `^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$`,   /* Full name */
    `^([0-9]){16}$`,   /* 16-digits */
    `^([0][1-9])|[1][0-2]$`,   /* 2-digit month*/
    `^([0-2][0-9])$`,   /* 2-digit year */
    `^([0-9]){3}$`   /* 3-digit cvc */
  ]

nameInput.addEventListener("input", addName);

function addName() {
  let regex = new RegExp(regexArr[0]);
  let name = nameInput.value;
  let isFieldCorrect = validateFieldInput(regex, name);
  cardNameDisplay.innerHTML = name;
  if (!isFieldCorrect) {
    nameInput.nextElementSibling.style.display = "block" ;
    nameInput.nextElementSibling.innerHTML = "Not Correct";
    console.log(nameInput.nextElementSibling)
    // add clear so it deletes after
    // store Boolean in fieldState array
  }
}

function validateFieldInput(pattern, value) {
    let isCorrect = pattern.test(value);
    console.log(isCorrect)
}

cardNumInput.addEventListener("input", addNumber);

function addNumber() {
  let number = cardNumInput.value;
  cardNumDisplay.innerHTML = number;
}

cardMonthInput.addEventListener("input", addMonth);

function addMonth() {
  let month = cardMonthInput.value;
  cardMonthDisplay.innerHTML = month;
}

cardYearInput.addEventListener("input", addYear);

function addYear() {
  let year = cardYearInput.value;
  cardYearDisplay.innerHTML = year;
}

cardCvcInput.addEventListener("input", addCvc);

function addCvc() {
  let cvc = cardCvcInput.value;
  cardCvcDisplay.innerHTML = cvc;
}

submitButton.addEventListener("click", function (e){
    e.preventDefault()
    let fieldStatus = fieldState.every(field => field === true);
    console.log(fieldStatus);
    if (fieldStatus) {
    cardForm.style.display = "none";
    completedState.style.display = "block";
    // check errorSpan to see if empty, then submit 
    } 
});



