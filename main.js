function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
}

function setInputError(inputElement, message){
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(`.form_input-error-message`).textContent = message;
}

function clearlInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById('createAccount');

    document.getElementById('linkCreateAccount').addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.getElementById('linkLogin').addEventListener('click', e => {
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add('form-hidden');
    });

     loginForm.addEventListener('submit', e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
     });

     document.querySelectorAll(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length){
                setInputError(inputElement, "Username must be at least 10 characters in length")
            }
        });

        inputElement.addEventListener("input", e => {
            clearlInputError(inputElement);
        })
         
     });
});



