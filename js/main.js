const nav = document.getElementsByTagName("nav")[0];

function make_sticky() {
    
    if (window.scrollY >= 50) {

        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

document.addEventListener("scroll", make_sticky);
