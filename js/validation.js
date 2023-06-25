const forms = document.getElementById("forms");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.querySelector(".email");
const query = document.querySelector(".query")
const country = document.getElementById("country");
const submitBtn = document.querySelector(".form-sub");
const newsForms = document.getElementById("news-forms");
const newsBtn = document.querySelector(".news-btn");
const newsField = document.querySelector(".news-input");

/*f.onkeyup = function(){
    alert("hi")
}*/

forms.addEventListener("input",(e) => {
    if (firstName.value.length <= 0){
        e.preventDefault();
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '.75';
    }
    else if (lastName.value.length <= 0){
        e.preventDefault();
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '.75';
    }
    else if (email.value.length <= 0){
        e.preventDefault();
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '.75';
    }
    else if (query.value.length <= 0){
        e.preventDefault();
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '.75';
    }
    else{
        submitBtn.style.pointerEvents = 'auto';
        submitBtn.style.opacity = '1';  
    }
})

newsForms.addEventListener("input",(e) => {
    if(newsField.value.length <= 0){
        e.preventDefault();
        newsBtn.style.pointerEvents = 'none';
        newsBtn.style.opacity = '.75';
    }
    else{
        newsBtn.style.pointerEvents = 'auto';
        newsBtn.style.opacity = '1';
    }
})