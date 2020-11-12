$(document).ready(()=>{
    // Load the page at the top if refreshed lower down
    $(this).scrollTop(0);




    
    // For later use
    var windowHeight = $(window).height()
    var windowWidth = $(window).width()
    var navbarHeight = $('#div-nav').height()
    var windowWidth = $(window).width()





    /// This is all code to make the navbar become static after the user has scrolled to and passed it
    // Get the distance of the element from the top of the page
    var navbarlocation = $("#div-nav").offset().top
    // .scrollTop() will return how far an object is from the top of the page, even the window object
    var windowlocation = $(window).scrollTop()
    // This buffer is used to stop the page from jumping when the bar becomes fixed, so it needs to be the same height
    $('#div-background').css('height', $('#div-buffer').height())





    /// This is the code that will make the navbar become fixed after it is scrolled past
    $(window).scroll(()=>{
        // Update the state of the windowlocation variable
        windowlocation = $(window).scrollTop()

        // Runs when you scroll past nav
        if(navbarlocation <= windowlocation){
            $("#div-nav").css("position", "fixed")
            $("#div-nav").css("top", "0px")
            $('#div-nav').css('width', windowWidth)
            // Make the div the same background color as the ul to make the slide animation look right
            $('#div-nav').css('backgroundColor', '#996515')
            // Reduce the width for the animation
            $('.ul-nav').css('width', '350px');
            
            // Expand the height of the bar if it is not already expanded
            if($('#div-nav').height() < navbarHeight + 10){
                if($('#div-nav').height() == navbarHeight){
                    $('.ul-nav').animate({'height': $(".ul-nav").height() + 10}, 500)
                    $('.ul-nav li').animate({'paddingTop': '5px'}, 500)
                }
            }

            // Remove padding on the div to remove silver edges and fix an issues where the li where overflowing on mobile
            $("#div-nav").css('paddingTop', '0px')
            $("#div-nav").css('paddingBottom', '0px')
        }
        // Runs when you aren't scrolled past nav
        else{
            $('.ul-nav').css('width', '100%');
            $('#div-nav').css('backgroundColor', '#c0c0c0')

            $("#div-nav").css("position", "static")

            // Return to default height
            $('.ul-nav').css('height', navbarHeight)

            // Center the li within the ul
            $('.ul-nav li').css('paddingTop', '0px')

            // Restore the padding
            $("#div-nav").css('paddingTop', '2px')
            $("#div-nav").css('paddingBottom', '2px')
        }
    })

    // Update the width of the nav bar so that it stays at the total width of the window
    $(window).resize(()=>{
        windowWidth = $(window).width()
        $('#div-nav').css('width', windowWidth)
    })
})