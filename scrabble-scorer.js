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



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //



function initialPrompt() {
   word = input.question("Let's play some scrabble! \nEnter a word to score: ");
   // console.log(oldScrabbleScorer(word));
   console.log(simpleScorer(word));
};

let newPointStructure;


let simpleScorerPoints = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
   };



function simpleScorer(word) {
	word = word.toUpperCase();
   let simpleScoreLetters = "";
	 
	for (let i = 0; i < word.length; i++) {

      for (let pointValue in simpleScorerPoints) {
       if (simpleScorerPoints[pointValue].includes(word[i])) {
			simpleScoreLetters += `Points for '${word[i]}': ${pointValue}\n`
      }
  } 
}  return simpleScoreLetters;
};

let vowelBonusScorer = "";


let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

function runProgram() {
   initialPrompt();
   
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
