function digitalTime() {
    var dateTime = new Date();
    var h = dateTime.getHours();
    var m = dateTime.getMinutes().toString().padStart(2, '0');
    var s = dateTime.getSeconds().toString().padStart(2, '0');

    h = h > 12 ? h - 12 : h;
    h = h.toString().padStart(2, '0');
    var amPm = h >= 12 ? "PM" : "AM";
}

var amPmEl = document.getElementById("am-pm");
var hoursEl = document.getElementById("hours");

setInterval(function(){
    digitalTime();
    hoursEl.innerHTML = `${h}:${m}:${s} ${amPm}`;
}, 50);
