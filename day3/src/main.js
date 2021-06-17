window.onload = () => {

    let cur_img = 0;
    const left_arrow = document.getElementById("left-arrow")
    const right_arrow = document.getElementById("right-arrow")

    const image_container = document.getElementById("image-container")
    const circles = document.getElementsByClassName("image-btn")

    left_arrow.addEventListener("click", () => {
        if (cur_img == 0) {
            cur_img = 3
        }
        else {
            cur_img -= 1
        }
        circle_fill()
        image_container.style.transform = "translateX(" + -300*cur_img + "px)"
    })

    right_arrow.addEventListener("click", () => {
        if (cur_img == 3) {
            cur_img = 0
        }
        else {
            cur_img += 1
        }
        circle_fill()
        image_container.style.transform = "translateX(" + -300*cur_img + "px)"
    })
    
    
    Array.prototype.forEach.call(circles, (element, idx) => {
        element.addEventListener("click", ()=> {
            cur_img = idx
            circle_fill()
            image_container.style.transform = "translateX(" + -300*idx + "px)"
        })
    })


    function circle_fill() {
        Array.prototype.forEach.call(circles, (element, idx) => {
            if (idx == cur_img) {
                element.style.color = "red"
            }
            else {
                element.style.color = "black"
            }
        })
    }



}