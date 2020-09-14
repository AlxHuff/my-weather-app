import "style.css";

/// DEFINED FUNCTIONS ///

/// START SEARCH ENGINE ///

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text");
  let h5 = document.querySelector("h5");
  h5.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

function searchCity(city) {
  let apiKey = "36616c1d79a2b7725ac3053f800c78b3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("span");
  temp.innerHTML = temperature;
  let h5 = document.querySelector("h5");
  let city = response.data.name;
  let tempDescription = response.data.weather[0].description;
  h5.innerHTML = `${temperature}°C in ${city}`;
  let description = document.querySelector("p");
  description.innerHTML = tempDescription;
}
/// END SEARCH ENGINE ///

/// START COORDINATES BUTTON ///

/// END COORDINATES BUTTON ///

function retrievePosition(position) {
  let apiKey = "36616c1d79a2b7725ac3053f800c78b3";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let textMuted = document.querySelector("#text-muted");
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}&appid=${apiKey}`;
  textMuted.innerHTML = `Your current location is: <br/> ${latitude}, ${longitude}`;
  axios.get(apiUrl).then(showTemperature);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let getCoordinates = document.querySelector("#geo-button");
getCoordinates.addEventListener("click", getPosition);

/// SCRIPTS ///

/// DATE SCRIPT ///
let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hours}:${minutes}`;
/// END DATE SCRIPT ///
/// END SCRIPTS ///
