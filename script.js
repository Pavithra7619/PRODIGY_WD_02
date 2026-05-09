let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;

        timer = setInterval(() => {
            seconds++;

            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);

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