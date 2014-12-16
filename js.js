/* Javascript index.html */

// Set the sizes of the blocks
function setSizes(){
    var width = $(window).width();
    var height = $(window).height();
    var fontSize = height*16/940;

    if (width < 800){
        width = 800;
    }

    if (height < 700){
        height = 700;
    }

   // set width of all the boxes
    $('#top').width(width);
    $('#title').width(width);
    $('#bgmiddle').width(width);
    $('#bottom').width(width);

    // set height of all the boxes
    $('#top').height(height*1/100);
    $('#title').height(height*17/100);
    $('#bgmiddle').height(height*67/100);
    $('#bottom').height(height*15/100);

    // Se Maometto non va alla montagna...
    $("#bioBox").css("height", "100%");
    $("#left").css("height", "100%");
    $("#right").css("height", "100%");


    //Face settings
    $("#me").height($("#left").width()*3/5); 
    $("#me").width($("#left").width()*3/5); 

    //Title settings
    $("#name").css("font-size", "6em");

};

$(document).ready(function() {
    setSizes();
});

$(window).resize(function() {
    // Action to do when window is resized
   setSizes();
});


