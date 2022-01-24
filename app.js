setInterval(digitalTime, 100);

function digitalTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
}