const nav = document.getElementsByTagName("nav")[0];
const menuButton = document.getElementById("menuButton");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const header_contact = document.getElementById("header_contact");
const menuLinksArray = document.getElementsByClassName("menuLink");
const menuLinkContainer = document.getElementById("menuLinkContainer");

function make_sticky() {
    if (window.scrollY >= 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

const resize = () => {
    if (window.innerWidth <= 800) {
        menuButton.classList.remove("hide");
        menuLinkContainer.classList.add("smallMode");
        for (link of menuLinksArray) {
            link.classList.add("hide")
        }
    } else {
        menuButton.classList.add("hide");
        menuLinkContainer.classList.remove("smallMode");
        for (link of menuLinksArray) {
            link.classList.remove("hide");
        }
    }
    if (window.innerWidth <= 450) {
        if(header_contact.parentNode == header) {
            footer.appendChild(header.removeChild(header_contact));
        }
        
    } else {
        if(header_contact.parentNode == footer) {
            header.appendChild(footer.removeChild(header_contact));
        }
    }
}

menuButton.addEventListener("click", () => {
    for (link of menuLinksArray) {
        link.classList.toggle("hide")
    }
})
// to update when loaded
resize();
// to add the event in window resize
window.onresize = resize;

document.addEventListener("scroll", make_sticky);
