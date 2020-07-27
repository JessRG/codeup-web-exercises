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
         * Icon
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

        // Define the HTML content for the forecast weather card(s) by entering
        // in the forecast information (block scoped/local variables above) into the card(s)
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
            .html(`Pressure: <strong>${pressure} hPa</strong>`);
    }
}

// Defined a forecast function to query the openWeatherMap api
const forecastWeather = function (latitude, longitude) {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: latitude,
        lon: longitude,
        units: "imperial"
    }).done(buildForecastCards);
}

// Define a function to decode/convert city name into coordinates and vice versa (coordinates into city)
const geocoder = function(searchInfo, type) {
    // if searchInfo is an object (array) join longitude and latitude with a comma
    if (typeof searchInfo !== "string") {
        searchInfo.join(",");
    }

    // Call/Query MapBox API to obtain the response object with the necessary map information
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchInfo}.json`, {
        access_token: MAPBOX_KEY
    }).done(function(response) {
        if(type === "dragend") {
            const lon = response.features[0].center[0];
            const lat = response.features[0].center[1];
            const city = response.features[0].place_name;
            forecastWeather(lat, lon);
            setCityName(city);
            map.flyTo({
                center: [lon, lat],
                essential: true
            });
        } else {
            // console.log(response);
            const lon = response.features[0].center[0];
            const lat = response.features[0].center[1];
            const city = response.features[0].place_name;
            forecastWeather(lat, lon);
            setCityName(city);
            marker.setLngLat([lon, lat]);
            marker.addTo(map);
            map.flyTo({
                center: [lon, lat],
                essential: true
            });
        }

    });

}

// Target MapBox DOM element and specify height attribute so map can be visible
const mapBox = $('#mapBox').css({
    height: "50rem"
});

mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: `mapBox`,
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [0, 0], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
// disable map zoom when using scroll
map.scrollZoom.disable();

// Define a marker build function to return draggable marker
const buildMarker = function () {
    return new mapboxgl.Marker()
        .setDraggable(true);
}

// Define function to handle setting the marker on the MapBox
const setMarker = function (e) {
    if(e.type === "load") {
        geocoder([-98.492, 29.419], e.type);
    } else if(e.type === "dragend") {
        const lat = e.target._lngLat.lat;
        const lon = e.target._lngLat.lng;
        geocoder([lon, lat], e.type);
    } else {
        // handle resetting marker for event(s) other than "dragend" and updating the forecast weather cards
        e.preventDefault();

        // Store selected position's longitude and latitude info into block scope variables (local variables)
        const lon = e.lngLat.lng;
        const lat = e.lngLat.lat;
        geocoder([lon, lat], e.type);
    }
}

// Define function to handle setting the current city name at the top of the page
const setCityName = function(city) {
    $("#currentCity").html(city);
}

// Define function to handle setting the marker for the user's city name input
const setCityMarker = function(e) {
    const city = $("#find-place")[0].value;
    console.log(city);

    // Decode/Convert the city name text into latitude, longitude coordinates
    geocoder(city, e.type);
}

// Declare marker object for the MapBox
const marker = buildMarker();

// Add event listener to MapBox to set initial coordinates of marker upon map load event
map.on("load", setMarker);

// Add event listener to MapBox to set a marker when double clicked
map.on("dblclick", setMarker);

// Add event listener to Marker to update weather forecast when marker drag has ended
marker.on("dragend", setMarker);

// Add event listener to "place" input entry button
$("#submitCityBtn").on("click", setCityMarker);