const submissionResponseEl = document.querySelector('#userLog');
const buttonEl = document.querySelector('#button');



let response='';

response = localStorage.getItem('userLog');
console.log(`user log ${response}`)

submissionResponseEl.textContent = response;

// Action to be performed on click store in named function
function showResponse(event) {
 

    location.href ="index.html";
}
// Add listener to submit element
buttonEl.addEventListener('click', showResponse);