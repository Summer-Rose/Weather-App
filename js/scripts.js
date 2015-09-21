$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(handleLocation);

    function handeleLocation(position){
        var weather = getWeather(position.coords.latitude, position.coords.longitude);
          $("#temperature").text(weather);
    }

    function getWeather(lat, lon) {
        var temp = 0;
        $.getJSON("api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial", function(data) {
            temp = Math.round(data.main.temp);  
        });
        return temp;
    }
});