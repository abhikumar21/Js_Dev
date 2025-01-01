
function printSentance(username) {
    return `${username} is a student`;
}
console.log(printSentance());  //undefined when no arguement is passed

function Anime(...names) {  // rest operator, spread operator
    return names;
}
console.log(Anime("Naruto", "Death Node", "Dragon Ball", "HxH"));

const User = {
    username: "Abhisek",
    roll_no: 210040
}
function printName(someObject) {
    console.log(`My name is ${someObject.username}`);
}
printName(User);
