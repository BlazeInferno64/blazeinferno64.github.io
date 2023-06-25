const preWrap = document.getElementById("pre-wrap");
const noWrap = document.getElementById("no-wrap");
const pre =document.getElementById("pre");
const options = document.getElementById("options")
const more = document.querySelector(".usage");
const code = document.getElementById("code7");
const list = document.getElementById("list");
const preLine = document.getElementById("pre-line");
const underlineEffect = document.querySelector(".underline");
const github = document.getElementById("github");
const underlineEffect1 = document.querySelector(".underline1");
const underlineEffect2 = document.querySelector(".underline2");
const welcome = document.querySelector(".welcome");
const welcomeBtn = document.querySelector(".welcome-btn");

welcome.addEventListener("mouseover",(e) =>{
    underlineEffect1.style.width = '100%';
});

welcome.addEventListener("mouseout",(e) => {
    underlineEffect1.style.width = '0';
})
welcomeBtn.addEventListener("mouseover",(e) =>{
    underlineEffect2.style.width = '100%';
});

welcomeBtn.addEventListener("mouseout",(e) => {
    underlineEffect2.style.width = '0';
})

github.addEventListener("mouseover",(e) =>{
    underlineEffect.style.width = '100%';
});

github.addEventListener("mouseout",(e) => {
    underlineEffect.style.width = '0';
})

function preview(){
    try {
        options.classList.toggle("click");
        more.classList.toggle("none");
    } catch (error) {
        console.error(error);
        console.error("Oops! an error occured!");
    }
}

options.addEventListener("dblclick",(e) =>{
    try {
        options.classList.toggle("click");
        more.classList.toggle("none");
    } catch (error) {
        console.error(error);
        console.error("Oops! an error occured!");
    }
})

options.addEventListener("auxclick",(e) =>{
    try {
        options.classList.toggle("click");
        more.classList.toggle("none");
    } catch (error) {
        console.error(error);
        console.error("Oops! an error occured!");
    }
})

options.addEventListener("contextmenu",(e) => {
    e.preventDefault();
    try {
        options.classList.toggle("click");
        more.classList.toggle("none");
    } catch (error) {
        console.error(error);
        console.error("Oops! an error occured!");
    }
})

preWrap.addEventListener("click",(e) =>{
    preWrap.classList.add("active-selection");
    noWrap.classList.remove("active-selection");
    pre.classList.remove("active-selection");
    preLine.classList.remove("active-selection");
    code.style.whiteSpace = 'pre-wrap'
    code.style.padding = '18px 0px';
})

pre.addEventListener("click",(e) =>{
    pre.classList.add("active-selection");
    preWrap.classList.remove("active-selection");
    noWrap.classList.remove("active-selection");
    preLine.classList.remove("active-selection");
    code.style.whiteSpace = 'pre';
    code.style.padding = '18px 0px';
})

noWrap.addEventListener("click",(e) =>{
    preWrap.classList.remove("active-selection");
    noWrap.classList.add("active-selection");
    pre.classList.remove("active-selection");
    preLine.classList.remove("active-selection");
    code.style.whiteSpace = 'nowrap'
    code.style.padding = '18px 20px';
})

preLine.addEventListener("click",(e) =>{
    pre.classList.remove("active-selection");
    preWrap.classList.remove("active-selection");
    noWrap.classList.remove("active-selection");
    preLine.classList.add("active-selection");
    code.style.whiteSpace = 'pre-line ';
    code.style.padding = '18px 0px';
})

document.addEventListener('click',(e) =>{
    if (e.target == more){
        more.style.display = 'none';
    }

})

