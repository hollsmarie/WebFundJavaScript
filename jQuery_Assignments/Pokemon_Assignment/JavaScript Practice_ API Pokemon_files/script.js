
$(document).ready(function () {
    for(var i=1;i<150; i++ ){
      var sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png";
      $("#main").append("<img src="+sprite+">");
      console.log("clicked")
    }
});

// $(document).on('click', function())


// $.get(url)