const home = document.getElementById("home1");
const about = document.getElementById("about1");
const contact = document.getElementById("contact1");
const faqs = document.getElementById("faqs1");
const api = document.getElementById("api1");

home.addEventListener('click',(e) =>{
    home.classList.add("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    faqs.classList.remove("active");
    api.classList.remove("active");
})

about.addEventListener('click',(e) =>{
    about.classList.add("active");
    home.classList.remove("active");
    contact.classList.remove("active");
    faqs.classList.remove("active");
    api.classList.remove("active");
})

contact.addEventListener('click',(e) =>{
    contact.classList.add("active");
    about.classList.remove("active");
    home.classList.remove("active");
    faqs.classList.remove("active");
    api.classList.remove("active");
})

faqs.addEventListener('click',(e) =>{
    faqs.classList.add("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    home.classList.remove("active");
    api.classList.remove("active");
})

api.addEventListener('click',(e) =>{
    api.classList.add("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    faqs.classList.remove("active");
    home.classList.remove("active");
})

function display(x){
    x.classList.toggle("change");
}









