function closeProfile(){
  document.getElementById("about-profile").style.width = "0";
  document.getElementById("about-profile").style.display = "none";
 }
 function openAbout() {
   document.getElementById("about-profile").style.width = "500px";
   document.getElementById("about-profile").style.display = "block";
   console.log("Profile opened sucessfully");

 }
function openNav() {
document.getElementById("mySidenav").style.height = "360px";
document.getElementById("closebtn1").style.display ="block";
document.getElementById("links1").style.display ="none";
console.log("nav was successfully opened")
}

function closeNav() {
document.getElementById("mySidenav").style.height = "0";
document.getElementById("closebtn1").style.display ="none";
document.getElementById("links1").style.display ="block";
console.log("nav was successfully closed")
}
function exeFunc() {
 document.getElementById("mySidenav").style.height = "0";
 document.getElementById("about-profile").style.width = "0";
 document.getElementById("about-profile").style.display = "none";
 console.log("Profile hiddened sucessfully");
 myVar = setTimeout(showPage, 3000);
 
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
  setCookie('user', 'John', {secure: true, 'max-age': 3600});
  
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
  
} 
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
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

function showAlert2() {
  var myText = "Make sure to enter a valid email address";
  alert (myText);
  }

  function showAlert() {
    var myText = "Thanks for subcribing to our post we would love to hear your feedback,for more info. a verifictaion mail will be sent to your email address to verify its you";
    alert (myText);
  }
  function showTime(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day =d.getDay();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    switch(month){
        case 1:
            month="January";
            break;
        case 2:
            month="February";
            break;
        case 3:
            month="March";
            break;
        case 4:
            month="April";
            break;
        case 5:
            month="May"
            break;
        case 6:
            month="June"
            break;
        case 7:
            month="July"
            break;
        case 8:
            month="August"
            break;
        case 9:
            month="September"
            break;
        case 10:
            month="October"
            break;
        case 11:
            month="November"
            break;
        case 12:
            month="December"
            break;
        default:

    }

    switch(day){
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        case 7:
            day="Sunday";
            break;
        default:   
    }


    //console.log("old: ", hour);
    var MV = "AM";
    if(hour == 12){
        MV = "PM";
    }
    if(hour > 12){
        hour = hour % 12;
        MV = "PM";
    }
    //console.log("new: ", hour);

    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    //console.log("mod: ",hour);

    document.getElementById("clock").innerHTML = "<b>Date and Time is:</b> "+day+" "+date+"th "+month+" "+year+", "+hour+":"+min+":"+sec+" "+MV;
}
    
setInterval(showTime,1000);
        
        
        