// All of the code used to make AJAX requests to both OpenWeatherMap and Mapbox APIs

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(response) {
    console.log(response);

    // Assign the pretty Date String to #weather-date
    let date = new Date(response.dt * 1000);

    $("#weather-date").html(date.toDateString());
    console.log(date.toDateString());

    // Assign the High/Low temperature to
    const lowTemp = response.main.temp_min;
    const highTemp = response.main.temp_max;
    $("#high-low-temp").html(`<span class="text-primary">${lowTemp}℉</span> / <span class="text-danger">${highTemp}℉</span>`);

    // feels_like: 91.69
    console.log("Feels Like: " + response.main.feels_like);
    // humidity: 49
    console.log("Humidity: " + response.main.humidity);
    // pressure: 1014
    console.log("Pressure: " + response.main.pressure);
    // temp: 91.89
    console.log("Humidity: " + response.main.humidity);
    // temp_max: 93
    // temp_min: 90
});