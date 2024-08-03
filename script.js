document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("email");
  const signupCard = document.getElementById("signup-form");
  const successCard = document.getElementById("success-message");
  const confirmedEmail = document.getElementById("confirmed-email");
  const dismissBtn = document.getElementById("dismiss-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateEmail(emailInput.value)) {
      // Show success message
      signupCard.style.display = "none";
      successCard.style.display = "flex";
      confirmedEmail.textContent = emailInput.value;
    } else {
      // Show error state
      emailInput.classList.add("error");
      emailInput.nextElementSibling.textContent = "Valid email required";
    }
  });

  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("error");
    emailInput.nextElementSibling.textContent = "";
  });

  dismissBtn.addEventListener("click", () => {
    successCard.style.display = "none";
    signupCard.style.display = "flex";
    form.reset();
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
