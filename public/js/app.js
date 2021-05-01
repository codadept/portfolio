var navLinks = document.querySelector("header .nav-links");
var close = document.querySelector(".close");
var ham = document.querySelector(".ham");
var scrollToTop = document.querySelector("#btnScrollToTop");

ham.addEventListener("click",()=>{
    navLinks.style.right = "0";
    close.style.right = "100px";
    scrollToTop.style.display="none";
})

close.addEventListener("click",()=>{
    close.style.right="-100px";
    navLinks.style.right="-150px";
    scrollToTop.style.display="block";
})