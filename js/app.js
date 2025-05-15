const ageInput = document.getElementById("age")
const result = document.getElementById("resultDisplay")
const checkButton = document.getElementById("checkButton")

checkButton.addEventListener("click", function () {
    const age = Number(ageInput.value);
    if (age <= 0 || age >= 130) {
  
         result.textContent = "Error not vaild age"
         result.style.color = "red"
    } else if (age < 18){
         result.textContent = "You are a Minor"
         result.style.color = "orange"
    } else if (age >= 18){
         result.textContent = "You are a Adult"
         result.style.color = "green"
    }

    ageInput.value = "";
})



