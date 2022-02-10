var eventDate = new Date("Feb 16, 2022 23:39:00").getTime();

var x = setInterval(function() {

  var currDate = new Date().getTime();

  var distance = eventDate - currDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("headline").innerHTML = "Wishing you a lifetime of love and happiness";
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);