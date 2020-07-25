// All of the code used to make AJAX requests to both OpenWeatherMap and Mapbox APIs

$.get(`https://api.openweathermap.org/data/2.5/onecall`, {
    APPID: OPEN_WEATHER_APPID,
    lat: 29.419,
    lon: -98.492,
    units: "imperial"
}).done(function(response) {

    // loop through 5 days of weather forecast
    for(let i = 0; i < 5; i++) {
        // build specific card id to target DOM element
        const cardId = `card-${i}`;

        // Assign variables to the attributes of the response object
        /**
         * Assign card values:
         * Weather Date
         * Low/High Temperatures
         * feels_like
         * humidity
         * pressure
         * */
        // Assign the pretty Date String to #weather-date
        const date = new Date(response.daily[i].dt * 1000);
        const icon = `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`;
        const lowTemp = response.daily[i].temp.min;
        const highTemp = response.daily[i].temp.max;
        const feelsLike = response.daily[i].feels_like.day;
        const humidity = response.daily[i].humidity;
        const pressure = response.daily[i].pressure;

        $(`${cardId}, #weather-date-${i}`).html(`${date.toDateString()}`);
        $(`${cardId}, #high-low-temp-${i}`)
            .html(`<div class="row"><div class="col-12"><span class="text-primary">${lowTemp}℉</span> /` +
                ` <span class="text-danger">${highTemp}℉</span></div>` +
                `<div class="col-12"><img src=${icon}></div></div>`
            );
        $(`${cardId}, #feels-like-${i}`).html(`Feels_Like: ${feelsLike}`);
        $(`${cardId}, #humidity-${i}`).html(`Humidity: ${humidity}`);
        $(`${cardId}, #pressure-${i}`).html(`Pressure: ${pressure}`);
    }
});

const mapBox = $('#mapBox').css({
    height: "50em"
});

mapboxgl.accessToken = MAPBOX_KEY;
var map = new mapboxgl.Map({
    container: `mapBox`,
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
// disable map zoom when using scroll
map.scrollZoom.disable();