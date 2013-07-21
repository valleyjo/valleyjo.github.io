function calculate(){
	//Reset the output area
	document.getElementById('output').innerHTML = '';

	//Create the variables to hold the number of weights
	var fortyFive = 0, twentyFive = 0, ten = 0, five = 0, twoPointFive = 0;

	//Get the weight entered by the user
	var weight = parseInt(document.getElementById("weightValue").value);

	//Perform tests to make sure the weight is valid.
	//1. must be a number
	//2. must be greater than the weight of the bar
	//3. must be a valid combination of weight, i.e. divisable by 5
	if (isNaN(weight)){
		document.getElementById('output').innerHTML = 'Please enter a number.';
		return;
	}
	
	if (weight % 5 != 0){
		document.getElementById('output').innerHTML = 'This weight cannot be distributed equally on both sides of the barbell.';
		return;
	}

	if (weight < 45){
		document.getElementById('output').innerHTML = 'This weight is less than the bar.';
		return;	
	}

	//Subtract the weight of the bar and divide weight on each side
	var weightPerSide = (weight - 45) / 2.0;

	//While there is still weight left, decide which weight to add
	while (weightPerSide > 0){

	//If the weight is divisible by 45, subtact 45 from the weightPerSide and
	//increment the number of 45's per side. The process is the same for each weight
	if (weightPerSide / 45 >= 1){
		fortyFive++;
        weightPerSide -= 45;
    }
        
    else if (weightPerSide / 25 >= 1){
    	twentyFive++;
        weightPerSide -= 25;
    }
        
    else if (weightPerSide / 10 >= 1){
    	ten++;
        weightPerSide -= 10;
	}
        
    else if (weightPerSide / 5 >= 1){
        five++;
        weightPerSide -= 5;
    }
        
    else if (weightPerSide > 0){
        twoPointFive++;
        weightPerSide -= 2.5;
    }
}

//Output the results for the user
var result = "";

if (fortyFive > 0)
    if (fortyFive > 1)
    	result += fortyFive + " 45 pound weights</br>";
    else
        result += fortyFive + " 45 pound weight</br>";

//No multiples of 25. 2 x 25 becomes one 5 and one 45
if (twentyFive > 0)
    result += twentyFive + " 25 pound weight<br>";
        
if (ten > 0)
    if (ten > 1)
        result += ten + " 10 pound weights</br>";
    else
        result += ten + " 10 pound weight</br>";
        
//There are no multiples of 5 or 2.5. Two fives become a 10. Two 2.5's become a 5.
if (five > 0)
    result += five + " 5 pound weight</br>";
        
if (twoPointFive > 0)
    result += twoPointFive + " 2.5 pound weight";

document.getElementById('output_info').innerHTML = "Put on each side: </br>";
document.getElementById('output').innerHTML = result;
	}