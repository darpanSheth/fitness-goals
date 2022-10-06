
const signUpForm = document.getElementById("sign-up-form");
const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const password2Field = document.getElementById("password2");


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    inputValidation();
})

const setError = (element, resultMessage) => {
    const parentElement = element.parentElement;
    const errorDisplayDiv = parentElement.querySelector(".error-message-box");

    errorDisplayDiv.innerText = resultMessage;
    parentElement.classList.add("error");
    parentElement.classList.remove("success");
}

const setSuccess = (element) => {
    const parentElement = element.parentElement;
    const errorDisplayDiv = parentElement.querySelector(".error-message-box");

    errorDisplayDiv.innerText = "";
    parentElement.classList.add("success");
    parentElement.classList.remove("error");
}

const isValidEmail = (emailField) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailField).toLowerCase());
}

const inputValidation = () => {
    if(usernameField.value.trim() == ""){
        setError(usernameField, "Username is required");
    }
    else{
        setSuccess(usernameField)
    }


    if(emailField.value.trim() == ""){
        setError(emailField, "Email Id is required")
    }
    else if(!isValidEmail(emailField.value)){
        setError(emailField, "provide a valid email address")
    }
    else{
        setSuccess(emailField)
    }


    if(passwordField.value.trim() == ""){
        setError(passwordField, "Password is required");
    }
    else if(passwordField.value.length < 8){
        setError(passwordField, "password should be more than 8 characters");
    }
    else if(passwordField.value.length > 16){
        setError(passwordField, "password should be less than 16 characters");
    }
    else{
        setSuccess(passwordField)
    }


    if(password2Field.value.trim() == ""){
        setError(password2Field, "password confirmation is required");
    }
    else if(password2Field.value != passwordField.value){
        setError(password2Field, "password's does not match");
    }
    else{
        setSuccess(password2Field);
    }
}