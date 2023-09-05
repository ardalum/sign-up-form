let password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm-password");

function validatePassword() {
  const pwd = document.querySelector(".dpnone");

  if (password.value !== confirmPassword.value) {
    pwd.style.display = "block";
    pwd.textContent = "*Passwords do not match.";
  } else {
    pwd.style.display = "none";
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
