
// pending
// fulfilled
// rejected

const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, network
    setTimeout(function() {
        console.log('This task is complete')
        resolve();
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "Hitesh", password: "123"})
        }
        else{
            reject('Error')
        }
    }, 1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})
.finally(() => console.log("Promise dealt")) // default

// console.log(user);
// console.log(username);


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "Abhisek", password: "pass"})
        }
        else{
            reject('Error: new Error Abhishek')
        }
    }, 1000)
})

async function consumePromiseFunc() {
    try {
        const response = await promiseFive; //it is obj thus no ()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFunc();

// async function getApi() {
//     try {
//         const res = await fetch('https://api.github.com/users/abhikumar21');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getApi();

fetch('https://api.github.com/users/abhikumar21')
.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})