const ageInput = document.getElementById("age");
const result = document.getElementById("resultDisplay");
const checkButton = document.getElementById("checkButton");

function checkAge() {
  const age = Number(ageInput.value);
  if (age <= 0 || age >= 130) {
    result.textContent = "Error not valid age";
    result.style.color = "red";
  } else if (age < 18) {
    result.textContent = "You are a Minor";
    result.style.color = "orange";
  } else {
    result.textContent = "You are an Adult";
    result.style.color = "green";
  }

  ageInput.value = ""; // clear input after check
}

// Button click
checkButton.addEventListener("click", checkAge);

// Enter key
ageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAge();
  }
});
