function confirmPass() {
    let firstPassword = document.getElementById("WriteYourPassword").value;
    let confirmPassword = document.getElementById("ConfirmYourPassword").value;
    let confirmButton = document.getElementById("submitRegistrationForm");
    let BoxConfirmPss = document.getElementById("ConfirmYourPassword");
  
    if (firstPassword !== confirmPassword) {
      confirmButton.disabled = true;
      BoxConfirmPss.style.boxShadow = "0px 0px 4px 2px rgba(255,0,0,0.37)";
    } else {
      confirmButton.disabled = false;
      BoxConfirmPss.style.boxShadow = "none";
    }
  }
  window.addEventListener("DOMContentLoaded", confirmPass());
  