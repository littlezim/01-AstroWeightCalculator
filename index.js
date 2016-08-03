//Get values from HTML inputs
function myFunction(){
	var weightEarth = document.getElementById("weight").value;
	var planet = document.getElementById("planet").value;
	var trueWeight;
	var truePlanet;
	var finalWeight;
console.log(weightEarth);
if (parseInt(weightEarth) >= 0){				//Check if inputs are true or not
	trueWeight = true;
	}
else {
	trueWeight = false;
}
if (parseFloat(planet) === 27.9 || 0.377 || 0.9032 || 1 || 0.1655 || 0.3895 || 2.640 || 1.139 || 0.917 || 1.148 || 0.06){
	truePlanet = true;
	}
else {
	truePlanet = false;
	}
if (trueWeight === true && truePlanet === true){		//Calculate and output the outcome of the inputs
	var finalWeight = planet * weightEarth
	document.getElementById("p1").innerHTML = ("Your new weight would be " + finalWeight);
	}
else if (trueWeight === false && truePlanet === true) {
	document.getElementById("p1").innerHTML = ("You didn't type a propper weight. Remember to only use numbers.");
}
}
