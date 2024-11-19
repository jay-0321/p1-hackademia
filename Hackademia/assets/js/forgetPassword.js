const submitEl = document.querySelector('#submitForget');
const emailInput = document.querySelector('#email');

const submissionResponseEl = document.querySelector('#response');


// array to test
let userRegisted = [
  { user: 'juan123', email: 'juan@example.com', password: '12345' },
  { user: 'maria456', email: 'maria@example.com', password: '123456' },
  { user: 'pedro789', email: 'pedro@example.com', password: '1234567' }
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


