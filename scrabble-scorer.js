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
	let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) { 
	  for (const pointValue in oldPointStructure) { 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			totalScore += Number(pointValue);
      } 
	  }
	}
	return totalScore;
 };



 
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //




function initialPrompt() {
   word = input.question("Let's play some scrabble! \nEnter a word to score: ");

   for (let i = 0; i <word.length; i++) {
      if (!isNaN(word[i]) || word.includes(' ')) {
         word = input.question("Invalid word. Please try again. Enter a single word with no numbers: \n");      
      };
   }
};




let simpleScorerStructure = {
   1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
   };


 

function simpleScorer(word) {
	word = word.toUpperCase();
   let totalScore = 0;
	 
   for (let i = 0; i < word.length; i++) {
      for (let pointValue in simpleScorerStructure) {
        if (simpleScorerStructure[pointValue].includes(word[i])) {
           totalScore += Number(pointValue);  
        }
      }
   } 
   return totalScore;
 };



   
let vowelBonusStructure = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 
      'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U', 'Y']
};

    


function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {
      for (let pointValue in vowelBonusStructure) { 
         if (vowelBonusStructure[pointValue].includes(word[i])) {
            totalScore += Number(pointValue);  
         }
      } 
   }  
   return totalScore;
};



     
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
   scorerFunction: scrabbleScorer
}
];


     

function scorerPrompt() {
   scoreChoice = input.question(`
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
What scoring system would you like to use? 
Please enter 0, 1, or 2: `);
   

   if (scoreChoice === "0") {
      console.log("\n" + "You picked: ", scoringAlgorithms[0].name);
      console.log(`Your word '${word}' scored : ${scoringAlgorithms[0].scorerFunction(word)} points!`);
      return;
   }  if (scoreChoice === "1") {
      console.log("\n" + "You picked: ", scoringAlgorithms[1].name);
      console.log(`Your word '${word}' scored : ${scoringAlgorithms[1].scorerFunction(word)} points!`);
      return;
   }  if (scoreChoice === "2") {
         console.log("\n" + "You picked: ", scoringAlgorithms[2].name);
         console.log(`Your word '${word}' scored : ${scoringAlgorithms[2].scorerFunction(word)} points!`);
         return;
   }  else {
      console.log(`\nInvalid Input. Please try again...Pick 0, 1, or 2: `);
      scorerPrompt();
   }
};




let newPointStructure = {};

function transform(oldPointStructure) {   
   let newKeys;

   for (let property in oldPointStructure) {
      for (let i = 0; i < oldPointStructure[property].length; i++) {
         newKeys = oldPointStructure[property];                                       
         let lowerCaseKeys = newKeys[i].toLowerCase();
         newPointStructure[lowerCaseKeys] = Number(property); 
      }
   }
   return newPointStructure;
};




newPointStructure = transform(oldPointStructure);

function scrabbleScorer(word) { 
   word = word.toLowerCase();
	let totalScore = 0;
 
   for (let i = 0; i < word.length; i++) {         
      if(newPointStructure[word[i]]) {
            totalScore += (newPointStructure[word[i]]);        
         } 
	   }
 
	return totalScore;
};
 



function keepPlayingPrompt() {   
   keepPlaying = input.question('\nWould you like to play another word? Yes or No? ');
   keepPlaying = keepPlaying.toUpperCase();
   console.log('\n');

   for (let i = 0; i < keepPlaying.length; i++) {
      if (keepPlaying === 'YES') {      
         initialPrompt();
         scorerPrompt();
         keepPlayingPrompt();
         return;
      }
   }
   return console.log('See you next time!!');     
};  




function runProgram() {
   initialPrompt();
   scorerPrompt();
   keepPlayingPrompt();   
};












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
