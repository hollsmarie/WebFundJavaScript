$(document).ready(function () {
    $('.alert').click(function(){
        alert('clicked!')
    })

 
    $('button').click(function() {
        var first = $("#first").val();
        var last = $("#last").val();
        var textarea = $("#textarea").val();
        var markup = "<div class='bCard'>" + "<p>" + first + " " + last + "<br>" + "<h4> Click here to see more about me! </h4> <h4 hidden>" + textarea + "</h4>" + "</p>" + "</div>";
        $('.viewContactCard').append(markup);
        $("form").trigger("reset");
    });    
    
        $('.viewContactCard').on('click','.bCard',function(){ 
        $(this).children('p,h4').toggle();
     });
  
 
    
});





// $(document.body).on('click', 'button', function () {
//     $('.viewContactCard').append('<h1>NEW</h1>');
// });

// $('img').click(function() {
//     $(this).attr('src', $(this).attr('data-alt-src'));
//      });

// var textarea = $("#textarea").val();

    // $(document).on('click','button', function() {
    //     var first = $("#first").val();
    //     var last = $("#last").val();
    //     var textarea = $("#textarea").val();
    //     var markup = "<p>" + first + last + textarea + "</p>";
    //     $('.viewContactCard').append(markup);
    // });       




    // $('button').click(function() {
    //     var first = $("#first").val();
    //     var last = $("#last").val();
    //     var clickMe = "Click here to see more about me!"
    //     var textarea = $("#textarea").val();
    //     var markup = "<div class='bCard'>" + "<p>" + first + " " + last + "<br>" + clickMe + "</p>" + "</div>";
    //     $('.viewContactCard').append(markup);
    // });    
    
    //     $('.viewContactCard').on('click','.bCard',function(){ 
    //     $(this).html(textarea);
    //  });