/// DEFINED FUNCTIONS ///

/// START CONNECTION TO API ///
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.name;
  let liDescription = document.querySelector("#description");
  liDescription.innerHTML = response.data.weather[0].description;
  let liHumid = document.querySelector("#humid");
  liHumid.innerHTML = response.data.main.humidity;
  let liWind = document.querySelector("#wind");
  liWind.innerHTML = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector("#main-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute(
    "alt",
    `http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png`
  );
  celsiusTemperature = response.data.main.temp;
}
/// END CONNECTION TO API ///
/// START SEARCH ENGINE ///
function search(city) {
  let apiKey = "36616c1d79a2b7725ac3053f800c78b3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-text");
  search(cityInputElement.value);
}
/// END SEARCH ENGINE ///
/// START UNIT CONVERSION ///
function displayFarenheitTemp(event) {
  event.preventDefault();
  let farenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(farenheitTemp);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
/// END UNIT CONVERSION ///
/// START HOROSCOPE ///

/// END HOROSCOPE ///
/// START GLOBAL CALLS///
let celsiusTemperature = null;
let form = document.querySelector("#search-form");
let farenheitLink = document.querySelector("#units-f");
let celsiusLink = document.querySelector("#units-c");

form.addEventListener("submit", handleSubmit);
farenheitLink.addEventListener("click", displayFarenheitTemp);
celsiusLink.addEventListener("click", displayCelsiusTemp);
/// END GLOBAL CALLS///
/// END DEFINED FUNCTIONS AND CALLS ///
/// DATE SCRIPT ///
let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hours}:${minutes}`;
/// END DATE SCRIPT ///
