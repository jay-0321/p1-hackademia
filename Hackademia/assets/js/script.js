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




//user registed
const users ='abrahan';
const passwords = '123456';

console.log('referencia al javascript correctamente')

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();


  //check values in
console.log(userInput.value.trim());
console.log(passwordInput.value.trim());

let response='';
if(userInput.value.trim()==users && passwordInput.value.trim() == passwords){

  console.log('log in success');
  response =
  'Thank you Sign In Success ' +
  userInput.value +    
  '.';


}else{
  response =
  'Incorrect username or password. ';
}
submissionResponseEl.textContent = response;
  //console.log(event.type);
  //console.log(event.target);

}




// Arreglo de usuarios registrados (esto podría ser una base de datos en un caso real)
let userRegisted = [
  { user: 'juan123', email: 'juan@example.com', password: '123456' },
  { user: 'maria456', email: 'maria@example.com', password: '123456' },
  { user: 'pedro789', email: 'pedro@example.com', password: '123456' }
];

// Función que valida si el usuario ya está registrado
function checkUser(userName) {
  // Comprobar si el nombre de usuario ya existe en el arreglo de usuarios registrados
  for (let users of userRegisted) {
      if (users.user == userName) {
          return true; // El usuario ya está registrado
      }
  }
  return false; // El usuario no está registrado
}

// Función que maneja la lógica de registro
function addUser() {
  event.preventDefault();
  console.log(`intenta registrar. ${userInput1.value.trim()}`);

  if (checkUser(userInput1.value.trim())) {
      console.log('El nombre de usuario ya está registrado. Por favor, elige otro.');
      response =
  'Username is not available';
      submissionResponseE2.textContent = response;
  } else {
      // Agregar el nuevo usuario al arreglo de registrados
      userRegisted.push({ user: userInput1.value.trim(), email: EmailInput1.value.trim(), password: passwordInput1.value.trim()});
      console.log('Usuario registrado exitosamente');
      console.log(userRegisted);

  }
}


// Add listener to submit element
//submitEl.addEventListener('click', showResponse);

// Add listener to submit element
submitE2.addEventListener('click', addUser);


// Ejemplo de uso:
//registrarUsuario('juan1234', 'nuevoJuan@example.com'); // El nombre de usuario ya está registrado
//registrarUsuario('andrea999', 'andrea@example.com'); // Usuario registrado exitosamente

