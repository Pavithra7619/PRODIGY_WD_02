let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerText =
        `${h}:${m}:${s}:${ms}`;
}

function startStopwatch() {

    if (!isRunning) {

        isRunning = true;

        timer = setInterval(() => {

            milliseconds++;

            if (milliseconds == 100) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();

        }, 10);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {

    clearInterval(timer);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    isRunning = false;

    updateDisplay();

    document.getElementById("lapList").innerHTML = "";
}

function recordLap() {

    let lapTime = document.getElementById("display").innerText;

    let li = document.createElement("li");

    li.innerText = lapTime;

    document.getElementById("lapList").appendChild(li);
}

updateDisplay();
