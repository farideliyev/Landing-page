const header = document.querySelector(".section-header")
const mainNavigation = document.getElementById("main-navigation")

document.querySelector(".faq-accordion").addEventListener("click", (event) => {
    let closest = event.target.closest(".faq-accordion__item")
    if (closest) {
        closest.classList.toggle("faq-accordion__item--active")
    }
})

document.querySelector(".btn-burger").addEventListener("click", () => {
    header.classList.toggle("section-header_active_nav")

    if (header.classList.contains("section-header_active_nav")) {
       hideScroll()
    } else {
        showScroll()
    }

})

const resetNav = () => {
  header.classList.remove("section-header_active_nav")
    showScroll()
}
window.addEventListener("resize", resetNav)

const hideScroll = ()=>{
    const scrollWidth = `${getScrollbarWidth()}px`
    document.body.style.paddingRight = scrollWidth
    document.body.style.overflow = "hidden"

    mainNavigation.style.paddingRight = scrollWidth
}
const showScroll = () => {
    document.body.style.paddingRight = ""
    document.body.style.overflow = "visible"

    mainNavigation.style.paddingRight = ""
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


// Swiper
new Swiper('.section-hero-image', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

new Swiper('.slider-blog-container', {
    loop:true,
    pagination: {
        el: ' .section-blog .dots',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.slider-quotes-container', {
    loop:true,
    slidesPerView: "auto",
    pagination: {
        el: ' .section-quotes__right .dots',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


