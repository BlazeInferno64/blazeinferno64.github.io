const forms = document.querySelector(".sub-form");

const submitBtn = document.querySelector(".submit");

const emailInput = document.querySelector(".email");
const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");
const queryInput = document.querySelector(".query");

const popupBox = document.querySelector(".alert");
const popupBoxContainer = document.querySelector(".cont");

const closePopupBtn = document.querySelector(".close");

const popupBoxText = document.querySelector("#text-popup");


const limitChars = document.querySelector("#length");

const barFluid = document.querySelector(".fluid-bar");

const footerLink = document.querySelector(".foot-txt a");

const submit = document.querySelector(".submit");

forms.addEventListener("input",(e) => {
    if(firstNameInput.value.length <= 0){
        submitBtn.classList.add("done");
    }
    else if(lastNameInput.value.length <= 0){
        submitBtn.classList.add("done");
    }
    else if(emailInput.value.length <= 0){
        submitBtn.classList.add("done");
    }
    else if(queryInput.value.length <= 0){
        submitBtn.classList.add("done");
    }
    else{
        submitBtn.classList.remove("done")
    }
})

forms.addEventListener("submit",(e) => {
    alert("Thanks for contacting me, I will try my best to reach to you soon, but please note that sometimes it might take around 24-48 hours for a response, but anyways I will try my best!")
    popupBoxContainer.style.bottom = '5%';
    popupBoxText.innerText = 'Sending...';
})

queryInput.addEventListener("input",(e) => {
    if(queryInput.value.length <= 0){
        limitChars.classList.add("white");
        limitChars.classList.remove("green");
        limitChars.classList.remove("yellow");
    }
    if(queryInput.value.length > 0){
        limitChars.classList.remove("white");
        limitChars.classList.add("green");
        limitChars.classList.remove("yellow");
    }
    if(queryInput.value.length >= 100){
        limitChars.classList.remove("white");
        limitChars.classList.remove("green");
        limitChars.classList.add("yellow");
    }
    limitChars.innerText = `${queryInput.value.length} Words`;
})


closePopupBtn.addEventListener("click",(e) => {
    popupBoxContainer.style.bottom = '-100%';
})


function bufferContent(){
      function setCookie(Default, value, options = {}) {
    
        options = {
          path: '',
          // add other defaults here if necessary
          ...options
        };
      
        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
      }
      
      // Example of use:
      setCookie('user', 'Visitor', {secure: true, 'max-age': 3600});
      
      function deleteCookie(Default) {
        setCookie(Default, "", {
          'max-age': -1
        })
      }
      
      // returns the cookie with the given name,
      // or undefined if not found
      function getCookie(Default) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + Default.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      console.log('Welcome here @'+document.cookie);
      
    }


    footerLink.addEventListener("mouseover",(e) => {
        barFluid.style.width = '100%';
    })
    footerLink.addEventListener("mouseout",(e) => {
        barFluid.style.width = '0';
    })