window.addEventListener("DOMContentLoaded", (event) => {
    let home = document.querySelector(".home-link")
    let about = document.querySelector('.about-link')
    let menu = document.querySelector('.menu-link')
    let location = document.querySelector('.location-link')
    console.log(home)
    home.addEventListener("click", () => {
        window.location = "index.html"
    })
    about.addEventListener("click", () => {
        window.location = "about.html"
    })
    menu.addEventListener("click", () => {
        window.location = "menu.html"
    })
    location.addEventListener("click", () => {
        window.location = "location.html"
    })

})