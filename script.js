counter = 1;

function counterFunction() {
    counter++;
    document.getElementById("counterText").innerHTML = counter;
    document.getElementById("timeText").innerHTML = "times";
    console.log(counter);
}


function playrain() {
    var audio = new Audio('https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4');
    audio.play();
}

function playthunder() {
    var thunder = new Audio('https://st2.asoftmurmur.com/assets/p/content/thunder/main-thunder.mp4');
    thunder.play();
}
