const sideBar = document.getElementById("sideBar")
const menuButton = document.getElementById("menuButton")

const resize = () => {
    if (window.innerWidth <= 800) {
        sideBar.classList.add("hide")
        menuButton.classList.remove("hide")
    } else {
        sideBar.classList.remove("show-sidebar")
        sideBar.classList.remove("hide")
        menuButton.classList.add("hide")
    }
}

menuButton.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar")
})
// to update when loaded
resize()
// to add the event in window resize
window.onresize = resize