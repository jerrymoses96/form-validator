const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // using constraints api
  isValid = form.checkValidity();
  // style main message for an error
  if(!isValid){
    message.textContent = "please fill out all fields ";
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';

  }
// check to see if passwords match
if(password1El.value === password2El.value){
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
} else{
    passwordsMatch = false;
    message.textContent = 'make sure passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';

} 
// if form is valid and passwords match
if(isValid && passwordsMatch){
    message.textContent = 'successfully registered';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green'; 


}


}

function processFormData(e) {
  e.preventDefault(); // prevent default form submission
  // validate form
  validateForm();
}

// event listener

form.addEventListener("submit", processFormData);
