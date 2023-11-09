const registerForm = document.querySelector(`.login-form`);
function handleSubmit (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value === "" || password.value === "") {
        alert("ATTENZIONE!!! Wszystkie pola powinny zostać wypełnione!");
    }
    const dataSaved = {
        [email.name]: email.value,
        [password.name]: password.value,
    }
    console.log(dataSaved);
    form.reset();
}

registerForm.addEventListener("submit", handleSubmit);

