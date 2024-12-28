
// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthly -> "0", 'false', " ", [], {}, function(){}


//empty array
const arr = [];
if(arr.length == 0) {
    console.log("array empty");
}

const obj = {};
if(Object.keys(obj).length === 0) {
    console.log("empty object");
}

const obj1 = {
    name: "Abhishek",
    roll_no: 210040,
}
console.log(Object.keys(obj1));

let b = null;
let val1 = b ?? 10 ?? 100; //assign the alternate if first not available
console.log(val1);