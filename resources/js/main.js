$(document).ready(function(){
    $(".js-slider-section").waypoint(function( direction ){
        if (direction == "down"){
            $("nav").addClass("sticky-nav");
        } else{
            $("nav").removeClass("sticky-nav");
        }
    });
});

function openNav(){
    document.getElementById("freebie-mobile-contents").style.width = "100%";
}
function closeNav(){
    document.getElementById("freebie-mobile-contents").style.width = 0;
}