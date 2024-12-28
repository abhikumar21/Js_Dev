
// 1. Isolation of Scope
// The primary purpose of an IIFE is to create a new scope that isolates variables and functions within it. This avoids polluting the global scope.


//immediate execution
// protection from global scope pollution
// (function definition) (function call)

((username) => {
    console.log(`hello ${username}`);
}) ("Abhishek");

(function iifeFunction() {
    console.log("IIFE Function Executed");
}) ();