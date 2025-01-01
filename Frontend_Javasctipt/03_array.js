// includes()
// typeof()
// indexOf()
// join()
// slice()
// splice()  original array changes
// push()
// concat()
// flat() converts to 1D array
// from() //convert to array
// trim() removes white spaces from both sides of text
// split() splits a string into an array of substrings, and returns the array

const arr1 = [0, 1, 2, 3, 4, 5]
console.log(arr1.slice(2, 3));  //original array remains same
console.log("A", arr1);

console.log(arr1.splice(2, 3)); //removes the portion from original array
console.log("B", arr1);


const marvel = ["Thor", "Iron Man", "Groot", "Dr Strange"]
const dc = ["Fast", "Fire", "Hell"]
const indiHero = ["Krish", "Flying Jat", "Ra One"]

// const actors = marvel + dc;
// console.log(typeof actors); //string

const jointArr = marvel.concat(dc); //original array does not change
console.log(jointArr);
const all_heros = [...marvel, ...dc, ...indiHero]; //spread operator
console.log(all_heros);


const arr = ["Abhishek Kumar", "Prince Kumar", "Ankur Bala Sharma"];
console.log(arr.join(", "));

const string = "He is a good ninja, kakashi's student and 4th hokage's & Kushina's son";
const strArr = string.split(/[\s,&]+|and/g).filter(Boolean);
console.log(strArr);



