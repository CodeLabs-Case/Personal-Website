$(document).ready(()=>{
  // Force the page to jump to the top on load/reload
  // I have disabled it as it interferes with  the URL fragment that is used to offset the viewport ...
  // ... when the user has come to the page from the footer nav
  //$(this).scrollTop(0);





  // Configure the settings for the animation cover
  // This will cause the black cover div over the main logo to fit it and then shrink in height ...
  // ... which will make it appear as though the logo is being painted on from bottom to top on page ...
  // ... load
  var acWidth = $('.img-blackbox').width()
  var acHeight = $('.img-blackbox').height()
  $('.animatecover').css('width', acWidth)
  $('.animatecover').css('height', acHeight)
  $('.animatecover').animate({'height': '0'}, 750)

  // Make the black box logo appear from invisible
  $('.img-blackbox').animate({opacity: 1}, 2000)





  // This is all code to make the navbar become static after the user has scrolled to and passed it
  var navbar = $(".div-navbar");
  var navbarPlaceHolder = $(".navbar-placeholder"); // Need a placeholder to avoid elements jumping up when nabar is fixed
  navbarPlaceHolder.css({ "height": "0px" });

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navbarLocation) {
      navbar.css({
        "position": "fixed",
        "top": "0",
        "width": "100%"
      }).animate({ backgroundColor: '#111', borderColor: 'black', opacity: 0.8  }, { duration: 100, queue: false });
      $("#navbar-placeholder").css("height", navbar.outerHeight()); // Adjust height of placeholder
    } else {
      navbar.css({
        "position": "static",
      }).animate({ backgroundColor: 'black', borderColor: 'white', opacity: 1 }, { duration: 100, queue: false });
      $("#navbar-placeholder").css("height", 0); // Reset height of placeholder
    }
  });
  // Location of navbar: 227 from top
  var navbarlocation = $(".div-navbar").offset().top
  // .scrollTop() will return how far an object is from the top of the page, even the window object
  var windowlocation = $(window).scrollTop()
  



  
  /// This is the code that will cause the opacity to lower as the image and the page is scrolled further down ...
  // ... it is a simple mathematic proportion reduced by a factor of 100
  var navbarLocation = navbar.offset().top;
  $(window).scroll(()=>{
    windowlocation = $(window).scrollTop()
    // navbarlocation is retrieved globally above
    var x = navbarlocation - windowlocation
    // This is a simple proportion, the lower the percentage becomes, as a function of distance from top, the lower ...
    // ... the opacity will become
    var y = (x * 100) / navbarlocation
    var z = ( y / 100 )
    // var rate = .3 // Rate of opacity decrease
    // z = z - rate
    $(".div-img").css("opacity", z)
  })





  // Functionality for the jump to start button at the bottom of the page
  $(".strong-top").on("click", ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  



  // This is the code that will detect if the viewport contains the element that will need to be animated ...
  // ... when the page first renders
  var element1 = $("[class^=div-container-text1-]")
  var element2 = $("[class^=div-container-text2-]")
  var element3 = $("[class^=div-container-text3-]")

  var top_of_element1
  var top_of_element2
  var top_of_element3
  
  var bottom_of_element1
  var bottom_of_element2
  var bottom_of_element3

  var bottom_of_screen
  var top_of_screen

  var position = $(window).scrollTop();

  // This is the code that will make the text visible if it is able to be seen in the viewport at load time
  // Checks for element 1_x
  top_of_element1 = element1.offset().top;
  bottom_of_element1 = element1.offset().top + element1.outerHeight();
  // Update screen
  bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  top_of_screen = $(window).scrollTop();
  
  // Conditionals for element 1
  if ((bottom_of_screen > top_of_element1) && (top_of_screen < bottom_of_element1)){
    // Is within viewport
    if(element1.css("opacity") == 0){
      element1.animate({opacity: 1, marginTop: 0}, {duration: 750, queue: false})
    }
  } else {
    if(element1.css("opacity") != 0){
      // Is NOT within viewport
      element1.css({"opacity": "0", "marginTop": "100px"})
    }
  }

  // Checks for element 2_x
  top_of_element2 = element2.offset().top;
  bottom_of_element2 = element2.offset().top + element2.outerHeight();
  bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  top_of_screen = $(window).scrollTop();

  // Conditionals for element 2
  if ((bottom_of_screen > top_of_element2) && (top_of_screen < bottom_of_element2)){
    // Is within viewport
    if(element2.css("opacity") == 0){
      element2.animate({"opacity": "1", "marginTop": "0px"}, {duration: 750, queue: false})
    }
  } else {
    // Is NOT within viewport
    if(element2.css("opacity") != 0){
      element2.css({"opacity": "0", "marginTop": "100px"})
    }
  }

  // Checks for element 3_x
  top_of_element3 = element3.offset().top;
  bottom_of_element3 = element3.offset().top + element3.outerHeight();
  // Update screen
  bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  top_of_screen = $(window).scrollTop();

  // Conditionals for element3_1
  if ((bottom_of_screen > top_of_element3) && (top_of_screen < bottom_of_element3)){
    // Is within viewport
    if(element3.css("opacity") == 0){
      element3.animate({"opacity": "1", "marginTop": "0px"}, {duration: 750, queue: false})
    }
  } else {
    if(element3.css("opacity") != 0){
      // Is NOT within viewport
      element3.css({"opacity": "0", "marginTop": "100px"})
    }
  }





  // This is the code that will make the text appear when the user scrolls over the elements, as well as the navbar title
  var title_element1 = $(".navbar-title-1")
  var title_element2 = $(".navbar-title-2")
  var title_element3 = $(".navbar-title-3")

  // Initially set them all off to the right most position on page load
  title_element1.css({"marginRight": "200px", "opacity": 0})
  title_element2.css({"marginRight": "200px", "opacity": 0})
  title_element3.css({"marginRight": "200px", "opacity": 0})

  $(window).scroll(()=>{
    // Checks for element all 1
    top_of_element1 = element1.offset().top;
    bottom_of_element1 = element1.offset().top + element1.outerHeight();
    // Update screen
    bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    top_of_screen = $(window).scrollTop();
    
    // Conditionals for all element 1
    if ((bottom_of_screen > top_of_element1) && (top_of_screen < bottom_of_element1)){
      // Is within viewport
      if(element1.css("opacity") == 0){
        element1.animate({"opacity": "1", "marginTop": "0px"}, {duration: 750, queue: false})
        title_element1.animate({"marginRight": "40px", "opacity": 1}, {duration: 750, queue: false})
      }
    } else {
      if(element1.css("opacity") != 0){
        // Is NOT within viewport
        var scroll = $(window).scrollTop();
        element1.css({"opacity": "0", "marginTop": "100px"})
        // title_element1.animate({"marginRight": "100px", "opacity": 0}, {queue: false})
        title_element1.css({"marginRight": "100px", "opacity": 0})
      }
    }
  });

  $(window).scroll(()=>{
    // Checks for element all 2
    top_of_element2 = element2.offset().top;
    bottom_of_element2 = element2.offset().top + element2.outerHeight();
    bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    top_of_screen = $(window).scrollTop();
  
    // Conditionals for all element 2
    if ((bottom_of_screen > top_of_element2) && (top_of_screen < bottom_of_element2)){
      // Is within viewport
      if(element2.css("opacity") == 0){
        element2.animate({"opacity": "1", "marginTop": "0px"}, {duration: 750, queue: false})
        title_element2.animate({"marginRight": "40px", "opacity": 1}, {duration: 750, queue: false})
      }
    } else {
      // Is NOT within viewport
      if(element2.css("opacity") != 0){
        element2.css({"opacity": "0", "marginTop": "100px"})
        // title_element2.animate({"marginRight": "100px", "opacity": 0}, {queue: false})
        title_element2.css({"marginRight": "100px", "opacity": 0})
      }
    }
  });

  $(window).scroll(()=>{
    // Checks for all element 3
    top_of_element3 = element3.offset().top;
    bottom_of_element3 = element3.offset().top + element3.outerHeight();
    // Update screen
    bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    top_of_screen = $(window).scrollTop();
  
    // Conditionals for all element3
    if ((bottom_of_screen > top_of_element3) && (top_of_screen < bottom_of_element3)){
      // Is within viewport
      if(element3.css("opacity") == 0){
        element3.animate({"opacity": "1", "marginTop": "0px"}, {duration: 750, queue: false})
        title_element3.animate({"marginRight": "40px", "opacity": 1}, {duration: 750, queue: false})
      }
    } else {
      if(element3.css("opacity") != 0){
        // Is NOT within viewport
        element3.css({"opacity": "0", "marginTop": "100px"})
        // title_element3.animate({"marginRight": "100px", "opacity": 0}, {queue: false})
        title_element3.css({"marginRight": "100px", "opacity": 0})
      }
    }
  });






  // This is the code that will make sure the page renders properly when the window size is small
  var windowWidth = 0// Current window width
  var delta = 0 // Difference between the threshold and the width
  var threshold = 0 // Calculated size for the image, depending on how large delta is and thus what w is
  $(window).resize(()=>{
    windowWidth = $(window).width()
    delta = 870 - windowWidth
    threshold = 200 - delta

    if(windowWidth < 869 && threshold <= 50){
      $("[class^=div-m1-sb2-contents-body]").css("font-size", "10px")
      $("[class^=div-m2-sb2-contents-body]").css("font-size", "10px")
      $("[class^=div-m3-sb2-contents-body]").css("font-size", "10px")
    }
    else{
      $("[class^=div-m1-sb2-contents-body]").css("font-size", "13px")
      $("[class^=div-m2-sb2-contents-body]").css("font-size", "13px")
      $("[class^=div-m3-sb2-contents-body]").css("font-size", "13px")
    }
  })



    

  // Portfolio
  $(".ul-sitemap-portfolio li:nth-child(2)").on("click", ()=>{
    document.location.href = "/" + "#" + 1
  })
  $(".ul-sitemap-portfolio li:nth-child(3)").on("click", ()=>{
    document.location.href = "/" + "#" + 2
  })
  $(".ul-sitemap-portfolio li:nth-child(4)").on("click", ()=>{
    document.location.href = "/" + "#" + 3
  })

  // Projects
  $(".ul-sitemap-projects li:nth-child(2)").on("click", ()=>{
    document.location.href = "/projects" + "#" + 1
  })
  $(".ul-sitemap-projects li:nth-child(3)").on("click", ()=>{
    document.location.href = "/projects" + "#" + 2
  })
  $(".ul-sitemap-projects li:nth-child(4)").on("click", ()=>{
    document.location.href = "/projects" + "#" + 3
  })

  //Education
  $(".ul-sitemap-education li:nth-child(2)").on("click", ()=>{
    document.location.href = "/education" + "#" + 1
  })
  $(".ul-sitemap-education li:nth-child(3)").on("click", ()=>{
    document.location.href = "/education" + "#" + 2
  })
  $(".ul-sitemap-education li:nth-child(4)").on("click", ()=>{
    document.location.href = "/education" + "#" + 3
  })

  //About
  $(".ul-sitemap-about li:nth-child(2)").on("click", ()=>{
    document.location.href = "/about" + "#" + 1
  })
  $(".ul-sitemap-about li:nth-child(3)").on("click", ()=>{
    document.location.href = "/about" + "#" + 2
  })
  $(".ul-sitemap-about li:nth-child(4)").on("click", ()=>{
    document.location.href = "/about" + "#" + 3
  })
});
