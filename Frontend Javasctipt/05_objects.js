// Object.assign()
// Object.create()  another method to create object


const User = {
    name: "Abhishek",
    age: 20,
    location: "IITK",
    "my college" : "IIT Kanpur"
}
// console.log(User.name);
// console.log(User["name"]);
User.location = "Lakhimpur";
// console.log(User.location)

// Object.freeze(User); // cannot change after this

User.location = "MuzaffarNagar";
// console.log(User.location)

// console.log(User["my college"])

User.greating = function() {
    console.log("Greeting");
}
User.newGreating = function() {
    console.log(`new Greating, ${this.name}`)
}

// User.greating()
// User.newGreating()

// console.log(User.greating());  undefined
// console.log(User.greating);  returns fuction reference
// console.log(User.newGreating());

const tinderUser = {};
// or const tinderUser = new Object();
tinderUser.id = "123";
tinderUser.name = "Raman";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "myemail@gmail.com",
    fullname: {
        usefullname: {
            firstname: "Abhishek",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullname);

// const obj3 = {regularUser, tinderUser}; wrong
// const obj3 = Object.assign({}, regularUser.fullname.usefullname, tinderUser, User); //combine objects
const obj3 = {...regularUser, ...tinderUser};
// console.log(obj3);
console.log("tinderUser:", Object.keys(tinderUser));
console.log("tinderUser:", Object.values(tinderUser));

