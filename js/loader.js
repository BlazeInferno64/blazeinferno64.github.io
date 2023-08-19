const Bg = document.querySelector("body");

const loaderBg = document.querySelector(".loader-bg");

const loaderText = document.querySelector(".text-welcome");

const popupBoxContainer1 = document.querySelector(".cont");

const closePopupBtn1 = document.querySelector(".close");

const popupBoxText1 = document.querySelector("#text-popup");

let count = 0

Bg.classList.add("disabledScroll");

window.onload = function(){
    popupBoxText1.classList.remove("green")
    setTimeout(() => {
        loaderText.innerText = `Loading..(25%)`;
    }, 1500);
    setTimeout(() => {
        loaderText.innerText = `Loading..(50%)`;
        popupBoxContainer1.style.bottom = '5%';
        popupBoxText1.classList.add("green");
        popupBoxText1.innerText = 'Welcome! to my website :)';
    }, 7500);
    setTimeout(() => {
        loaderText.innerText = `Loading..(75%)`;
    }, 3500);
    setTimeout(() => {
        loaderText.innerText = `Loading..(100%)`;
    }, 4500);
    setTimeout(() => {
        Bg.classList.remove("disabledScroll");
        loaderBg.classList.add("none");
    }, 7000);
}
