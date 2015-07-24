/* Javascript index.html */

// Set the sizes of the blocks
function setSizes(){
    var width = $(window).width();
    var height = $(window).height();

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
    $('#titleInside').height(height*17/100);
    $('#bgmiddle').height(height*67/100);
    $('#bottom').height(height*15/100);

    // Se Maometto non va alla montagna...
    $("#bioBox").css("height", "100%");
    $("#left").css("height", "100%");
    $("#right").css("height", "100%");

    // Centering settings
    var centering = (width - 800)/1120*30
    if (centering> 30) {
      centering = 30;
    }
   
    $("#titleInside").css("width", width*(100-centering)/100);
    $("#name").css("width", $("#name").parent().width()*50/100);
    $("#menu").css("width", $("#menu").parent().width()*48/100);
    $("#bioBox").css("width", width*(100-centering)/100);
    $(".bio").css("width", $(".bio").parent().width()*49/100);

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

    //Image settings
    if ($("#me").parent().width() < $("#me").parent().height()) {
      $("#me").css("width", $("#me").parent().width()*60/100);
    } else {
      $("#me").css("width", $("#me").parent().height()*60/100);
    }
     
    $("#me").css("top", $("#me").parent().height()*20/100);

    // Bio settings
    $("#inside").height($("#inside").parent().height()*60/100);
    $("#inside").css("top", $("#inside").parent().height()*15/100);
    $("#inside").css("font-size", 19+(fontSize*6));

    // Bottom settings
    $("#floater").height($("#bottom").height()*11/100);
};

$(document).ready(function() {
    setSizes();
});

$(window).resize(function() {
   $("body").css("overflow", "hidden");
   setSizes();
   $("body").css("overflow", "auto");
});


