var sec = 10;
var val; 

function redirect() {
    document.location.href = 'https://metacodedev.com';
}

function updateSec() {
    document.getElementById("sec").innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(val);
        redirect();
    }
}

function Timer() {
    val = setInterval(function () {
        updateSec()
    }, 1000);
}

Timer();