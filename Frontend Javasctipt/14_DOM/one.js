document.getElementById('firstHeading')
//<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​::before​<span class=​"mw-page-title-main">​B. R. Ambedkar​</span>​</h1>​

document.querySelector('.firstHeading .mw-page-title-main')
//<span class=​"mw-page-title-main">​B. R. Ambedkar​</span>​


document.querySelector('.firstHeading .mw-page-title-main').innerHTML = "<h1>Bhim Rao Ambedkar</h1>"
// '<h1>Bhim Rao Ambedkar</h1>'


document.getElementById('firstHeading').className
// 'firstHeading mw-first-heading'


document.getElementById('firstHeading').getAttribute('class')
// 'firstHeading mw-first-heading'

document.getElementById('firstHeading').setAttribute('class', 'myHeading')
// undefined

const title = document.getElementById('firstHeading')
// undefined


title.style.backgroundColor = 'blue'
// 'blue'

title.textContent
// 'Bhim Rao Ambedkar'

title.innerHTML
// '<span class="mw-page-title-main"><h1>Bhim Rao Ambedkar</h1></span>'

title.innerText
// 'Bhim Rao Ambedkar'