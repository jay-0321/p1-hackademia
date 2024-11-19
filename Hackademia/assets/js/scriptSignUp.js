const submitEl = document.querySelector('#submit');
const submitE2 = document.querySelector('#signUp');
const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#password');
const submissionResponseEl = document.querySelector('#response');
const submissionResponseE2 = document.querySelector('#responsesignUp');

//user new
const userInput1 = document.querySelector('#user');
const EmailInput1 = document.querySelector('#email');
const passwordInput1 = document.querySelector('#password');





// array to test
let userRegisted = [
  { user: 'danielle', email: 'dani@example.com', password: '123456' },
  { user: 'abrahan', email: 'abrahan@example.com', password: '123456' },
  { user: 'kevin', email: 'kevin@example.com', password: '123456' }
];


function checkUser(userName) {
 
  for (let users of userRegisted) {
      if (users.user == userName) {
          return true; 
      }
  }
  return false; 
}


function addUser() {
  event.preventDefault();
  console.log(`intenta registrar. ${userInput1.value.trim()}`);

  if (checkUser(userInput1.value.trim())) {
      console.log('username already registed.');
      response =
  'Username is not available, please Choose another.';
      submissionResponseE2.textContent = response;
  } else {
      // Agregar el nuevo usuario al arreglo de registrados
      userRegisted.push({ user: userInput1.value.trim(), email: EmailInput1.value.trim(), password: passwordInput1.value.trim()});
   
      console.log(userRegisted);
      localStorage.setItem('userLog', userInput1.value.trim());
      location.href ="threadsdw.html";

  }
}



// Add listener to submit element
submitE2.addEventListener('click', addUser);

