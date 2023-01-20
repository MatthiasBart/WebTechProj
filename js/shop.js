const sideBar = document.getElementById("sideBar");
const menuButton = document.getElementById("menuButton");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const header_contact = document.getElementById("header_contact");

const resize = () => {
    if (window.innerWidth <= 800) {
        sideBar.classList.add("hide");
        menuButton.classList.remove("hide");
    } else {
        sideBar.classList.remove("show-sidebar");
        sideBar.classList.remove("hide");
        menuButton.classList.add("hide");
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
    sideBar.classList.toggle("show-sidebar");
})
// to update when loaded
resize();
// to add the event in window resize
window.onresize = resize;