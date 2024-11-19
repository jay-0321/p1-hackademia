const submitEl = document.querySelector('#submit');

const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#password');
const submissionResponseEl = document.querySelector('#response');




// array to test
let userRegisted = [
  { user: 'danielle', email: 'dani@example.com', password: '123456' },
  { user: 'abrahan', email: 'abrahan@example.com', password: '123456' },
  { user: 'kevin', email: 'kevin@example.com', password: '123456' }
];





// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();


let response='';
let userfound=false;

for (let users of userRegisted) {
  if (users.user == userInput.value.trim() && users.password == passwordInput.value.trim()) {
    
    userfound=true;
  localStorage.setItem('userLog', userInput.value.trim());
  location.href ="threadsdw.html";
  }
}
if(!userfound){
response =
  'Incorrect username or password.  ';


  submissionResponseEl.textContent = response;
}


}



// Add listener to submit element
submitEl.addEventListener('click', showResponse);

