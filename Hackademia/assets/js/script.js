const submitEl = document.querySelector('#submit');
const submitE2 = document.querySelector('#signUp');
const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#password');
const submissionResponseEl = document.querySelector('#response');

//user new
const userInput1 = document.querySelector('#user');
const EmailInput1 = document.querySelector('#email');
const passwordInput1 = document.querySelector('#password');

const userInput3 = userInput1.value.trim();//userInput1.value.trim()
const EmailInput3 = EmailInput1.value.trim();


console.log(userInput3);
console.log(`intenta registrar.----- ${userInput1.value.trim()}------`);

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
let usuariosRegistrados = [
  { nombreUsuario: 'juan123', correo: 'juan@example.com' },
  { nombreUsuario: 'maria456', correo: 'maria@example.com' },
  { nombreUsuario: 'pedro789', correo: 'pedro@example.com' }
];

// Función que valida si el usuario ya está registrado
function validarUsuario(nombreUsuario) {
  // Comprobar si el nombre de usuario ya existe en el arreglo de usuarios registrados
  for (let usuario of usuariosRegistrados) {
      if (usuario.nombreUsuario === nombreUsuario) {
          return true; // El usuario ya está registrado
      }
  }
  return false; // El usuario no está registrado
}

// Función que maneja la lógica de registro
function registrarUsuario(userInput3, EmailInput3) {
  event.preventDefault();
  console.log(`intenta registrar. ${userInput1.value.trim()}`);
  if (validarUsuario(userInput3)) {
      console.log('El nombre de usuario ya está registrado. Por favor, elige otro.');
  } else {
      // Agregar el nuevo usuario al arreglo de registrados
      usuariosRegistrados.push({ nombreUsuario: userInput3, correo: EmailInput3 });
      console.log('Usuario registrado exitosamente');
      console.log(usuariosRegistrados);

  }
}


// Add listener to submit element
//submitEl.addEventListener('click', showResponse);

// Add listener to submit element
submitE2.addEventListener('click', registrarUsuario);


// Ejemplo de uso:
//registrarUsuario('juan1234', 'nuevoJuan@example.com'); // El nombre de usuario ya está registrado
//registrarUsuario('andrea999', 'andrea@example.com'); // Usuario registrado exitosamente

