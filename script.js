const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>160)
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    menu.classList.remove('open');
};


const animate=scrollreveal({
    origin:'top'
    distance

})