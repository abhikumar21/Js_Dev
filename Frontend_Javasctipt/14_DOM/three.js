
function addLanguage(langName) {
    const ul = document.querySelector('ul');
    ul.innerHTML += `<li>${langName}</l1>`;
    console.log(ul.innerHTML)
}
addLanguage('HTML');

function addCss(lang) {
    const listItem = document.querySelector('li');
    console.log('li: ', listItem);
    listItem.innerHTML = `${lang}`;
    document.querySelector('.language').appendChild(listItem)
}

addCss('CSS');
addCss('tailwind css')

const lastItem = document.querySelector("li:last-child");
lastItem.remove();
console.log(document.querySelector('ul').innerHTML);