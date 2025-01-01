document.getElementById('firstHeading')

document.querySelector('.firstHeading .mw-page-title-main')


document.querySelector('.firstHeading .mw-page-title-main').innerHTML = "<h1>Bhim Rao Ambedkar</h1>"


document.getElementById('firstHeading').className


document.getElementById('firstHeading').getAttribute('class')
// 'firstHeading mw-first-heading'

document.getElementById('firstHeading').setAttribute('class', 'myHeading')
// undefined

const title = document.getElementById('firstHeading')
// undefined


title.style.backgroundColor = 'blue'
// 'blue'

title.textContent

title.innerHTML

title.innerText

document.querySelector('input[type="text"]');
document.querySelector('p:first-child')

const colors = ["red", "green", "blue", "white", "violet"];
const UL = document.querySelector('ul');
{/* <ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​  */}
const listArray = UL.querySelectorAll('li'); // returns a nodelist not an array
listArray[2].style.backgroundColor = "green";

// convert nodelist to array by spread operator 
const Array = [...listArray];
Array.map((item, idx)=> {
    item.style.backgroundColor = colors[idx];
})