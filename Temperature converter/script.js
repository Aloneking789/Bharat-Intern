/** @format */

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
  updateButtonState();
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function updateButtonState() {
  if (degree.value === "") {
    convertBtn.setAttribute("disabled", "");
    setTimeout(() => {
      convertBtn.removeAttribute("disabled");
    }, 4000);
  }
}

function convertToCelsius() {
  let inputValue = parseFloat(degree.value);

  if (isNaN(inputValue)) {
    celsiusField.innerHTML = "Please enter a valid temperature.";
    return;
  }

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
    } else if (tempType.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
    }
  }, 1200);
}

degree.addEventListener("input", updateButtonState);
tempType.addEventListener("change", updateButtonState);
