$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});
 
//The following is for adding different kinds of animations for the home page
window.sr = ScrollReveal();
sr.reveal(".leftDr", {
duration: 2000,
origin: "left",
distance: "300px"
});
sr.reveal(".rightDr", {
    duration: 2000,
    origin: "right",
    distance: "300px"
});
sr.reveal(".topSlide", {
    duration: 2000,
    origin: "top",
    distance: "100px"
});
sr.reveal(".slideLeft", {
    duration: 2000,
    delay: 1000,
    origin: "right",
    distance: "100px"
});
sr.reveal(".slideLeftTeamDr", {
  duration: 2000,
  origin: "right",
  distance: "100px",
});
sr.reveal(".slideRight", {
    duration: 2000,
    origin: "left",
    distance: "300px"
});
sr.reveal(".footerCards", {
    duration: 2000,
    origin: "bottom",
    distance: "200px"
});
sr.reveal(".easeIn", {
    duration: 2000,
    easing: "ease-in",
});
sr.reveal(".scaled", {
    duration: 1000,
    scale: 0.85
})