window.onload = () => {
    
    const nav_btn = document.getElementById("nav__btn")
    let nav_container = document.getElementById("nav__container")
    const nav_close_btn = document.getElementById("nav__close-btn")
    const nav_vail = document.getElementById("nav__vail")
    const nav_links = document.getElementsByClassName("nav__menu-link")

    nav_btn.addEventListener("click", () => {
        nav_container.style.transform = "translateX(0%)"
        nav_vail.style.display = "block"
    })

    nav_close_btn.addEventListener("click", () => {
        nav_container.style.transform = "translateX(-100%)"
        nav_vail.style.display = "none"
    })

    nav_vail.addEventListener("click", () => {
        nav_container.style.transform = "translateX(-100%)"
        nav_vail.style.display = "none"
    })

    Array.prototype.forEach.call(nav_links, (element) => {
        element.addEventListener("click", () => {
            nav_container.style.transform = "translateX(-100%)"
            nav_vail.style.display = "none"
        })
    })
}


