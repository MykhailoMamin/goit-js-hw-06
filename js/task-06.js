const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", function () {
  const desiredLength = parseInt(inputElement.getAttribute("data-length"));
  const inputValue = inputElement.value.trim();

  if (inputValue.length === desiredLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
