$(document).ready(function () {

    // $("button").click(function () {
    //     $("#firsttable").append($("#first").val());
    //     $("#lasttable").append($("#last").val());
    //     $("#emailtable").append($("#email").val());
    //     $("#contacttable").append($("#phoneNum").val());
    // });

    // $("button").click(function () {
    //     $("table").append('<tr>...</tr><tr>...</tr>');
    // });

    $("button").click(function(){
        var first = $("#first").val();
        var last = $("#last").val();
        var email = $("#email").val();
        var phoneNum = $("#phoneNum").val();
        var markup = "<tr><td>" + first + "</td><td>" + last + "</td>" + "<td>" + email + "</td><td>" + phoneNum + "</td></tr>"; 
        $("table tbody").append(markup);
    });

});


// "<tr><td>" + first + "</td><td>" + last + "</td></tr>" + "<tr><td>" + email + "</td><td>" + phoneNum + "</td></tr>" 

// + email + "</td></tr>" + phoneNum + "</td></tr>";

