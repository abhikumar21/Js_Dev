let pageBackground = document.querySelector('.page');


document.querySelector('#start').addEventListener('click', ()=> {
    setTimeout(()=> {
        pageBackground.style.backgroundColor = "red";
    }, 1000);
})