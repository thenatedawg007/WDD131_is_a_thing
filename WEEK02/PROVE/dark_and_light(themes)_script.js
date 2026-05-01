let selectElem = document.querySelector('#mode-select');
let pageContent = document.querySelector('body');
const img = document.querySelector('img[src="byui-logo-blue.webp"]');

selectElem.addEventListener('change', changeModes);


function changeModes() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = "#424242";
        document.body.style.color = "white";
        img.style.filter = 'grayscale(100%) invert(74%) ';
        
    } 
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}