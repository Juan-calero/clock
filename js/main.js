const secPointer = document.getElementById("secPT");
const minPointer = document.getElementById("minPT");
const hourPointer = document.getElementById("hourPT");
const hourLONPointer = document.getElementById('hourLON')
const minLONPointer = document.getElementById('minLON');
const secLONPointer = document.getElementById('secLON');
const secNYPointer = document.getElementById('secNY');
const minNYPointer = document.getElementById('minNY');
const hourNYPointer = document.getElementById('hourNY');

const PTtime = document.getElementById('PTtime');
const LONtime = document.getElementById('LONtime');
const NYtime = document.getElementById('NYtime');


setInterval(setDate, 1000);

function setDate(){
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secDeg = (sec / 60) * 360 + 90;
    const secrotate = `rotate(${secDeg}deg)`;
    secPointer.style.transform = secrotate;
    secNYPointer.style.transform = secrotate;
    secLONPointer.style.transform = secrotate;


    const minDeg = (min / 60) * 360 + 90;
    const minrotate = `rotate(${minDeg}deg)`;

    minPointer.style.transform = minrotate;
    minNYPointer.style.transform = minrotate;
    minLONPointer.style.transform = minrotate;

    const hourNYDeg = ((hour - 4) % 12/ 12) * 360 + 90;
    const hourLONDeg = ((hour + 1) % 12 / 12) * 360 + 90;
    const hourDeg = (hour / 12) * 360 + 90;
    hourPointer.style.transform = `rotate(${hourDeg}deg)`;
    hourNYPointer.style.transform = `rotate(${hourNYDeg}deg)`;
    hourLONPointer.style.transform = `rotate(${hourLONDeg}deg)`;

    let minDisplay = min < 10 ? "0" + min:min;
    const hourNY = hour - 4;
    const hourLON = hour + 1 ;

    PTtime.innerHTML = `${hour < 10 ? "0" + hour : hour}:${minDisplay}`;
    LONtime.innerHTML = `${(hourLON < 10 ? "0" + hourLON : hourLON) % 24}:${minDisplay}`;
    NYtime.innerHTML = `${(hourNY < 10 ? "0" + hourNY : hourNY) % 24}:${minDisplay}`;

}