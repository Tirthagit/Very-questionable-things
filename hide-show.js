$(document).ready(function() {
     $("body").ready(function() {
          $("button").click(function() {
               // $("#blogs").fadeToggle(1000),
               // $("#card1").fadeToggle(600),
               // $("#card2").fadeToggle(700),
               // $("#card3").fadeToggle(800)
               $("#card1").slideToggle(600),
               $("#card2").slideToggle(700),
               $("#card3").slideToggle(800)
          });
     });
});