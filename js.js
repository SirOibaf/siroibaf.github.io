/* Javascript index.html */

// Set the sizes of the blocks
function setSizes(){
    var width = $(window).width();
    var height = $(window).height();

    if (width < 800){
        width = 800;
    }

    if (height < 600){
        hegith = 600;
    }
    
    // set width all children of body
    $('body').css('width', width);
    
    $('#name').css('width', width-40); //width - margin left
    $('#shbio').css('width', width-40); //width - margin left
};

$(document).ready(function() {
    setSizes();
});

$(window).resize(function() {
    // Action to do when window is resized
   setSizes();
});


