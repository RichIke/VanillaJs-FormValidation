document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login');
    const createAccountForm = document.getElementById('createAccount');
    const forgotPasswordForm = document.getElementById('forgotPassword');

    document.getElementById('linkCreateAccount').addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");

    });

    document.getElementById('linkLogin').addEventListener('click', e => {
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add('form-hidden');
    });

    document.getElementById('linkforgotPassword').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.add("form-hidden");
        forgotPasswordForm.classList.remove("form-hidden");
    })

    document.getElementById('linkCreateAccount1').addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
        forgotPasswordForm.classList.add("form-hidden");

    });

});





const createAccountForm = document.getElementById('createAccount');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

createAccountForm.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();   
});



const login = document.getElementById('login');
const username1 = document.getElementById('username1');
const password1 = document.getElementById('password1');


login.addEventListener('submit', e => {
    e.preventDefault();

    checkLoginInputs();
})

function checkLoginInputs(){
    //getting the values from the inputs

    const usernameValue = username1.value.trim();
    const passwordValue = password1.value.trim();

    if(usernameValue === ""){
        //show error
        //add error class

        setInputError(username1, "Username cannot be left blank");
    }else{
        //add success class
        setSuccess(username1);
    }

    if(passwordValue === ""){
        setInputError(password1, "Password cannot be left blank");
    }else if(!isPassword(passwordValue)){
        setInputError(password1, 'Password must contain at least 1 uppercase, lowercase, number & symbol');
    }else {
        setSuccess(password1);
    }
}



function checkInputs(){
    //getting the values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === ""){
        //show error
        //add error class

        setInputError(username, "Username cannot be left blank");
    }else{
        //add success class
        setSuccess(username);
    }


    if(emailValue === ""){
        setInputError(email, "Email cannot be left blank");
    } else if(!isEmail(emailValue)){
        setInputError(email, "Email is not vaild");
    }else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setInputError(password, "Password cannot be left blank");
    }else if(!isPassword(passwordValue)){
        setInputError(password, 'Password must contain at least 1 uppercase, lowercase, number & symbol');
    }else {
        setSuccess(password);
    }

    if(confirmPasswordValue === ""){
        setInputError(confirmPassword, "Confirm password cannot be left blank");
    }else if(passwordValue !== confirmPasswordValue){
        setInputError(confirmPassword, "Passwords does not match");

    }else{
           setSuccess(confirmPassword);
    }
}

function setInputError(input, message){
    const  formControl = input.parentElement;
    const  small = formControl.querySelector('small');

    //add error msg in small tag
    small.innerHTML = message;

    //add error class
    formControl.className ='form-control error';
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
    return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(password);
}



