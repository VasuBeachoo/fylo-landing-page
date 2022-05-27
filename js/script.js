const forms = Array.from(document.querySelectorAll("form"));

function checkInputs(e) {
  let input;
  if (e.target.id === "intro-form") {
    input = document.querySelector(".intro__email-input");
    console.log(input);
    if (input.value === "" || !input.validity.valid) {
      input.className = "intro__email-input intro__email-input--invalid";
      document.querySelector(".intro__error-msg").className =
        "intro__error-msg intro__error-msg--visible";
      e.preventDefault();
    }
  } else if (e.target.id === "cta-form") {
    input = document.querySelector(".cta__email-input");
    if (input.value === "" || !input.validity.valid) {
      input.className = "cta__email-input cta__email-input--invalid";
      document.querySelector(".cta__error-msg").className =
        "cta__error-msg cta__error-msg--visible";
      e.preventDefault();
    }
  }
}

forms.forEach((form) => form.addEventListener("submit", (e) => checkInputs(e)));
