let usuario = {
    emailDefinido: "martin.ocampo@gmail.com",
    passwordDefinida: "123456",
  };
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  const button = document.getElementById("log-in");
  const wrongUser = document.querySelector(".wrong-user");
  const wrongPassword = document.querySelector(".wrong");
  let intentosRestantes = 4;
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
  
    if (email.value === "" && password.value === "") {
    
      wrongUser.textContent = "Complete all fields.";
      wrongUser.style.display = "block";
      wrongPassword.style.display = "none"; 
    } 
    
    else if (email.value === "") {
      wrongUser.textContent = "Insert an email.";
      wrongUser.style.display = "block";
      wrongPassword.style.display = "none"; 
    } 
    
    else if (email.value != usuario.emailDefinido) {
      wrongUser.textContent = "This user doesn't exist.";
      wrongPassword.style.display = "none"; 
      wrongUser.style.display = "block";
    } 
    
    else if (password.value === "") {
      wrongUser.textContent = "Insert your password.";
      wrongUser.style.display = "block";
      wrongPassword.style.display = "none"; 
    } 
    
    else if (email.value === usuario.emailDefinido && password.value === usuario.passwordDefinida) {
    
      window.location.href = "https://www.coderhouse.com";
    } 
    
    else if (email.value === usuario.emailDefinido) {
      
      wrongUser.style.display = "none"; 
      wrongPassword.style.display = "block";
      intentosRestantes--;
  
      if (intentosRestantes === 0) {
        button.disabled = true;
        password.disabled = true;
        wrongPassword.textContent = `User blocked.`;
        button.textContent = "Blocked";
      } else {
        wrongPassword.textContent = `Wrong password. You have ${intentosRestantes} more attemps.`;
      }
    } else {
      
      wrongPassword.style.display = "none"; 
      wrongUser.style.display = "block";
    }
  });
  