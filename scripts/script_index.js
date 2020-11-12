$(document).ready(()=>{
    // Load the page at the top if refreshed lower down
    $(this).scrollTop(0);





    var windowHeight = $(window).height()
    var windowWidth = $(window).width()





    /// Code the detect screen orientation.
    // The resource online says that 0 == landscape and 90 == portrait but that was not my experience, mine was the opposite.
    // I don't know whether the resource was stale or what, but this is the conditional logic values I work with, the inverse of that.
    var orientation = window.screen.orientation.angle;
    if(!window.screen.orientation.angle){
        //alert('Portrait')

        // Header
        $('.div-header-container-text').css('height', windowHeight)
        
        // Body
        $('.div-body-typeone').css('height', windowHeight)
        $('.div-body-typetwo').css('height', windowHeight)
        $('.div-body-wrapper-typetwo-1').css('height', windowHeight / 2)
        $('.div-body-wrapper-typetwo-2').css('height', windowHeight / 2)

        // Footer
        $('.div-footer').css('height', windowHeight)
        $('.div-footer-upper').css('height', windowHeight - 20)
        $('.div-footer-lower').css('height', '20px')
    } else {
        //alert('Landscape')

        // Header
        $('.div-header-container-text').css('height', windowHeight)
        
        // Body
        $('.div-body-typeone').css('height', 500)
        $('.div-body-typetwo').css('height', 800)
        $('.div-body-typetwo-1').css('height', 800 / 2)
        $('.div-body-typetwo-2').css('height', 800 / 2)

        // Footer
        $('.div-footer').css('height', windowHeight)
        $('.div-footer-upper').css('height', windowHeight - 20)
        $('.div-footer-lower').css('height', '20px')
    }

    // Check on rotation
    $(window).on( "orientationchange", (event)=>{
        if(!window.screen.orientation.angle){
            //alert('Portrait')
            location.reload();
        } else {
            //alert('Landscape')
            location.reload();
        }
    })




    /// Code to detect when the typeone segment text enters the viewport and makes it rise and become opaque
    var element1_1 = $(".div-body-typeone-1-text1")
    var element2_1 = $(".div-body-typeone-2-text1")
    var element3_1 = $(".div-body-typeone-3-text1")
    // var element1_2 = $(".div-body-typeone-1-text2")
    // var element2_2 = $(".div-body-typeone-2-text2")
    // var element3_2 = $(".div-body-typeone-3-text2")

    var top_of_element1_1, top_of_element2_1, top_of_element3_1
    // var top_of_element1_2, top_of_element2_2, top_of_element3_2
    var bottom_of_element1_1, bottom_of_element2_1, bottom_of_element3_1
    // var bottom_of_element1_2, bottom_of_element2_2, bottom_of_element3_2
    var bottom_of_screen
    var top_of_screen

    // Check to see if the device is a phone, if so, do not run that animation
    var x = window.matchMedia("(max-width: 768px)")

    
    $(window).scroll(function() {
        // If the media is not a phone screen, i.e, >= 601px, run the below
        if(!x.matches){
            // Checks for elements x_1
            top_of_element1_1 = element1_1.offset().top;
            bottom_of_element1_1 = element1_1.offset().top + element1_1.outerHeight();
            // Checks for elements x_2
            // top_of_element1_2 = element1_2.offset().top;
            // bottom_of_element1_2 = element1_2.offset().top + element1_2.outerHeight();

            // Update screen
            bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            top_of_screen = $(window).scrollTop();
            
            // Because, in the desktop, all x_1 elements have the same height you only need to check for one ...
            // ... and then set the rest.
            if ((bottom_of_screen > top_of_element1_1) && (top_of_screen < bottom_of_element1_1)){
                // Is within viewport
                // I dont know why you have this opacity check for the animation to run, but you do.
                if(element1_1.css('opacity') == 0){
                    element1_1.animate({"opacity": "1", "paddingTop": "0px"}, 750)
                    element2_1.animate({"opacity": "1", "paddingTop": "0px"}, 750)
                    element3_1.animate({"opacity": "1", "paddingTop": "0px"}, 750)
                }
            } else {
                // Is NOT within viewport
                // I dont know why you have this opacity check for the animation to run, but you do.
                if(element1_1.css('opacity') == 1){
                    element1_1.css({"opacity": "0", "paddingTop": "100px"})
                    element2_1.css({"opacity": "0", "paddingTop": "100px"})
                    element3_1.css({"opacity": "0", "paddingTop": "100px"})
                }
            }

            // Because, in the desktop, all x_2 elements have the same height you only need to check for one ...
            // ... and then set the rest.
            // if ((bottom_of_screen > top_of_element1_2) && (top_of_screen < bottom_of_element1_2)){
            //     // Is within viewport
            //     element1_2.animate({"opacity": "1", "paddingTop": "0px"}, {duration: 750, queue: false})
            //     element2_2.animate({"opacity": "1", "paddingTop": "0px"}, {duration: 750, queue: false})
            //     element3_2.animate({"opacity": "1", "paddingTop": "0px"}, {duration: 750, queue: false})
            // } else {
            //     // Is NOT within viewport
            //     element1_2.css({"opacity": "0", "paddingTop": "100px"})
            //     element2_2.css({"opacity": "0", "paddingTop": "100px"})
            //     element3_2.css({"opacity": "0", "paddingTop": "100px"})
            // }
        }
        else {
            element1_1.animate({"opacity": "1", "paddingTop": "0px"}, 750)
            element2_1.animate({"opacity": "1", "paddingTop": "0px"}, 750)
            element3_1.animate({"opacity": "1", "paddingTop": "0px"}, 750)
        }
    })
})