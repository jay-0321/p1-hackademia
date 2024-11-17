const submitEl = document.querySelector('#submit');
const userInput = document.querySelector('#user');
const passwordInput = document.querySelector('#password');
const submissionResponseEl = document.querySelector('#response');

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


}else{
  response =
  'Incorrect username or password. ';
}
submissionResponseEl.textContent = response;
  //console.log(event.type);
  //console.log(event.target);

}

// Add listener to submit element
submitEl.addEventListener('click', showResponse);
