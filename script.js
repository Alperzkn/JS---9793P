counter = 1;

function counterFunction() {
  counter++;
  document.getElementById("counterText").innerHTML = counter;
  document.getElementById("timeText").innerHTML = "times";
  console.log(counter);
}

var rainSound = new Audio(
  "https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4"
);
var thunderSound = new Audio(
  "https://st2.asoftmurmur.com/assets/p/content/thunder/main-thunder.mp4"
);
var wavesSound = new Audio(
  "https://st3.asoftmurmur.com/assets/p/content/waves/main-waves.mp4"
);
var windSound = new Audio(
  "https://st2.asoftmurmur.com/assets/p/content/wind/main-wind.mp4"
);
var fireSound = new Audio(
  "https://st2.asoftmurmur.com/assets/p/content/fire/main-fire.mp4"
);
var birdsSound = new Audio(
  "https://st3.asoftmurmur.com/assets/p/content/birds/main-birds.mp4"
);
var cricketsSound = new Audio(
  "https://st3.asoftmurmur.com/assets/p/content/crickets/main-crickets.mp4"
);
var coffeeshopSound = new Audio(
  "https://st3.asoftmurmur.com/assets/p/content/people/main-people.mp4"
);
var singingbowlSound = new Audio(
  "https://st1.asoftmurmur.com/assets/p/content/sbowl/main-sbowl.mp4"
);
var whitenoiseSound = new Audio(
  "https://st3.asoftmurmur.com/assets/p/content/whitenoise/main-whitenoise.mp4"
);

/*
var mainRange = document.getElementById("mainRange");
mainRange.value = 0;
*/

var rainVolumeRange = document.getElementById("rainVolumeRange");
rainVolumeRange.value = 0;
document.getElementById("rainicon").style.opacity = 0.0;
var thunderVolumeRange = document.getElementById("thunderVolumeRange");
thunderVolumeRange.value = 0;
document.getElementById("thundericon").style.opacity = 0.0;
var wavesVolumeRange = document.getElementById("wavesVolumeRange");
wavesVolumeRange.value = 0;
document.getElementById("wavesicon").style.opacity = 0.0;
var windVolumeRange = document.getElementById("windVolumeRange");
windVolumeRange.value = 0;
document.getElementById("windicon").style.opacity = 0.0;
var fireVolumeRange = document.getElementById("fireVolumeRange");
fireVolumeRange.value = 0;
document.getElementById("fireicon").style.opacity = 0.0;
var birdsVolumeRange = document.getElementById("birdsVolumeRange");
birdsVolumeRange.value = 0;
document.getElementById("birdsicon").style.opacity = 0.0;
var cricketsVolumeRange = document.getElementById("cricketsVolumeRange");
cricketsVolumeRange.value = 0;
document.getElementById("cricketsicon").style.opacity = 0.0;
var coffeeshopVolumeRange = document.getElementById("coffeeshopVolumeRange");
coffeeshopVolumeRange.value = 0;
document.getElementById("coffeeshopicon").style.opacity = 0.0;
var singingbowlVolumeRange = document.getElementById("singingbowlVolumeRange");
singingbowlVolumeRange.value = 0;
document.getElementById("singingbowlicon").style.opacity = 0.0;
var whitenoiseVolumeRange = document.getElementById("whitenoiseVolumeRange");
whitenoiseVolumeRange.value = 0;
document.getElementById("whitenoiseicon").style.opacity = 0.0;

/*
Main Range Part

mainRange.onchange = function () {
  };
*/

/*
Rain Sound Part
*/
rainVolumeRange.onchange = function () {
  rainSound.play();
  var rainVolumeValue = rainVolumeRange.value;
  rainSound.volume = rainVolumeValue;
  document.getElementById("rainicon").style.opacity = rainVolumeValue;
  console.log("Rain Volume = " + rainVolumeValue);
};

/*
Thunder Sound Part
*/
thunderVolumeRange.onchange = function () {
  thunderSound.play();
  var thunderVolumeValue = thunderVolumeRange.value;
  thunderSound.volume = thunderVolumeValue;
  document.getElementById("thundericon").style.opacity = thunderVolumeValue;
  console.log("Thunder Volume = " + thunderVolumeValue);
};

/*
Waves Sound Part
*/
wavesVolumeRange.onchange = function () {
  wavesSound.play();
  var wavesVolumeValue = wavesVolumeRange.value;
  wavesSound.volume = wavesVolumeValue;
  document.getElementById("wavesicon").style.opacity = wavesVolumeValue;
  console.log("Waves Volume = " + wavesVolumeValue);
};

/*
Wind Sound Part
*/
windVolumeRange.onchange = function () {
  windSound.play();
  var windVolumeValue = windVolumeRange.value;
  windSound.volume = windVolumeValue;
  document.getElementById("windicon").style.opacity = windVolumeValue;
  console.log("Winds Volume = " + windVolumeValue);
};

/*
Fire Sound Part
*/
fireVolumeRange.onchange = function () {
  fireSound.play();
  var fireVolumeValue = fireVolumeRange.value;
  fireSound.volume = fireVolumeValue;
  document.getElementById("fireicon").style.opacity = fireVolumeValue;
  console.log("Fire Volume = " + fireVolumeValue);
};

/*
Birds Sound Part
*/
birdsVolumeRange.onchange = function () {
  birdsSound.play();
  var birdsVolumeValue = birdsVolumeRange.value;
  birdsSound.volume = birdsVolumeValue;
  document.getElementById("birdsicon").style.opacity = birdsVolumeValue;
  console.log("Birds Volume = " + birdsVolumeValue);
};

/*
Crickets Sound Part
*/
cricketsVolumeRange.onchange = function () {
  cricketsSound.play();
  var cricketsVolumeValue = cricketsVolumeRange.value;
  cricketsSound.volume = cricketsVolumeValue;
  document.getElementById("cricketsicon").style.opacity = cricketsVolumeValue;
  console.log("Crickets Volume = " + cricketsVolumeValue);
};

/*
Coffee Shop Sound Part
*/
coffeeshopVolumeRange.onchange = function () {
  coffeeshopSound.play();
  var coffeeshopVolumeValue = coffeeshopVolumeRange.value;
  coffeeshopSound.volume = coffeeshopVolumeValue;
  document.getElementById("coffeeshopicon").style.opacity =
    coffeeshopVolumeValue;
  console.log("Coffee Shop Volume = " + coffeeshopVolumeValue);
};

/*
Singing Bowl Shop Sound Part
*/
singingbowlVolumeRange.onchange = function () {
  singingbowlSound.play();
  var singingbowlVolumeValue = singingbowlVolumeRange.value;
  singingbowlSound.volume = singingbowlVolumeValue;
  document.getElementById("singingbowlicon").style.opacity =
    singingbowlVolumeValue;
  console.log("Singing Bowl Volume = " + singingbowlVolumeValue);
};

/*
White Noise Shop Sound Part
*/
whitenoiseVolumeRange.onchange = function () {
  whitenoiseSound.play();
  var whitenoiseVolumeValue = whitenoiseVolumeRange.value;
  whitenoiseSound.volume = whitenoiseVolumeValue;
  document.getElementById("whitenoiseicon").style.opacity =
    whitenoiseVolumeValue;
  console.log("Singing Bowl Volume = " + whitenoiseVolumeValue);
};

function resetall() {
  rainVolumeRange.value = 0;
  document.getElementById("rainicon").style.opacity = 0;
  rainSound.volume = 0;

  thunderVolumeRange.value = 0;
  document.getElementById("thundericon").style.opacity = 0;
  thunderSound.volume = 0;

  wavesVolumeRange.value = 0;
  document.getElementById("wavesicon").style.opacity = 0;
  wavesSound.volume = 0;

  windVolumeRange.value = 0;
  document.getElementById("windicon").style.opacity = 0;
  windSound.volume = 0;

  fireVolumeRange.value = 0;
  document.getElementById("fireicon").style.opacity = 0;
  fireSound.volume = 0;

  birdsVolumeRange.value = 0;
  document.getElementById("birdsicon").style.opacity = 0;
  birdsSound.volume = 0;

  cricketsVolumeRange.value = 0;
  document.getElementById("cricketsicon").style.opacity = 0;
  cricketsSound.volume = 0;

  coffeeshopVolumeRange.value = 0;
  document.getElementById("coffeeshopicon").style.opacity = 0;
  coffeeshopSound.volume = 0;

  singingbowlVolumeRange.value = 0;
  document.getElementById("singingbowlicon").style.opacity = 0;
  singingbowlSound.volume = 0;

  whitenoiseVolumeRange.value = 0;
  document.getElementById("whitenoiseicon").style.opacity = 0;
  whitenoiseSound.volume = 0;
}
