const secPointer = document.getElementById("secPT");
const minPointer = document.getElementById("minPT");
const hourPointer = document.getElementById("hourPT");

function setDatePT(){
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = (sec / 60) * 360 + 90;
    secPointer.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = (min / 60) * 360 + 90;
    minPointer.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = (hour / 12) * 360 + 90;
    hourPointer.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(setDatePT, 1000);