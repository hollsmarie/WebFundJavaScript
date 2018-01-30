$(document).ready(function () {

    $("#redButton").click(function(){
        $("h1").addClass("redHeading");
    });

    $("#click").click(function () {
        alert("Neato");
    });

    $("#toggle").click(function () {
        $("p.toggle").toggle();
    });

    $("#slideToggle").click(function () {
        $("p.toggle").slideToggle();
    });

    $("#before").click(function(){
        $("p.toggle").before("<p>Oh, Hello!</p>");
    });

    $("#after").click(function(){
        $("p.toggle").after("<p>Thanks, for stopping by!</p>");
    });

    $("#append").click(function(){
        $("p.toggle").append("<p>Boom, appended!</p>");
    });

    $("#HTML").click(function(){
        $("p.toggle").html("too slow!");
    });


    $("#show").click(function () {
        $("#showP").show();
    });


    $("#hide").click(function () {
        $("#showP").hide();
    });

    $("#pictureShow").click(function() {
        $("#image").slideDown();
    });

    $("#pictureAway").click(function() {
        $("#image").slideUp();
    });

    $("#fadeIn").click(function() {
        $("#image").fadeIn();
    });

    $("#fadeOut").click(function() {
        $("#image").fadeOut();
    });

    $("#attr").click(function(){
    $( "#image" ).attr( "title", "Photo by Kelly Clark" );
    });

});





