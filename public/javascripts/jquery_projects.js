$(document).ready(()=>{
    // Scroll to div for this page
    $(".ul-sitemap-projects li:nth-child(2)").on("click", ()=>{
        var tbar1 = $("[class^=div-body-container1]").offset().top
        // 75px is the size of the navbar and ties into the scroll amount
        // tbar1 = tbar1 - 75 - 4
        window.scrollTo({ top: tbar1, behavior: 'smooth' })
    })
    $(".ul-sitemap-projects li:nth-child(3)").on("click", ()=>{
        var tbar2 = $("[class^=div-body-container2]").offset().top
        // 75px is the size of the navbar and ties into the scroll amount
        // tbar2 = tbar2 - 75 - 4
        window.scrollTo({ top: tbar2, behavior: 'smooth' })
    })
    $(".ul-sitemap-projects li:nth-child(4)").on("click", ()=>{
        var tbar3 = $("[class^=div-body-container3]").offset().top
        // 75px is the size of the navbar and ties into the scroll amount
        // tbar3 = tbar3 - 75 - 4
        window.scrollTo({ top: tbar3, behavior: 'smooth' })
    })





    // Extract the fragment
    var id = window.location.hash.substring(1)

    if(id == 1){
        var tbar1 = $("[class^=div-body-container1]").offset().top
        // 75px is the size of the navbar and ties into the scroll amount
        // tbar1 = tbar1 - 75 - 4
        window.scrollTo({ top: tbar1, behavior: 'smooth' })
    }
    else if(id == 2){
        var tbar2 = $("[class^=div-body-container2]").offset().top
        // 75px is the size of the navbar and ties into the scroll amount
        // tbar2 = tbar2 - 75 - 4
        window.scrollTo({ top: tbar2, behavior: 'smooth' })
    }
    else if(id == 3){
        var tbar3 = $("[class^=div-body-container3]").offset().top
        // 75px is the size of the navbar and ties into the scroll amount
        // tbar3 = tbar3 - 75 - 4
        window.scrollTo({ top: tbar3, behavior: 'smooth' })
    }
})
