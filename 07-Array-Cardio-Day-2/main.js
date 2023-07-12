// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
const currentYear = new Date().getFullYear()

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

console.log('is at least one person 19 or older? ', people.some(person => (currentYear - person.year) >= 19))

// Array.prototype.every() // is everyone 19 or older?
console.log('is at least one person 19 or older? ', people.every(person => (currentYear - person.year) >= 19))

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log('find the comment with the ID of 823423', comments.find(com => com.id === 823423))
// Array.prototype.findIndex()
// Find the comment with this ID
console.log('Find the comment with this ID, index: ', comments.findIndex(com => com.id === 823423))

// delete the comment with the ID of 823423
comments.splice(1, 1)
console.log(comments)
