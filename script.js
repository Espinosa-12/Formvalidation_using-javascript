const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});
 
function checkInputs() {
    //get the values from inputs
  const usernameValue =  username.value.trim();
    const emailValue = email.value.trim();
   const passwordvalue =  password.value.trim();
   const password2Value =  password2.value.trim();

   if(usernameValue === ''){
       //show error
       //add error class
       setErrorFor(username ,'username cannot be blank');
   }else{
       //add success class
       setSuccessFor(username);
   }

   if(emailValue === ''){
    setErrorFor(email ,'email cannot be blank');
   }else if(!isEmail(emailValue)) {
       setErrorFor(email, 'Email is not valid');
   }else{
       setSuccessFor(email);
   }
   if(passwordvalue === ''){
       setErrorFor(password ,'password cannot be blank');
   }else{
    setSuccessFor(password);
   }
   if(password2Value === ''){
       setErrorFor(password2, 'password check cannot be blank');
   }else if(passwordvalue !== password2Value){
       setErrorFor(password2, 'passwords does not match');
   }else{
       setSuccessFor(password2);
   }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;  //form-control
    const small = formControl.querySelector('small');

    //add error messsage inside small
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
    
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
     return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)
    
}