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
  let mainDate = document.querySelector("h2");
  mainDate.innerHTML = formatDate(response.data.dt + 1000);
}
/// END CONNECTION TO API ///
/// START SEARCH ENGINE ///
function search(city) {
  let apiKey = "36616c1d79a2b7725ac3053f800c78b3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  /// START FORECAST URL CALL HERE ///
  let apiUrlF = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlF).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-text");
  search(cityInputElement.value);
}
/// END SEARCH ENGINE ///
/// START FORECAST ///
function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `<div class="card-body">
    <h2 class="card-text">${formatHours(forecast.dt + 1000)}</h2>
    <br>
    <img src="http://openweathermap.org/img/wn/${
      forecast.weather[0].icon
    }@2x.png"
    id="main-icon-small"
    alt="weather-icon"/>
    <h3 class="card-text-sub">${Math.round(
      forecast.main.temp_max
    )}° | ${Math.round(forecast.main.temp_min)}°</h3>
    </div>`;
  }
}
/// END FORECAST ///

/// START UNIT CONVERSION ///
function displayFarenheitTemp(event) {
  event.preventDefault();
  let farenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(farenheitTemp);
  celsiusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  celsiusLink.classList.add("inactive");
  farenheitLink.classList.remove("inactive");
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  celsiusLink.classList.add("active");
  farenheitLink.classList.remove("active");
  celsiusLink.classList.remove("inactive");
  farenheitLink.classList.add("inactive");
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
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
/// END DATE SCRIPT ///
