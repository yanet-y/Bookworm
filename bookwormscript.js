var signupform=document.getElementById("form")
const emailaddress=document.getElementById("signup-email");
const password=document.getElementById("signup-password");
const username=document.getElementById("username");
const confirmpass=document.getElementById("signup-conpass");
const btnsignup=document.getElementById("btn--signup")
const errorElement = document.getElementById('error')


signupform.addEventListener('submit',(e) =>{
    let messages = []
   
    if(emailaddress.value === '') {
        messages.push('Email is required');
    } 
    
    if(username.value === '') {
        messages.push('Username is required');
    } 

    if(password.value=== '') {
        messages.push('Password is required');
    } 
    if (password.value.length < 8 ) {
        messages.push('Password must be at least 8 character.')
    } 

    if(confirmpass.value=== '') {
        messages.push('Please confirm your password');
    } 
    if (confirmpass.value !== password.value) {
        messages.push("Passwords doesn't match");
    } 
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
      }
    
     
});


    
  
