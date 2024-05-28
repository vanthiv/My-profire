alert("Hello Everyone!!? Wellcome To Website By Thiv");
const menu = document.querySelector(".Menu");
const nav = document.querySelector(".nav-bar");
menu.addEventListener("click",() =>{
    menu.classList.toggle("achtive");
    nav.classList.toggle("achtive");
})
const body = document.body;
function Thiv(){
    body.classList.toggle("blackmode");
}
