
// var hoisted to top 
// function declarations are hoisted 

// functions are not hoisted 
// const app = () => (), function() {} 


// console.log(f);
// var f ="hello"

function greet() {
    console.log("Hello!");
}

greet(); // This works because function declarations are hoisted.

const sayHello = function() {
    console.log("Hello!");
};

sayHello(); // This will throw a ReferenceError because function expressions are not hoisted.

const newFunction = () => {
    console.log("newFunction");
}
newFunction();