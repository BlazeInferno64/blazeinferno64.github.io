var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function checkOnline(){
    const btn = document.getElementById('btn');
    const txt = document.getElementById('online');
    txt.innerHTML = 'Checking...'
    btn.innerHTML = 'Checking...'
    setTimeout(fun,3000);
    
    function fun(){

    if(navigator.onLine == true){
        btn.innerHTML = 'Check again';
        txt.innerHTML = 'You are currently online';
    }
    else{
        btn.innerHTML = 'Check again';
        txt.innerHTML = 'Seems like you are currently offline, try the tester again being online ';
    }
}
}
function copy(){
    const copy = document.getElementById('copy')
    const code = document.getElementById('code').innerText
    navigator.clipboard.writeText(code);
    copy.innerText = 'Copied!';
    console.log('Copied successfully :' +code);
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
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
function showAlert(){
  alert("Thanks for contacting, I would soon try to reach you, plss note that it might take around 24-48hours time but I would try my best to reach soon!");
}

/*const clicker = document.getElementById("display")
const data = document.getElementById("data")

clicker.onclick = function(){
  data.style.display = "block";
}*/

function display(){
  document.getElementById("data").style.display = "block";
}
function txt(){
  const copy = document.getElementById('dis')
  const code = document.getElementById('ip').innerText
  navigator.clipboard.writeText(code);
  copy.innerText = 'Copied!';
  console.log('Copied successfully :' +code);
}
            //function display(){
            //fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => document.getElementById('ip').innerHTML = data)
            //}
