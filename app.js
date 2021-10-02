const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function checkIfBirthdayLucky(sum, luckyNumberValue) {
  if (sum && luckyNumberValue && luckyNumberValue >=0) {
    if (sum % luckyNumberValue === 0)
      output.innerText = "Yaay! your birthday is lucky 🥳";
    else output.innerText = "Nope, just you are 😉";
  } else output.innerText = "Please enter valid values 🙄!";
}

function getDobSum(dob) {
  dobValue = dob.replaceAll("-", "");
  // console.log(dobValue);

  let sum = 0;

  for (let digit of dobValue) {
    sum = sum + Number(digit);
  }

  return sum;
}

function getValues() {
  let dob = dateOfBirth.value;
  let luckyNumberValue = luckyNumber.value;

  let sum = getDobSum(dob);
  console.log(luckyNumberValue);
  checkIfBirthdayLucky(sum, luckyNumberValue);
}

checkBtn.addEventListener("click", getValues);
