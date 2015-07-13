/* Javascript index.html */

// Set the sizes of the blocks
function setSizes(){
    $("body").css("overflow", "hidden");
    var width = $(window).width();
    var height = $(window).height();
    $("body").css("overflow", "auto");

    if (width < 800){
        width = 800;
    }

    if (height < 600){
        height = 600;
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

    //Title settings
    var fontSize = (height - 600)/318;
    var lineHeight = (height - 600)/318*0.3; 
    if (fontSize > 1) {
      fontSize = 1;
    }
    if (lineHeight > 0.3) {
      lineHeight = 0.3;
    }
    $("#name").css("font-size", (5+fontSize).toString() + 'em');
    $("#name").css("line-height", (1.1+lineHeight).toString() + 'em');

};

$(document).ready(function() {
    setSizes();
});

$(window).resize(function() {
   setSizes();
});


