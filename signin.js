const signInForm = document.getElementById("sign-in-form");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

signInForm.addEventListener("submit", (e) => {
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

const inputValidation = () => {
    if(usernameField.value.trim() == ""){
        setError(usernameField, "Username is required");
    }
    else{
        setSuccess(usernameField)
    }


    if(passwordField.value.trim() == ""){
        setError(passwordField, "Password is required");
    }
    else{
        setSuccess(passwordField)
    }
}