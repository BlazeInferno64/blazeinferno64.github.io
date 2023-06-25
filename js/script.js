function copyCode(c){
    const btn = document.getElementById("copy-btn");
    const code = document.getElementById("code");

    navigator.clipboard.writeText(code.innerText);
    btn.innerText = "Copied!";
    console.table(c);
    console.log(`Successfully copied ${code.innerText} to clipboard`);
}
function copyAPI(a){
    const btn = document.getElementById("copy-btn1");
    const code = document.getElementById("code1");

    navigator.clipboard.writeText(code.innerText);
    btn.innerText = "Copied!";
    console.table(a);
    console.log(`Successfully copied ${code.innerText} to clipboard`);
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
const img = document.querySelector(".img");
const seketonLoading = document.querySelector(".skeleton");

setTimeout(function(){
    img.style.display = 'inline-block';
    seketonLoading.style.display = 'none'
},3500)
function checkOnline(){
    const onlineBtn= document.getElementById("btn5");
    const txt = document.getElementById("online");

    onlineBtn.innerText = 'Checking...';
    txt.innerHTML = 'Checking...'
    txt.style.color = 'rgb(230, 230, 16)';
    txt.style.borderColor = 'rgb(230, 230, 16)';

    setTimeout(fun,2000);

    function fun(){

        if(navigator.onLine == true){
            onlineBtn.innerHTML = 'Check again';
            txt.style.color = 'rgb(1, 182, 113)';
            txt.style.borderColor = 'rgb(1, 182, 113)';
            txt.innerHTML = 'You are currently online!';
        }
        else{
            onlineBtn.innerHTML = 'Check again';
            txt.style.color = 'hsl(340, 90%, 53%)';
            txt.style.borderColor = 'hsl(340, 90%, 53%)';
            txt.innerHTML = 'Seems like you are currently offline, try the tester again after being online! ';
        }
    }
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
  function showAlert(){
    const country = document.getElementById("country");
    const select = document.getElementById("select");

      alert("Thanks for contacting me, I would soon try to reach you, plss note that it might take around 24-48 hours time but I would try my best to reach soon!");
  }
  function copyLine(){
    const btn = document.getElementById("copy-btn3");
    const code = document.getElementById("code3");

    navigator.clipboard.writeText(code.innerText);
    btn.innerText = "Copied!";
    console.log(`Successfully copied ${code.innerText} to clipboard`);
}
 function txt(){
    const btn = document.getElementById("dis");
    const code = document.getElementById("ip");

    navigator.clipboard.writeText(code.innerText);
    btn.innerText = "Copied!";
    console.log(`Successfully copied ${code.innerText} to clipboard`);

 }
 
 function bufferContent(){
  const notes = document.querySelector(".notes");
  const closeBtn = document.querySelector(".close-nt");

  setTimeout(fun,1000);

  function fun(){
    notes.style.display = 'block';
    closeBtn.style.display = 'block';
  }
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
function copyCode7(c){
    const btn = document.getElementById("copy-btn7");
    const code = document.getElementById("code7");

    navigator.clipboard.writeText(code.innerText);
    btn.innerText = "Copied!";
    console.table(c);
    console.log(`Successfully copied ${code.innerText} to clipboard`);
}
function closePatch(){
  const informer = document.getElementById("informer");
  const closeBtn = document.querySelector(".close-nt");
  const notes = document.querySelector(".notes");
  
  notes.style.display = 'none';
  informer.style.display = 'block';
  closeBtn.style.display = 'none'
}
function showPatch(){
  const informer = document.getElementById("informer");
  const notes = document.querySelector(".notes");
  const closeBtn = document.querySelector(".close-nt");

  informer.style.cursor = 'progress';
  setTimeout(load,1500)
  function load(){
    informer.style.cursor = 'pointer';
    informer.style.display = 'none';
    notes.style.display = 'block';
    closeBtn.style.display = 'block';
  }
}
