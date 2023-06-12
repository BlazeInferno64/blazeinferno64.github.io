const preWrap = document.getElementById("pre-wrap");
const noWrap = document.getElementById("no-wrap");
const pre =document.getElementById("pre");
const options = document.getElementById("options")
const more = document.querySelector(".usage");
const code = document.getElementById("code7");
const list = document.getElementById("list");

options.addEventListener("click",(e) =>{
    if(more.style.display !== 'none'){
        more.style.display = 'none';
        options.classList.remove("click");
    }
    else{
        more.style.display = 'block';
        options.classList.add("click");
    }
})

options.addEventListener("dblclick",(e) =>{
    if(more.style.display !== 'none'){
        more.style.display = 'none';
        options.classList.remove("click");
    }
    else{
        more.style.display = 'block';
        options.classList.add("click");
    }
})

options.addEventListener("auxclick",(e) =>{
    if(more.style.display !== 'none'){
        more.style.display = 'none';
        options.classList.add("click");
    }
    else{
        more.style.display = 'block';
        options.classList.remove("click");
    }
})

preWrap.addEventListener("click",(e) =>{
    preWrap.classList.add("active-selection");
    noWrap.classList.remove("active-selection");
    pre.classList.remove("active-selection");
    code.style.whiteSpace = 'pre-wrap'
    code.style.padding = '18px 0px';
})

pre.addEventListener("click",(e) =>{
    pre.classList.add("active-selection");
    preWrap.classList.remove("active-selection");
    noWrap.classList.remove("active-selection");
    code.style.whiteSpace = 'pre';
    code.style.padding = '18px 0px';
})

noWrap.addEventListener("click",(e) =>{
    preWrap.classList.remove("active-selection");
    noWrap.classList.add("active-selection");
    pre.classList.remove("active-selection");
    code.style.whiteSpace = 'nowrap'
    code.style.padding = '18px 20px';
})

document.addEventListener('click',(e) =>{
    if (e.target == more){
        more.style.display = 'none';
    }

})

