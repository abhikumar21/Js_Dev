
hello(goodbye); //what if hello takes much time and we want that ( hello -> goodbye  only)
// goodbye();

function hello(callback) {
    setTimeout(() => {
        console.log("hello")
        callback();
    }, 2000);
}

function goodbye() {
    console.log("goodbye")
}

//////////////read a file takes time
function hello(callback) {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("hello:", data); 
        callback();
    });
}