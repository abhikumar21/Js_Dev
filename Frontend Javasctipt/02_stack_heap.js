//primitive -> stack
//non-primitive -> heap

let myName = "Abhishek";
let newName = myName;
newName = "Prince";  //change made in copy, not in actual

console.log(myName); //Abhishek, copy of myName is given to newName in stack

let obj = {
    email : "abji@gmail.com",
    pass : "pass"
}

let obj2 = obj;  
obj2 = {                        // change in actual
    email : "prince@gmail.com",
    pass : "1234"
}
console.log(obj2)
