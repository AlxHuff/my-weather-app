/// DEFINED FUNCTIONS ///

/// START CONNECTION TO API ///

/// START CONNECTION TO API ///

/// START SEARCH ENGINE ///

/// END SEARCH ENGINE ///

/// START COORDINATES BUTTON ///

/// END COORDINATES BUTTON ///

/// DATE SCRIPT ///
let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hours}:${minutes}`;
/// END DATE SCRIPT ///
