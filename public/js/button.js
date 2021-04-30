const scrollToTop = document.querySelector("#btnScrollToTop");

scrollToTop.addEventListener("click", scrollUp);

function scrollUp() {

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
