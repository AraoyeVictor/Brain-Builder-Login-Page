const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁";
    }

});

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const passwordValue = password.value;

    if (email === "" || passwordValue === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Login successful!";
    message.style.color = "green";
    let Age = window.prompt("Did you want to Login?");
    window.prompt.color = "green"
});