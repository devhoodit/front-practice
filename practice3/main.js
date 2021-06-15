window.onload = () => {


    const card = document.getElementById("card")
    let card_line = document.getElementById("card__line")


    card.addEventListener("mouseover" , () => {
        card_line.style.display = "block"
        card_line.style.transform = "translateX(0%)"
    })
}