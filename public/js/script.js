const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mob-nav");

const copyEgBtn = document.querySelector(".copy");
const egCode = document.querySelector(".gt-main-2");

const apiLink = document.querySelector(".gt-main");
const copyApiLinkBtn = document.querySelector(".copy-api");

const firstNameInput = document.querySelector(".fname");
const lastNameInput = document.querySelector(".lname");
const countryInput = document.querySelector(".country");
const queryInput = document.querySelector(".query");
const otherCountry = document.querySelector(".ot");
const form = document.querySelector("#form");
const totalWords = document.querySelector("#wrds");

const submitContactFormBtn = document.querySelector(".submit");
const resetContactFormBtn = document.querySelector(".reset");

const newsForm = document.querySelector(".news-form");
const newsEmailInput = document.querySelector("#email-news");
const submitEmailNewsFormBtn = document.querySelector(".sub");

const popupBg = document.querySelector(".popup-bg");
const popupInfo = document.querySelector("#in");
const closePopupBtn = document.querySelector(".close");

const loadBg = document.querySelector(".load-bg");
const loadingText = document.querySelector(".txt");
const Body = document.querySelector("body");

const topBtn = document.querySelector(".top-btn");
const header = document.querySelector(".head");

const githubLink = document.querySelector("#lin");
const footerFluid = document.querySelector(".fluid");

hamburger.addEventListener("click",(e) => {
    mobileNav.classList.toggle("mob-hght");
})

function change(x) {
    x.classList.toggle("change");
}

copyEgBtn.addEventListener("click",async(e) => {
    try {
        const alertCopied = document.querySelector(".cc");
        await navigator.clipboard.writeText(egCode.innerText);
        alertCopied.innerText = `Copied!`;
        alert(`Sucessfully copied!`)
        setTimeout(() => {
            alertCopied.innerText = `Copy Code`
        }, 3000);
    } catch (error) {
        
    }
})

copyApiLinkBtn.addEventListener("click",async(e) => {
    try {
        const alertCopied = document.querySelector(".cp");
        await navigator.clipboard.writeText(apiLink.innerText);
        alertCopied.innerText = `Copied!`;
        alert(`Sucessfully copied: ${apiLink.innerText}!`)
        setTimeout(() => {
            alertCopied.innerText = `Copy Code`
        }, 3000);
    } catch (error) {
        
    }
})


form.addEventListener("input",(e) => {
    if(firstNameInput.value.length <= 0){
        submitContactFormBtn.classList.add("none");
        resetContactFormBtn.classList.add("none");
    }
    else if(lastNameInput.value.length <= 0){
        submitContactFormBtn.classList.add("none");
        resetContactFormBtn.classList.add("none");
    }
    else if(queryInput.value.length <= 0){
        submitContactFormBtn.classList.add("none");
        resetContactFormBtn.classList.add("none");
    }
    else{
        countryInput.addEventListener("change",(e) => {
            if(countryInput.value == "default"){
                submitContactFormBtn.classList.add("none");
                resetContactFormBtn.classList.add("none");
            }
            else{
                submitContactFormBtn.classList.remove("none");
                resetContactFormBtn.classList.remove("none");
            }
        })
    }
})

countryInput.addEventListener("change",async(e) => {
    if(countryInput.value == "other"){
        const countryName = prompt(`Please enter your country name below:`);
        otherCountry.value = countryName;
        alert(otherCountry.value);
    }
    else{
        return;
    }
})

newsForm.addEventListener("submit",(e) => {
    popupBg.classList.add("ok");
    popupInfo.innerText = `Sending...`;
    alert(`Thanks for subscribing to my Email newsletter! You will be kept updated about everything!`);
})

queryInput.addEventListener("input",(e) => {
    totalWords.innerText = queryInput.value.length
})


newsForm.addEventListener("input",(e) => {
    if(newsEmailInput.value.length <= 0){
        submitEmailNewsFormBtn.classList.add("none");
    }
    else{
        submitEmailNewsFormBtn.classList.remove("none");
    }
})

form.addEventListener("submit",(e) => {
    popupBg.classList.add("ok");
    popupInfo.innerText = `Sending...`;
    alert(`Thanks for contacting me! I will try my best to reach you soon! But, please note that sometimes it might also take around 24-48 hrs for a response!`)
})

Body.onload = (e) => {
    loadingText.innerText = `Getting things ready for you...`;
    setTimeout(() => {
        loadingText.innerText = `Almost there...`;
    }, 2000);
    setTimeout(() => {
        loadBg.classList.add("hide");
    }, 3500);
    setTimeout(() => {
        Body.classList.remove("no-scroll");
        popupBg.classList.add("ok");
        header.classList.add("sticky");
        popupInfo.innerText = `Welcome to my website :)`;
    }, 3700);
}

closePopupBtn.addEventListener("click",(e) => {
    popupBg.classList.remove("ok");
})

githubLink.addEventListener("mouseover",(e) => {
    footerFluid.style.width = '100%';
})

githubLink.addEventListener("mouseout",(e) => {
    footerFluid.style.width = '0'
})

window.onscroll = (e) => {
    this.scrollY > 50 ? topBtn.classList.remove("no") : topBtn.classList.add("no")
}