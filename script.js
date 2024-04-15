// script.js

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convert-btn");
const convertedTemp = document.getElementById("converted-temp");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;
  let convertedValue;

  if (unit === "celsius") {
    if (isNaN(temperature)) {
      convertedTemp.textContent = "Invalid input";
      return;
    }
    convertedValue = (temperature * 9/5) + 32;
    convertedTemp.textContent = `${temperature}°C is equal to ${convertedValue.toFixed(2)}°F`;
  } else if (unit === "fahrenheit") {
    if (isNaN(temperature)) {
      convertedTemp.textContent = "Invalid input";
      return;
    }
    convertedValue = (temperature - 32) * 5/9;
    convertedTemp.textContent = `${temperature}°F is equal to ${convertedValue.toFixed(2)}°C`;
  } else if (unit === "kelvin") {
    if (isNaN(temperature)) {
      convertedTemp.textContent = "Invalid input";
      return;
    }
    convertedValue = temperature - 273.15;
    convertedTemp.textContent = `${temperature}°K is equal to ${convertedValue.toFixed(2)}°C`;
  } else {
    convertedTemp.textContent = "Invalid unit selection";
  }
}
