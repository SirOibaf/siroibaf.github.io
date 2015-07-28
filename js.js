/* Javascript index.html */

// Set the sizes of the blocks
function setSizesDesktop(){

  $("*").removeAttr("style");
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
  $('#top').css("width", width);
  $('#title').css("width", width);
  $('#bgmiddle').css("width", width);
  $('#bottom').css("width", width);

  // set height of all the boxes
  $('#top').css("height", height*1/100);
  $('#title').css("height", height*17/100);
  $('#titleInside').css("height", height*17/100);
  $('#bgmiddle').css("height", height*67/100);
  $('#bottom').css("height",height*15/100);
  $('#insideBottom').css("height", height*15/100);

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
  $(".floater").css("height", ($("#bottom").height()-65)/2);

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
  // reset previous options
  $("*").removeAttr("style");
  $("#menu").css("visibility", "hidden");
  $(".floater").css("visibility", "hidden");

  var white = $(window).height() - ($("#top").height() + $("#title").height() + $("#bgmiddle").height() + $("#bottom").height());

  if (white > 0){
    $("#left").css("padding-top", white/6);
    $("#left").css("height", white/3 + 208);
    $("#me").css("height", white/3 + 200);
    $("#right").css("margin-top", white/4);
    $("#right").css("padding-bottom", white/4 + 15);
  }

  $("#right").on("swipeleft", function() {
    $("#text").text("I haven't done any interesting project yet");
  });

  $("#right").on("swiperight", function() {
    $("#text").html("I'm a 22 years old nerd, passionate about technology and open source.<br>" +
        "I received my bachelor degree in Computer Science at the University of Trento. <br>" +
        "Now I am looking forward to start a new exiting experience as student of the EIT ICT Master School" +
        "in the major of Cloud Computing and Services.<br>" +
        "When not studying, I try to contribute to some opensource projects or I read books.");
  });
}

$(document).ready(function() {
  if ($(window).width() >= 1024) {
    setSizesDesktop();
  } else {
    setSizesMobile();
  }
});

$(window).resize(function() {

  if ($(window).width() >= 1024) {
    $("body").css("overflow", "hidden");
    setSizesDesktop();
    $("body").css("overflow", "auto");
  } else {
    setSizesMobile();
  }

});

