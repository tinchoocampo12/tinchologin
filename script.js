let usuario = {
  emailDefinido: "martin.ocampo@gmail.com",
  passwordDefinida: "123456",
};

let email = document.getElementById("email");
let password = document.getElementById("password");
const button = document.getElementById("log-in");
const wrongUser = document.querySelector(".wrong-user");
const wrongPassword = document.querySelector(".wrong");
let intentosRestantes = 3;

button.addEventListener("click", (e) => {
  e.preventDefault();

  while (intentosRestantes > 0) {
    if (email.value === usuario.emailDefinido && password.value === usuario.passwordDefinida) {
      window.location.href = "https://www.coderhouse.com";
      break;
    } 
    else {
      if (email.value === "") {
        wrongUser.textContent = "Insert an email.";
        wrongUser.style.display = "block";
        wrongPassword.style.display = "none";
        break;
      } else if (email.value != usuario.emailDefinido) {
        wrongUser.textContent = "This user doesn't exist.";
        wrongUser.style.display = "block";
        wrongPassword.style.display = "none";
        break;
      } else if (password.value === "") {
        wrongUser.textContent = "Insert your password.";
        wrongUser.style.display = "block";
        wrongPassword.style.display = "none";
        break;
      } else {
        wrongUser.style.display = "none";
        wrongPassword.textContent = `Wrong password. You have ${intentosRestantes} more attempts.`;
        wrongPassword.style.display = "block";
        intentosRestantes--;

        if (intentosRestantes === 0) { //Validar si superó la cantidad de intentos restantes.
          button.disabled = true;
          password.disabled = true;
          wrongPassword.textContent = "User blocked.";
          button.textContent = "Blocked";
        }
        break;
      }
    }
  }
});
