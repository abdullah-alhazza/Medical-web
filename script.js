const form = document.getElementById('form');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const psw-repeat = document.getElementById('psw-repeat');

form.addEventListener('Register', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  // get the values forms the inputs

  const emailValue = email.value.trim();
  const pswValue = psw.value.trim();
  const psw-repeatValue = psw-repeat.value.trim();
   
if(emailValue === ' ') {
  setError(email, 'Email cannot be blank');
} else if(!isEmail(emailValue)) {
  setErrorFor(email, 'Email is not valid');
} else {
  setSuccessFor(email);
}
  
  if(pswValue === ' '){
    setErrorFor(psw, 'password cannot be blank');
  } else {
    setSuccessFor(psw);
  }
  if(psw-repeatValue === ' ') {
    setErrorFor(psw-repeat, 'passwords cannot be blank');
  } else if(pswValue !== psw-repeatValue) {
    setErrorFor(psw-repeat, 'passwords does not match');
  } else {
    setSuccessFor(psw-repeat);
  }
}
//##################
function setErrorFor(input, message) {
  const formControl = input.parentElement;  //.form-control\
  const small = formControl.querySelector('small');
  
  //add error message inside small 
  small.innerText = message;
  
  //add error class 
  formControl.className = 'form-control error';
  
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// for check email 
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}