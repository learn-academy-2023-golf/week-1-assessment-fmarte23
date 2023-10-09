// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Pseudo code:
// input: two strings
// output: what string has more characters
// compare the strings using a conditional statement



// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// // Expected outcome: "cherry"

// Pseudo code:
// input: two strings
// output: what string has more characters
// compare the strings using a conditional statement

// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }   else { 
//     console.log(fruit2)
// }




// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// must be a length property, return number of elements, but this is this an array?
// console.log(padres1984WorldSeriesRuns.length) for first line
// console.log(padres1998WorldSeriesRuns.length) for second line
// console.log(adres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))

var padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
var padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(padres1984WorldSeriesRuns.length)
console.log(padres1998WorldSeriesRuns.length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// reverse this string I can probably use myCohort.reverse()
// use var currentCohort = "LEARN 2023"
// split the string first currentCohort.split
// reverse the string using myReversedString
// then join again the string .join

var currentCohort = "LEARN 2023"
var myReversedString = currentCohort.split("").reverse().join("")
console.log(myReversedString)

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// return subset of 13, 5, -5 and 27 of array
// slice
// use for loop with if-else??
// for(let i =0;i<n ; i++)
//     {
//         if(arr[i]%2==1)
//             printf("%d ", arr[i]);
//     }   n not defined error
// use odds console log instead




const arr = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10];

const odds = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(odds); 