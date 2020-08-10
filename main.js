$(document).ready(function() {
  setInterval(moveeyenow, 1000);

  function moveeyenow() {
    $(".eye_top").toggleClass("moveeyetop");
    setTimeout(function(){$(".libs").toggleClass("happy");},500);
  }  
});