$(document).ready(function(){
     $("body").ready(function(){
          $("h2,h3,h4").show(1000);
          $("p,ul,li").fadeIn(1300);
     });
     $("#demo").mouseenter(function(){
          alert("You have clicked")
     });
     $("#demo").mouseleave(function(){
          $(this).css("color", "orange","slow")
     })
});
$(document).ready(function () {
  $("button").click(function () {
    $("h3").toggle(700),
    $("#demo").css("color","green")
});
});


// Mouse            Events	Keyboard Events	Form Events	Document/Window Events
// click	          keypress	submit	load
// dblclick	     keydown	change	resize
// mouseenter	     keyup	focus	scroll
// mouseleave	 	          blur	unload
// // 

 
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('button').addEventListener('click', function () {
//         document.querySelectorAll('h3, p').forEach(function (element) {
//             if (element.style.display === 'none' || element.style.display === '') {
//                 element.style.display = 'block';
//             } else {
//                 element.style.display = 'none';
//             }
//         });
//     });
// });
 // Set the locale to Bengali
// moment.locale('bn');

// Get the current time using Moment.js
function getCurrentTime() {
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
return currentTime;
}

// Update the displayed time
function updateCurrentTime() {
var currentTimeElement = document.getElementById('demo');
currentTimeElement.textContent = getCurrentTime();
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Initial update
updateCurrentTime();


