document.querySelector(".faq-accordion").addEventListener("click", (event) => {
    let closest = event.target.closest(".faq-accordion__item")
    if (closest) {
        closest.classList.toggle("faq-accordion__item--active")
    }
})

document.querySelector(".btn-burger").addEventListener("click", () => {
    document.querySelector(".section-header").classList.toggle("section-header_active_nav")

   

})

const hideScroll = ()=>{
    document.body.style.paddingRight = `${getScrollbarWidth()}px`
    document.body.style.overflow = "hidden"
}
const showScroll = () => {
    document.body.style.paddingRight = ""
    document.body.style.overflow = "visible"
}

//GET SCROLLBAR WIDTH
const getScrollbarWidth = () => {
    const outer = document.createElement("div")

    outer.style.position = "absolute"
    outer.style.top = "-9999px"
    outer.style.width = "50px"
    outer.style.height = "50px"
    outer.style.overflow = "scroll"
    outer.style.visibility = "hidden"

    document.body.appendChild(outer)
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth
    console.log(scrollBarWidth)


    return scrollBarWidth
}