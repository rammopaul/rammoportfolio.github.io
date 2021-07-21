$(document).ready(function() {
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/
  
    // declare variable
    var scrollTop = $(".scrollTop");
  
    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();
  
      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
  
      } else {
        $(scrollTop).css("opacity", "0");
      }
  
    }); // scroll END
  
    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
  
    }); // click() scroll top EMD
  
    /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#about").position();
  var h2 = $("#services").position();
  var h3 = $("#portfolio").position();
  var h4 = $("#blog").position();
  var h5 = $("#contacts").position();

  $('.about').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu about click() scroll END

  $('.services').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu services click() scroll END

  $('.portfolio').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu portfolio click() scroll END

  $('.blog').click(function() {
    $('html, body').animate({
      scrollTop: h4.top
    }, 500);
    return false;

  }); // left menu blog click() scroll END

  $('.contacts').click(function() {
    $('html, body').animate({
      scrollTop: h5.top
    }, 500);
    return false;

  }); // left menu contacts click() scroll END
  
  }); // ready() END