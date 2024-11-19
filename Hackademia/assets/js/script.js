const submitEl = document.querySelector('#submit');

const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#password');
const submissionResponseEl = document.querySelector('#response');




// array to test
let userRegisted = [
  { user: 'juan123', email: 'juan@example.com', password: '123456' },
  { user: 'maria456', email: 'maria@example.com', password: '123456' },
  { user: 'pedro789', email: 'pedro@example.com', password: '123456' }
];





// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();


let response='';


for (let users of userRegisted) {
  if (users.user == userInput.value.trim() && users.password == passwordInput.value.trim()) {
    
    console.log('log in success');
  response =
  'Thank you Sign In Success ' +
  userInput.value +    
  '.';

  location.href ="threads.html";
  }
}

response =
  'Incorrect username or password.  ';


  submissionResponseEl.textContent = response;



}




function checkUser(userName) {
  // Comprobar si el nombre de usuario ya existe en el arreglo de usuarios registrados
  for (let users of userRegisted) {
      if (users.user == userName) {
          return true; // El usuario ya está registrado
      }
  }
  return false; 
}


function addUser() {
  event.preventDefault();
  console.log(`intenta registrar. ${userInput1.value.trim()}`);

  if (checkUser(userInput1.value.trim())) {
      
      response =
  'Username is not available choose ';
      submissionResponseE2.textContent = response;
  } else {
      // Agregar el nuevo usuario al arreglo de registrados
      userRegisted.push({ user: userInput1.value.trim(), email: EmailInput1.value.trim(), password: passwordInput1.value.trim()});

      location.href ="threads.html";

  }
}


// Add listener to submit element
submitEl.addEventListener('click', showResponse);

