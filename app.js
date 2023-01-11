let daysTimer = document.getElementById("days"),
    hoursTimer = document.getElementById("hours"),
    minutesTimer = document.getElementById("minutes"),
    secondsTimer = document.getElementById("seconds"),
    timers = document.querySelectorAll(".timers");

setInterval(setTime, 1000);

var totalSeconds = 1206065;

function setTime() {
    --totalSeconds;
    daysTimer.innerHTML = pad(parseInt(totalSeconds / (3600*24)))
    hoursTimer.innerHTML = pad(parseInt(totalSeconds % (3600*24) / 3600));
    minutesTimer.innerHTML = pad(parseInt(totalSeconds % 3600/ 60));
    secondsTimer.innerHTML = pad(totalSeconds % 60);
    if(parseFloat((totalSeconds % 3600 / 60)) % 1 == "00"){
        timers.forEach(timer => timer.classList.add("flip"));
    }else{
        timers.forEach(timer => {
            if(timer.classList.contains("flip")) return timers.forEach(timer => timer.classList.remove("flip"));
        });
    }
    
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}