// this line below is just for payment page preventing to submit before valid inputs

document.getElementById("payment-submit-button").addEventListener("submit", (e) => {e.preventDefault()});