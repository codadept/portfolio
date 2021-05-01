var navLinks = document.querySelector("header .nav-links");
var close = document.querySelector(".close");
var ham = document.querySelector(".ham");

ham.addEventListener("click",()=>{
    navLinks.style.right = "0";
    close.style.right = "150px";
    scrollToTop.style.display="none";
})

close.addEventListener("click",()=>{
    close.style.right="-150px";
    navLinks.style.right="-200px";
    scrollToTop.style.display="block";
})