let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick(event){

    let nav = document.querySelector("nav");

    nav.classList.toggle("hide");

    menuBtn.classList.toggle("change");

}