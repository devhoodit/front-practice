window.onload = function () {
    const nav_logo = document.getElementById("nav-logo")
    const nav_open_btn = document.getElementById("nav-open-btn")
    const nav_close_btn = document.getElementById("nav-close-btn")
    const nav__btn = document.getElementsByClassName("nav__btn")
    
    
    let nav__container = document.getElementById("nav-container")
    let nav__vail = document.getElementById("nav__vail")



    function nav_close() {
        nav__container.style.left = "-100%"
        nav__vail.style.display = "none"
    }



    nav_logo.addEventListener("click", function () {
        window.open('https://github.com/devhoodit').focus()    
    })

    nav_open_btn.addEventListener("click", function () {
       nav__container.style.left = 0
       nav__vail.style.display = "block"
    })

    nav_close_btn.addEventListener("click", () => nav_close())
    nav__vail.addEventListener("click", () => nav_close())

    

    Array.prototype.forEach.call(nav__btn, (element) => {
      element.addEventListener("click", () => nav_close())  
    })
    

}