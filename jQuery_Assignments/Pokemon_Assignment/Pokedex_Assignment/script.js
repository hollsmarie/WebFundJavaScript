
$(document).ready(function () {
    //Display the pokemon on the side
    for (var i = 1; i < 11; i++) {
        var sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
        $("#main").append("<img id='" + i + "'src=" + sprite + ">");
        console.log("clicked")
        var photos = '';

    }



    //Get the data
    $('img').on('click', function () {
        console.log("loading");
        //Get the pokemon id
        var clone = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + $(this).attr("ID") + ".png"
        $('#pokedex').html('<img src = "' + clone + '"/>');

        //Get the data from the API source 
        $.get("https://pokeapi.co/api/v2/pokemon/" + $(this).attr('ID') +'/', function (res) {
            var html_str = "";
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"; 
            for (var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            html_str += "</ul>";
            $("#pokedex").append('<h3>'+res.name+'</h3>');
            $("#pokedex").append(html_str);
            $("#pokedex").append('<h4>'+"Height:" + '</h4>' + '<ul>'+ res.height + '</ul>');
            $("#pokedex").append('<h4>'+"Weight:" + '</h4>' + '<ul>'+ res.weight + '</ul>');
            console.log(res.types[0].type.name);
            console.log(res.types[1].type.name);
            console.log(res.height);
            console.log(res.weight);
            console.log(res.name);

        }, "json");

    });

}); 
