
const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children) //HTML Collection -> Array like property

for(let i=0;i<parent.children.length;i++) {
    console.log(parent.children[i].innerHTML);
    parent.children[i].className = Math.round(Math.random()*10)+i;
    // console.log(parent.children[i])
}

const day1 = document.querySelector('.day');
console.log(day1.parentElement)

console.log("NODES: ", parent.childNodes)

document.parent.appendChild(div);
const body = document.querySelector('body');
console.log(body);

// parent.className = "main";




