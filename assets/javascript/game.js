$(document).ready(function() {
	// make var so set the intial value
	var wins = 0;
	var losses = 0;
	//Generates the number you need to win
	var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
	var totalNumber = 0;
	var gemOne = Math.floor(Math.random() * ((12-1)+1) + 1);
	var gemTwo = Math.floor(Math.random() * ((12-1)+1) + 1);
	var gemThree = Math.floor(Math.random() * ((12-1)+1) + 1);
	var gemFour = Math.floor(Math.random() * ((12-1)+1) + 1);
	// winning score is assigned as function, within the var
	// if and else if statements are created, so when i use the word winning score
	// it is applied to that var, rather than typing everything out
	var winningScore = function(){
		if (totalNumber === targetNumber){
			//Adds a score to your total win numbner
			wins++
			//Displays the word win and win number from HTML and VAR
			$('.Wins').text(wins);
			console.log(wins);
			reset();
		} else if (totalNumber > targetNumber){
			//Adds a score to the amount of numbers you've lost
			losses++
			$('.Losses').text(losses);
			console.log(losses);
			//Calls reset function
			reset();
		}		
  	};
  		// set reset as a var, but that does not cause the numbers to reset
  		// i still have to create the function and call the function
  	var reset = function(){
  		targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
  		totalNumber = 0;
  		gemOne = Math.floor(Math.random() * ((12-1)+1) + 1);
  		gemTwo = Math.floor(Math.random() * ((12-1)+1) + 1);
  		gemThree = Math.floor(Math.random() * ((12-1)+1) + 1);
  		gemFour = Math.floor(Math.random() * ((12-1)+1) + 1);
  		$('.winningNumber').text(targetNumber);
  		$('.totalNumber').text("");
		console.log("resetcalled")


  	};

	//Whatever is inside these par will be from HTML
	// make sure to use the VAR because you are setting them            
	$('.winningNumber').text(targetNumber);
		console.log(targetNumber);


	$('#firstClick').click(function(){
		//totalNumber is set to 0, so when you add gemOne, it will set a new value
		totalNumber = totalNumber + gemOne;
		// displays the text because i pulled my HTML class along with my total number which is my var
		$('.totalNumber').text(totalNumber);
		// calling the function
		winningScore()
		console.log("gemOne", gemOne)
	});

	$('#secondClick').click(function(){
		totalNumber = totalNumber + gemTwo;
		$('.totalNumber').text(totalNumber);
		winningScore()
		console.log("gemTwo", gemTwo)
	
	});

	$('#thirdClick').click(function(){
		totalNumber = totalNumber + gemThree;
		$('.totalNumber').text(totalNumber);
		winningScore()
		console.log("gemThree", gemThree)
	});

	$('#fourthClick').click(function(){
		totalNumber = totalNumber + gemFour;
		$('.totalNumber').text(totalNumber);
		winningScore()
		console.log("gemFour", gemFour)

	});
	});