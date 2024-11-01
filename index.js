// Intermediate



// 2 Sort an Array: Write a function sortArray that sorts an array of numbers in ascending order.
// 3 Find the Longest Word: Write a function longestWord that returns the longest word in a sentence.
// 4 Filter Even Numbers: Write a function filterEvenNumbers that returns only even numbers from an array.
// 5 Count Occurrences of a Character: Write a function countCharacter that counts occurrences of a character in a string.
// 10 Merge Two Sorted Arrays: Write a function mergeSortedArrays that merges two sorted arrays into one sorted array.


// answer 2

// let arry = [1,3,4,2,5,7,6]
// let arry1 = []

// let result = arry.sort((a,b)  => a-b)
// arry1.push (result);
// console.log(arry1);


// answer 3

// function longestWord(sentence) {
//     const words = sentence.split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log(longestWord("The quick brown fox jumps over the lazy dog"));

// answer 4

// let arry = [ 1,2,3,4,5,6,7,8]
// let arry1 = []

// let result = arry.filter((num) => num % 2 === 0);
// arry1.push(result)
// console.log(arry1);


// answer 5 

// function countCharacter(str, char) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countCharacter("hello world", "o")); // Output: 2
// console.log(countCharacter("banana", "a"));      // Output: 3


// answer 10

// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];

// let add = array1.concat(array2)
// console.log(add)

// let result = add.sort((a,b) => a-b)
// console.log(result)


// Extract Object Keys and Values: Write a function extractKeysAndValues that returns an object’s keys and values as two separate arrays.
// Sort an Array of Objects: Write a function sortByProperty that sorts an array of objects by a given property.
// Count Words in a Sentence: Write a function wordCount that counts the occurrences of each word in a sentence.
// Convert Array of Objects to Single Object: Write a function mergeObjects that takes an array of objects and merges them into a single object.


// answer 11

// function result(obj){

//     const keys = Object.keys(obj);
//     const values = Object.values(obj);
//     return { keys, values };

// }

// const profile = {name :"piyush" , age : 20 , city : "new delhi"}
// console.log(result(profile))


// answer12

// const items = [
//     { name: "Apple", price: 1.5 },
//     { name: "Orange", price: 1.2 },
//     { name: "Banana", price: 0.8 }
// ];


// let result = items.sort((a,b) => a.price - b.price)
// console.log(result);

// answer 13

// function wordCount(sentence) {
//     const words = sentence.toLowerCase().split(/\s+/); // Split sentence into words (case-insensitive)
//     const counts = {};

//     for (let word of words) {
//         counts[word] = (counts[word] || 0) + 1;
//     }

//     return counts;
// }

// console.log(wordCount("The quick brown fox jumps over the lazy dog. The fox is quick."));
// Output: { the: 2, quick: 2, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, is: 1 }


// answer 14


// const array = [
//     { a: 1, b: 2 },
//     { b: 3, c: 4 },
//     { d: 5 }
// ];

// let result = array.reduce((acc , obj) =>{
//       return {...acc , ...obj}
// })

// console.log(result)