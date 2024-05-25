counter = 1;

function counterFunction() {
    counter++;
    document.getElementById("counterText").innerHTML = counter;
    document.getElementById("timeText").innerHTML = "times";
    console.log(counter);
}