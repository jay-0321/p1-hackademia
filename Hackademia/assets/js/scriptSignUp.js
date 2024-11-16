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

  //open threads page //save credential in localstorage
  //location("threads.html");
  location.href ="threads.html";


}else{
  response =
  'Incorrect username or password. ';
}
submissionResponseEl.textContent = response;
  //console.log(event.type);
  //console.log(event.target);

}




// array to test
let userRegisted = [
  { user: 'juan123', email: 'juan@example.com', password: '123456' },
  { user: 'maria456', email: 'maria@example.com', password: '123456' },
  { user: 'pedro789', email: 'pedro@example.com', password: '123456' }
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
      location.href ="threads.html";

  }
}


// Add listener to submit element
//submitEl.addEventListener('click', showResponse);

// Add listener to submit element
submitE2.addEventListener('click', addUser);


// Ejemplo de uso:
//registrarUsuario('juan1234', 'nuevoJuan@example.com'); // El nombre de usuario ya está registrado
//registrarUsuario('andrea999', 'andrea@example.com'); // Usuario registrado exitosamente

