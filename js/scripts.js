



$(document).ready(function(){
$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=Montpellier&mode=json&units=metric&cnt=10",function(result){
    console.log(result);
    var city = result.city.name;
    var temperature = result.list[1].temp.max;


    $("#temperature").text(temperature);
    $("#city").text(city);
    });
});