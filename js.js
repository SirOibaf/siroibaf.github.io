/* Javascript index.html */

var page = 0;

function whiteBottom() {
  return $("#top").height() + $("#title").height() + $("#bgmiddle").height() + $("#bottom").height() < $(window).height();
}


// Set the sizes of the blocks
function setSizesDesktop(){

  $("*").removeAttr("style");
  $("body").css("overflow", "hidden");

  // show menu
  $("#menu").css("visibility", "visible");
  // Disable arrow
  $(".arrow").hide();

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
   $("body").css("overflow", "auto");
};

function setSizesMobile() {
  var aRight = $("#ar").css("visibility");
  var aLeft = $("#al").css("visibility");

  $("*").removeAttr("style");

  //hide desktop features
  $("#menu").css("visibility", "hidden");
  $(".floater").css("visibility", "hidden");
  $(".arrow").show();

  var mobile = navigator.userAgent.match(/Mobi/) || navigator.userAgent.match(/Android/);
  var wb = whiteBottom();
  if ((mobile && ($(window).height() > $(window).width())) || wb) {
    // mobile!
    var height = $(window).height();
    console.log(height);

    $('#top').css("height", height*1/100);
    $('#title').css("height", height*7/100);
    $('#bgmiddle').css("height", height*65.5/100);
    $('#left').css("height", $("#bgmiddle").parent().height()*26/100);
    $('#right').css("height", $("#bgmiddle").parent().height()*30/100);
    $('#right').css("padding-top", $("#right").height()*15/100);
    $('#bottom').css("height",height*25.5/100);

    // img size
    $('#me').height($("#bgmiddle").height()*40/100);
    $('#me').css("top", $("#me").parent().height()*15/100);

    // set description font-size
    // $("#right").css("font-size", $("#right").height() * 0.10

    if (!wb || mobile) {
      $("#facebook .floater").height($("#bottom").height()*13/100);
    }
  }

  $("#leftArrow, #rightArrow").css("height", $("#right").height());


  if (page == 0) {
    $("#al").css("visibility", "hidden");
  } else {
    $("#ar").css("visibility", "hidden");
  }

 };

$(document).ready(function() {
  if ($(window).width() >= 1024 && window.screen.width >= 1024) {
    setSizesDesktop();
  } else {
    $("#stylesheet").attr('href', "mobile.css");
    setSizesMobile();
  }

  $("#projectsLink").click(function() {
    $("#text").text("I haven't done any interesting project yet");
    page = 1;
  });

  $("#bioLink").click(function() {
    $("#text").html("I'm a 22 years old nerd, passionate about technology and open source.<br>" +
        "I received my bachelor degree in Computer Science at the University of Trento. <br>" +
        "Now I am looking forward to start a new exciting experience as student of the EIT ICT Master School " +
        "in the major of Cloud Computing and Services.<br>" +
        "When not studying, I try to contribute to some opensource projects or I read books.");
    page = 0;
  });

  $("#ar").click(function() {
    $("#text").html("I haven't done any interesting project yet<br><br><br><br><br><br><br>");
    $("#ar").css("visibility", "hidden");
    $("#al").css("visibility", "visible");
    page = 1;
    setSizesMobile();
  });

  $("#al").click(function() {
    $("#text").html("I'm a 22 years old nerd, passionate about technology and open source.<br>" +
        "I received my bachelor degree in Computer Science at the University of Trento. <br>" +
        "Now I am looking forward to start a new exciting experience as student of the EIT ICT Master School " +
        "in the major of Cloud Computing and Services.<br>" +
        "When not studying, I try to contribute to some opensource projects or I read books.");
    $("#al").css("visibility", "hidden");
    $("#ar").css("visibility", "visible");
    page = 0;
    setSizesMobile();
  });
});

$(window).resize(function() {
  if ($(window).width() >= 1024 && window.screen.width >= 1024) {
    if ($("#stylesheet").attr('href') != "dekstop.css") {
      $("#stylesheet").attr('href', "desktop.css");
    }
    setSizesDesktop();
  } else {
    if ($("#stylesheet").attr('href') != "mobile.css") {
      $("#stylesheet").attr('href', "mobile.css");
    }
    setSizesMobile();
  }
});

