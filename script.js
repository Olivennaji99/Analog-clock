let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {

    let date = new Date();
    // Getting current time(hours,mins,secs from date)

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2; // 30deg for each hour + extra degree for mins
    let mRotation = 6 * mm; // 6deg for each min
    let sRotation = 6 * ss; // 6deg for each sec

    hr.style.transform =`rotate(${hRotation}deg)`;
    min.style.transform =`rotate(${mRotation}deg)`;
    sec.style.transform =`rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);