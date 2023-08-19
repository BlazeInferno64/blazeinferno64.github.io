const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const topBtn = document.querySelector(".top-btn");


const about = document.querySelector("#about");
const api = document.querySelector("#api");
const blog = document.querySelector("#blog");
const contact = document.querySelector("#contact");
const projects = document.querySelector("#projects")
//const contentAbout = document.querySelectorAll(".about");

menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  this.scrollY > 50 ? topBtn.classList.remove("hide") : topBtn.classList.add("hide");
  this.scrollY > 60 ? about.classList.remove("no-opacity") : about.classList.add("no-opacity");
  this.scrollY > 110 ? projects.classList.remove("no-opacity") : projects.classList.add("no-opacity");
  this.scrollY > 150 ? api.classList.remove("no-opacity") : api.classList.add("no-opacity");
  this.scrollY > 190 ? contact.classList.remove("no-opacity") : contact.classList.add("no-opacity");
 // this.scrollY > 60 ? about.classList.remove("no-opacity") : about.classList.add("no-opacity");

}

/*contentAbout.forEach(cont => {
  window.onscroll = () => {
    this.scrollY > 50 ? cont.classList.add("animate") : cont.classList.remove("animate");
  }
})*/