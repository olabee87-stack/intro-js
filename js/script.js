function workingClock() {
  var currentDate = new Date();
  var hr = currentDate.getHours(),
    min = currentDate.getMinutes(),
    sec = currentDate.getSeconds(),
    tick = 360 / 60;
  console.log(hr, min, sec);

  var deltaHr = (hr * 360) / 12 + (min * 360) / 60 / 12,
    deltaMin = (min * 360) / 60 + (sec * 360) / 60 / 60,
    deltaSec = (sec * 360) / 60;

  var HOURHAND = document.querySelector("#hour"),
    MINUTEHAND = document.querySelector("#minute"),
    SECONDHAND = document.querySelector("#second");

  HOURHAND.style.transform = "rotate(" + deltaHr + "deg)";
  MINUTEHAND.style.transform = "rotate(" + deltaMin + "deg)";
  SECONDHAND.style.transform = "rotate(" + deltaSec + "deg)";
}

var interval = setInterval(workingClock, 1000);
