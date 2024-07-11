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
	return Number(totalScore);
   // return `You scored ${Number(totalScore)} points! \n ${letterPoints}`;
 }




// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


      /*----TASK 1----//
      For the initial promt I just needed to set some if statements to validate the user input.
      I wanted to make sure that they entered a single word, a word with no numbers and of course 
      no numbers at all. It is weird to me that I had to make to conditions to rule out words with 
      numbers in them and just outright numbers. The middle condition prevent words with numbers in 
      them. EX: mom9 but it would like me enter 90. So I did the last condition to stop 90 from going 
      through, but it would allow mom9 to work. So I left both inside the conditions. 
      */

function initialPrompt() {
   word = input.question("Let's play some scrabble! \nEnter a word to score: ");

   for (let i = 0; i < word.length; i++) {
   if(word.includes(" ") || !isNaN(word[i]) || word === Number) {
      word = input.question("Invalid word. Please try again. Enter a single word with no numbers or spaces: \n");
      
   }
   }
};


//-------------------------------------------------------------------------------------------------------------------------------

      /* ----TASK 4----//
      Could I make a loop that goes over the values for each key in the oldScrabbleStructure and convert them into lowercase, and then,
      take each individual elements(character) and turn into a key instead of a value. Would I be able to then assign that key the same name/var 
      as it's previous key? I am going to need nested loops. One for...in loop and another for loop. Maybe a while loop...but I wouldn't know how to begin

      EXAMPLE::: So, I for...loop over oldSrabbleStructure. Each time it hits a new property/key it takes the values and transforms them into keys while assigning the keys the 
      value of the property/key that accessed it. 

      BREAKDOWN::: Each key in oldscrabble is  key = point : value = letter
      at each key of oldscrabble I need to get the letters out of the array, convert them to lowercase, and put them into a new object structure...
      in for...in loop, we don't use index, we use the property/key. SO, loop over pointvalues, at each pointvalue take the letters in put into new object.

      */


let newKeys;
let newPointStructure = {};
function transform(oldPointStructure) {


   
   for (let property in oldPointStructure) {
      // console.log(pointValue);
       for (let i = 0; i < oldPointStructure[property].length; i++) {
         newKeys = oldPointStructure[property];
         // console.log(newKeys[i]);                                                          //shows that the letters are capitalized but looking like keys
         
         let makeLowerCase = newKeys[i].toLowerCase();
         // console.log(makeLowerCase);                                                        
         newPointStructure[makeLowerCase] = Number(property); 
         
       }
   }
   return newPointStructure;
};






function scrabbleScorer(word) {
newPointStructure = transform(oldPointStructure);	
   
   word = word.toLowerCase();
	let newPoints = "";
   let totalScore = 0;
 
  
  for (let newKeys in newPointStructure) {
	for (let i = 0; i < word.length; i++) {
      if(newPointStructure[newKeys].includes(word[i])) {



         newPoints += `\nPoints for '${word[i]}': ${newPointStructure[pointValue]}`;
         totalScore += Number(pointValue);
         
      } 

	  }
	}
   return Number(totalScore);
   // return `Your word: ${word} scored ${totalScore} points! \n ${newPoints}`;
 }

 

//---------------------------------------------------------------------------------------------------------------------------------------------------




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
	// word = word.toUpperCase();
   let simpleScorerPoints = "";
   let totalScore = 0;
	 
   for (let i = 0; i < word.length; i++) {

      for (let pointValue in simpleScorerStructure) {

        if (simpleScorerStructure[pointValue].includes(word[i].toUpperCase())) {
          simpleScorerPoints += `\nPoints for '${word[i]}': ${pointValue}` 
          totalScore += Number(pointValue);  

        }
      }
 } 
 return Number(totalScore);
 // return `Your word: ${word} scored ${Number(totalScore)} points! \n ${simpleScorerPoints}`;;
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
return totalScore;
// return `Your word: ${word} scored ${totalScore} points! \n ${vowelBonusPoints}`;
};




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
   scorerFunction: scrabbleScorer
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

function keepPlayingPrompt() {
   keepPlaying = input.question('Would you like to play another word? Yes or No? ');
   keepPlaying = keepPlaying.toUpperCase;
for (let i = 0; i < keepPlaying.length; i++) {
   if (keepPlaying === 'YES') {      
      word = input.question('Pick another word: ');
              
      
   }  else {
     break;
   }
}
};                     
         


function runProgram() {
   initialPrompt();
   scorerPrompt();
   keepPlayingPrompt()
   
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
