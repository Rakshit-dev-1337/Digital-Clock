function digitalTime() {
    var dateTime = new Date();
    var h = dateTime.getHours();
    var m = dateTime.getMinutes();
    var s = dateTime.getSeconds();

    var amPm = document.getElementById("am-pm")

    if (h >= 12) {
        amPm.innerHTML = "PM";
    } else {
        amPm.innerHTML = "AM";
    }

    if (h > 12) {
        h = h - 12
    }

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}

setInterval(digitalTime, 50);
