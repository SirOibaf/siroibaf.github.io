/* Javascript index.html */

// Set the sizes of the blocks
function setSizesDesktop(){
  // show menu
  $("#menu").css("visibility", "visible");

  var width = $(window).width();
  var height = $(window).height();

  if (height < 600){
      height = 600;
  }

  if (width < 1024) {
      width = 1024;
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
  $('#insideBottom').height(height*15/100);

  // Se Maometto non va alla montagna...
  $("#bioBox").css("height", "100%");
  $("#left").css("height", "100%");
  $("#right").css("height", "100%");

  // Name position
  $("#name").css("top", ($("#name").parent().height() - 100)/2 + "px");
  $("#menu").css("top", ($("#menu").parent().height() - 100)/2 + "px");

  // Image position
  $("#me").css("top", ($("#me").parent().height() - 300)/2 + "px");
  $("#inside").css("top", ($("#me").parent().height() - 370)/2 + "px"); //Same top of the image

  // Bottom settings
  $(".floater").height(($("#bottom").height()-65)/2);

  // Button behavior
  $("#projectsLink").click(function() {
    $("#text").text("I haven't done any interesting project yet");
  });

  $("#bioLink").click(function() {
    $("#text").html("I'm a 22 years old nerd, passionate about technology and open source.<br>" +
        "I received my bachelor degree in Computer Science at the University of Trento. <br>" +
        "Now I am looking forward to start a new exiting experience as student of the EIT ICT Master School" +
        "in the major of Cloud Computing and Services.<br>" +
        "When not studying, I try to contribute to some opensource projects or I read books.");
  });
};

function setSizesMobile() {
  $("#menu").css("visibility", "hidden");
}

$(document).ready(function() {
  if ($(window).width() >= 1024) {
    setSizesDesktop();
  } else {
    setSizesMobile();
  }
});

$(window).resize(function() {
  $("body").css("overflow", "hidden");

  if ($(window).width() >= 1024) {
    setSizesDesktop();
  } else {
    setSizesMobile();
  }

  $("body").css("overflow", "auto");
});

