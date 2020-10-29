// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 is a variable which exists outside of a function. The counterMaker function is assigned to counter1. This enables the inner variable of count and the function of counter to be accessed outside of the function. counter2 is a function but is not assigned to a variable. Also, the count variable for counter2 exists outside of the function itself.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses a closure because the function 'counter' only exists within the function 'counterMaker'. The only way to access the 'counter' function would be to call the 'counterMaker' function, or to assign the 'counterMaker' function to a variable (like counter1).
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * The use of counter1 would be best if we wanted to keep information secure and harder to access, such as with salary or personal information. 
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * Math.floor(3));
};

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inningFunction, numberOfInnings){
  let finalScore1 = 0;
  for (let i = 0; i < numberOfInnings; i++){
    finalScore1 += inningFunction();
  }
  return finalScore1;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */



function scoreboard(callback, numInnings) {
  let currentInningScore = 1;
  const listOfScores = new Array(numInnings + 1).fill({Home: 0, Away: 0});
  return () => {
    if (currentInningScore > numInnings)
      return `Final Score: Away: ${listOfScores[numInnings].Away} - Home: ${listOfScores[numInnings].Home}`;
      const Away = callback() + listOfScores[currentInningScore-1].Away;
      const Home = callback() + listOfScores[currentInningScore-1].Home;
    listOfScores[currentInningScore] = {Home, Away};
    let end = 'st';
    if (currentInningScore === 2) end = 'nd';
    else if (currentInningScore === 3) end = 'rd';
    else if (currentInningScore > 3) end = 'th';
    return `${currentInningScore++ + end} inning: Away ${Away} - Home: ${Home}`;
  }
}

const scoreboardPrint = scoreboard(inning, 9);
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());
console.log(scoreboardPrint());

// Used multiple instances of console.log instead of creating a function in order to better visualize how the code is producing results/outcomes.
// Solved through pair programming with other students