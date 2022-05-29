const loginform = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button")

function onLoginBtnCkick() {
    console.log("hello", ioginInput.value);
}

loginButton.addEventListener*("click", onLoginBtnCkick);