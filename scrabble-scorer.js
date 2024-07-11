// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


      /*This is the original scorer function we were provided-- I just added a totalScore variable so I could 
      print the results to the user along with the individual points for each letter in the word. 
      */

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
   let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `\nPoints for '${word[i]}': ${pointValue}`;
         totalScore += Number(pointValue);
      } 

	  }
	}
	// return letterPoints 
   return totalScore + "\n" + letterPoints;
 }





// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //



function initialPrompt() {
   word = input.question("Let's play some scrabble! \nEnter a word to score: ");
};



let newPointStructure;
// newPointStructure = transform(oldPointStructure);


// console.log(transform(oldPointStructure['1']));
// console.log(oldPointStructure['2']);
// console.log(oldPointStructure['3']);
// console.log(oldPointStructure['4']);
// console.log(oldPointStructure['5']);
// console.log(oldPointStructure['8']);
// console.log(oldPointStructure['10']);





      /*----TASK 2.1----//
      Create a new scoring structure for simpleScorer that sets all letters = 1 point. 
      The object simpleScorerStructure needs one key/value pair. The key is the 1 point and the value holds all 26 letters
      */

let simpleScorerStructure = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
   };


      /*In the function simpleScorer, make a parameter for the user input to be passed through as an argument.
      Then, a for loop to go through each character of the inputed word. Inside for loop, create a for.. in loop that will
      checks if the key 1 hold the individual characters in its value-- for this case it would hold all of them. So all will
      answer true-- running the code. simpleScorerPoints variable with then add and reassign it's value with template literal for each loop
      */

function simpleScorer(word) {
	word = word.toUpperCase();
   let simpleScorerPoints = "";
   let totalScore = 0;
	 
	for (let i = 0; i < word.length; i++) {

      for (let pointValue in simpleScorerStructure) {
       if (simpleScorerStructure[pointValue].includes(word[i])) {
			simpleScorerPoints += `\nPoints for '${word[i]}': ${pointValue}`
         totalScore += Number(pointValue);
      }
  } 
} 
// return simpleScorerPoints; 
return totalScore + "\n" + simpleScorerPoints;

};

      /*----TASK 2.2----//
      Similar to simpleScorer, however, vowelBonusStructure object holds to key/value pairs. 
      key 1 (rep points) : consonants and key 3 (rep points): vowels. 
      */
   
let vowelBonusStructure = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 
      'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U', 'Y']
};

      /*Similar to simpleScorer function, except now, a letter might be found in either key 1 or key 3, 
      which would print different values based on location
      */

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let vowelBonusPoints = "";
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {

       for (let pointValue in vowelBonusStructure) {
 
         if (vowelBonusStructure[pointValue].includes(word[i])) {
           vowelBonusPoints += `\nPoints for '${word[i]}': ${pointValue}` 
           totalScore += Number(pointValue);  

         }
  } 
}  
// return vowelBonusPoints;
return totalScore + "\n" + vowelBonusPoints;
};




let scrabbleScorer;



      /*----TASK 2.1.1 (writing the scoringAlgorithms array)----//
      This is where the scoring option objects are listed inside an array, scoringAlgoriths, that will be used to retrieve 
      scoring info. Each object must contain 3 keys: name, description and scorerFunction
      */
     
const scoringAlgorithms = [
{
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.',
   scorerFunction: simpleScorer
},
{
   name: 'Bonus Vowels',
   description: 'Vowels are 3 pts, consonants are 1 pt.',
   scorerFunction: vowelBonusScorer
},
{ 
   name: 'Scrabble',
   description: 'The traditional scoring algorithm.',
   scorerFunction: oldScrabbleScorer
}

];


      /*----TASK 2.2.2 (write the scorerPromt)----//
      Here the user is prompted to pick the way they want their word to be scored. They are given info about how each score option
      is completed, and asked to pick option 0, 1, or 2. Below prompt, the input is examined by if and else statement. If 0 is picked, 
      the word will be scored by simpleScorer. If 1 is picked word should be scored by the vowelBonus scorer. If 2 is picked,
      the word will be scored by oldScrableScorer. If the user enters anything other than 0, 1, or 2 it will return invalid and prompted to 
      try again. Everytime a scorer is picked, it will print the scorer name and the point result of the word. I also have the individual letter 
      points listed under the results, but because I personally like it visible (it is removeable). 
      */

function scorerPrompt() {
scoreChoice = input.question(`
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
What scoring system would you like to use? 
Please enter 0, 1, or 2: `);
   

if (scoreChoice === "0") {
   console.log("\n" + "algorithm name: ", scoringAlgorithms[0].name);
   console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction(word));
   return;
}  if (scoreChoice === "1") {
      console.log("\n" + "algorithm name: ", scoringAlgorithms[1].name);
      console.log("scorerFunction result: ", scoringAlgorithms[1].scorerFunction(word));
      return;
}  if (scoreChoice === "2") {
         console.log("\n" + "algorithm name: ", scoringAlgorithms[2].name);
         console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction(word));
         return;
}  else {
      console.log(`
   Invalid Input. Please try again...Pick 0, 1, or 2: `);
      scorerPrompt();
   }
};









function transform(oldStructure) {
   let newPoints;
   for(let pointValue in oldPointStructure ) {
      for(let i = 0; i < 7, i++;) {
      newPoints[i] = oldPointStructure[pointValue].toLowerCase;   
      }


      
      }
   return newPoints;

};


// oldPointStructure[pointValue][i]   // isn't that saying point value is (the key) and then it will go through the indices within that property (the values array);


console.log(transform(oldPointStructure['1']));
// // console.log(oldPointStructure['2']);
// // console.log(oldPointStructure['3']);
// // console.log(oldPointStructure['4']);
// // console.log(oldPointStructure['5']);
// // console.log(oldPointStructure['8']);
// // console.log(oldPointStructure['10']);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}












//-------------------------------------------------------------------------------------------------
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
