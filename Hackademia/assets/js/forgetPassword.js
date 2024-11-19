const submitEl = document.querySelector('#submitForget');
const emailInput = document.querySelector('#email');

const submissionResponseEl = document.querySelector('#response');


// array to test
let userRegisted = [
  { user: 'danielle', email: 'dani@example.com', password: '123456' },
  { user: 'abrahan', email: 'abrahan@example.com', password: '123456' },
  { user: 'kevin', email: 'kevin@example.com', password: '123456' }
];


function checkUser() {
 
  for (let users of userRegisted) {
      if (users.email == emailInput.value.trim()) {
        
        password = users.password;
        response= 'your password is : ' + password;
        submissionResponseEl.textContent = response;
          return true; 
      }
  }

  response= 'There are no records with this email ' + emailInput.value.trim();
        submissionResponseEl.textContent = response;
  return false; 
}


// Add listener to submit element
submitEl.addEventListener('click', checkUser);


