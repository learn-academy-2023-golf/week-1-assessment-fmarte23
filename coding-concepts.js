// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:



// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: Incorrect. Outcome was 10 when I ran it
//  "LEARN 2023" is a string and not an array

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o confirmed/correct because this is referencing a single character from the string by its index 4

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: confirmed/correct Ruby because it is the referenced index 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer: SATURDAY, SUNDAY 
// b) Verify and explain: incorrect. error says weekendDays.toUpperCase is not a function
//    "saturday" and "sunday" are not string values, need backticks to make it work

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: incorrect. result says number. It did not return the number of elements in the array. typeof affects it.
