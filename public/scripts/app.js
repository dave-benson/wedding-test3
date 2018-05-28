(function() {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var deadline = new Date("jul 18, 2020 16:00:00").getTime();
 
var x = setInterval(function() {
 
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days ;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);











function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".parallax-section").offset().top;
  var header_height = $(".parallax-header-section").outerHeight();
  $(".sample-section").css({ "margin-top": header_height });
  $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});
