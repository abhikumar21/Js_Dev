 // this
// method in object -> ref to itself 
// regular function: ref to global object (window in browser, global in node)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTag() {
        this.tags.forEach(function(tag) {
            console.log(tag);
        })
    },
    play() {
        console.log(this);
    }
}

// video.showTag();

// video.stop = function() {
//     console.log(this); //ref to itself
// }
// video.play()

// function playVideo() {
//     console.log(this);
// }
// playVideo()


// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');

const user = {
    username: "Abhishek",
    roll_no: 210040,

    welcomeMessage: function() {
        // console.log(`${this.username} welcome`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Manish";
// user.welcomeMessage();

// console.log(this);
// function trello() {
//     console.log(this);
// }
// trello();


//////////////arrow function

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

// const addTwo = (num1, num2) => num1+num2;
// const addTwo = (num1, num2) => (num1+num2); //implicit return, no need to use return
// const addTwo = () => ({username: "Hatim"}); // returning object
// 

console.log(addTwo(3, 5))