/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 23;
 if (votingAge > 18)
 {
    console.log(true)
 }



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let testVar = 11;
let testVar2 = 99;

testVar = (testVar == testVar2) ? "25": "23";
console.log(testVar)




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));


//Task d: Write a function to multiply a*b 

function multiply(a,b) {  
    return a*b;
  }


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge(age) {
    return age * 7;
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function foodCalc(weight, age){

    if (age == 1 && weight <= 5){
      weight = weight * .05;          
    }
    if (age == 1 && weight >= 6 && weight < 11){
        weight = weight * .04;          
    }
    if (age == 1 && weight >= 11 && weight < 16){
        weight = weight * .03;          
    }
    if (age == 1 && weight >= 15){
        weight = weight * .02;          
    }
    if (age > .16 && age < .33){
        weight = weight * .1;
    }
    if (age == .33 && age < .66){
        weight = weight * .05;          
    }
    if (age == .583 && age < 1){
        weight = weight * .04;          
      }  
    return weight;
}



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPS(input){
    // 0 = rock, 1 = paper, 2 = scissors
      let int = 3;
      let randomRps = Math.floor(Math.random() * Math.floor(int));
    if (input == "scissors" && randomRps == 0){
      return "you lose...";    
    }
    else if (input == "scissors" && randomRps == 1){
      return "you win!";
    }
    else  if (input == "scissors" && randomRps == 2){
      return "tie.";
    }      
    if (input == "paper" && randomRps == 0){
        return "you win!";    
      }
      else if (input == "paper" && randomRps == 1){
        return "tie.";
      }
      else  if (input == "paper" && randomRps == 2){
        return "you lose...";
      }
      if (input == "rock" && randomRps == 0){
          return "tie.";    
        }
        else if (input == "rock" && randomRps == 1){
          return "you lose...";
        }
        else  if (input == "rock" && randomRps == 2){
          return "you win!";
        }
  }

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function kmConvert(km){
    return km *  0.62137119223733;
}


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftToCm(feet){
    return feet * 30.48;
}


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(number){
  while (number > 0){
      console.log(number + " bottles of soda on the wall");
      console.log(number + " bottles of soda");
      console.log("take one down pass it around");
      number = number - 1;
    if (number == 0){
      console.log("no more bottles of soda on the wall")
    }
  }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalc(inputNum) {
  if (inputNum >= 90){
    return "A";
  } 
  else if (inputNum < 60){
    return "F";
  }
  else if (inputNum < 70){
    return "D";
  }
  else if (inputNum < 80){
    return "C";
  }
  else if (inputNum < 90){
    return "B";
  }  
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





