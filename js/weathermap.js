// All of the code used to make AJAX requests to both OpenWeatherMap and Mapbox APIs

// Define build function for the 5 weather cards on the page
const buildForecastCards = function (response) {
    // console.log(response);

    // loop through 5 days of weather forecast
    for (let i = 0; i < 5; i++) {
        // build specific card id to target DOM element(s) on page
        const cardId = `#card-${i}`;

        /**
         * Assign variables to the attributes of the openWeatherMap API response object
         * Assigning card values:
         * Weather Date
         * Low/High Temperatures
         * Description
         * Humidity
         * Wind speed
         * Pressure
         * */
        const date = new Date(response.daily[i].dt * 1000);
        const icon = `http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png`;
        const lowTemp = response.daily[i].temp.min;
        const highTemp = response.daily[i].temp.max;
        const description = response.daily[i].weather[0].description;
        const windSpeed = response.daily[i].wind_speed;
        const humidity = response.daily[i].humidity;
        const pressure = response.daily[i].pressure;

        // Define the content for the forecast weather card(s) by entering
        // in the forecast information (block scope/local variables above) into the card(s)
        $(`${cardId}`).css({
            width: "25rem"
        });
        $(`${cardId} #weather-date-${i}`)
            .addClass("text-center")
            .html(`${date.toDateString()}`);
        $(`${cardId} #high-low-temp-${i}`)
            .addClass("text-center")
            .html("<div class='row'>" +
                '<div class="col-12">' +
                `<span class="text-primary">${lowTemp}℉</span> / <span class="text-danger">${highTemp}℉</span></div>` +
                `<div class="col-12"><img src=${icon}></div></div>`
            );
        $(`${cardId} #description-${i}`)
            .html(`Description: <strong>${description}</strong>`);
        $(`${cardId} #humidity-${i}`)
            .html(`Humidity: <strong>${humidity}</strong>`);
        $(`${cardId} #wind-${i}`)
            .html(`Wind: <strong>${windSpeed}</strong>`);
        $(`${cardId} #pressure-${i}`)
            .html(`Pressure: <strong>${pressure}</strong>`);
    }
}

// Defined a forecast function to query the openWeatherMap api
const forecastWeather = function(latitude, longitude) {
    $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
        APPID: OPEN_WEATHER_APPID,
        lat: latitude,
        lon: longitude,
        units: "imperial"
    }).done(buildForecastCards);
}

// Target MapBox DOM element and specify height attribute so map can be visible
const mapBox = $('#mapBox').css({
    height: "50em"
});

mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: `mapBox`,
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-98.492, 29.419], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
// disable map zoom when using scroll
map.scrollZoom.disable();

// Define function to create a marker
const buildMarker = function (lon, lat) {
    const marker = new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);
}

// Define function to handle generating a marker on the MapBox
const generateMarker = function(e) {
    // handle marker creation on initial map load event
    if(e.type === "load") {
        forecastWeather(29.419, -98.492);
        buildMarker(-98.492, 29.419);
    } else {
        // handle marker creation for event(s) other than "load"
        e.preventDefault();

        // Store selected position's longitude and latitude info into block scope variables (local variables)
        const lon = e.lngLat.lng;
        const lat = e.lngLat.lat;
        forecastWeather(lat, lon);
        buildMarker(lon, lat);
    }
    // console.log(e);
}

// Initial call to openWeatherMap api to get weather forecast of the city of San Antonio
map.on("load", generateMarker);

// Add event listener to MapBox to add a marker when clicked on
map.on("dblclick", generateMarker);
