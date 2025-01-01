// Map use (for of) loop
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

// console.log(map);
for(const idx of map) {
    console.log(idx);
}
for(const [key, value] of map) {
    console.log(key, ":", value);
}

//object use (for in) loop
const obj = {
    name: "Abhishek",
    roll_no: 210040,
    branch: "MSE",
}
for(const idx in obj) {
    console.log(idx, ":", obj[idx]);
}

const langArr = ["Js", "C++", "ruby", "python"];
const myCoding = [
    {
        langName: "Javascript",
        langFile: "js"
    },
    {
        langName: "C++",
        langFile: "Cpp"
    },
    {
        langName: "Python",
        langFile: "py"
    },
]

myCoding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})

const val = langArr.forEach((item) => {
    console.log(item);
    return 6;
})
console.log("value: ", val); //undefined

const numsArr = [1, 2, 3, 4, 5, 6];
// const newArr = numsArr.filter((num) => num>4);
// const newArr = numsArr.map((num) => num+10);

//reduce -> give total sum of all key values
const newArr = numsArr.reduce((accumulator, currentvalue) => {
    console.log(`acc: ${accumulator} and curr: ${currentvalue}`);
    return accumulator + currentvalue;
}, 0)
console.log(newArr);