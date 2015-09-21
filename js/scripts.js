$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(handleLocation);

    function handleLocation(position){
        getWeather(position.coords.latitude, position.coords.longitude);
    }

    function getWeather(lat, lon) {
        $.getJSON("api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial", function( data ) {
            getTemperature(data);
        });
    }

    function getTemperature(data) {
        var temp = Math.round(data.main.temp);
        $("#temperature").text(weather); 
    }
});

