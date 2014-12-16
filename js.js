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
    $('#bgmiddle').height(height*67/100);
    $('#bottom').height(height*15/100);

};

$(document).ready(function() {
    setSizes();
});

$(window).resize(function() {
    // Action to do when window is resized
   setSizes();
});


