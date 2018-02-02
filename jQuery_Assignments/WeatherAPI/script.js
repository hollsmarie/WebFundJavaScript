
$(document).ready(function () {

    $('form').submit(function () {
        var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var apiKey = '&appid=1359559a11f7d03e46c377500e031aaf';
        var units = '&units=imperial';
        console.log($('input').val());
        var url = api + $('input').val() + apiKey + units;
        console.log(url);
        $.get(url, function (res) {
            console.log(res);
            $('#results').append('<p>'+"It is currently" + " " +res.main.temp+  " " + "degrees in" + " " +res.name+  "!" +'</p>');
            $("form").trigger("reset");
            $('#results').html('<p>'+"It is currently" + " " +res.main.temp+  " " + "degrees in" + " " +res.name+  "!" +'</p>');
        }, "json");

        return false;
    });

});


// $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr('ID') + '/', function (res) {

// var weather;

// var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
// var apiKey = '&APPID=1359559a11f7d03e46c377500e031aaf';
// var units = '&units=imperial';


//     var button = select('#submit');
//     button.click(getWeather);

//     var input = select('#weather');
// }

// function getWeather()
// var url = api + input.value + apiKey + units;
// loadJSON(url, gotData);

// function gotData(data) {
//     weather = data;
// ]

