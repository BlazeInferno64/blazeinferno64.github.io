const ipInput = document.querySelector("#ip");

const ipBtn = document.querySelector(".check");

const copyIpBtn = document.querySelector(".copy");

const closeBtn = document.querySelector(".done-btn");

const ipArea = document.querySelector(".ip-displayer");

//const ipUrl = 'https://api.ipify.org?format=json';

copyIpBtn.addEventListener("click",(e) => {
    navigator.clipboard.writeText(ipInput.value);
    alert(`Successfully copied! ${ipInput.value}`);
})

ipBtn.addEventListener("click",(e) => {
    fetchIp();
    ipArea.classList.remove("display");
})

closeBtn.addEventListener("click",(e) => {
    ipArea.classList.add("display");
})

function fetchIp(ip){
    //    fetch('https://api.ipify.org?format=json')
    fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => ipInput.value = data.ip)
    .catch((err) => {
        ipInput.value = 'Oops! an error occured';
        console.error(err);
        alert("An error occured!");
    })
    
}