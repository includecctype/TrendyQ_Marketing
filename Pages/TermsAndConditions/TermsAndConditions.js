gsap.registerPlugin(ScrollTrigger , ScrollSmoother)

/* Scroll Smooth */

const smoothscroll = ScrollSmoother.create({
    smooth: 1.5,
    wrapper: ".wrap",
    content: ".content",
    ignoreMobileResize: false,
    smoothTouch: 0.5,
    smooth: 1,
})

/* drop down */

const body = document.querySelector('body')
const dropdown = document.querySelector('.dropdown')
const openmenu = document.querySelector('.navbar > :nth-child(8)')
const closemenu = document.querySelector('.dropdown > :nth-child(1)')

openmenu.addEventListener('click', function(){

    smoothscroll.paused(true)
    body.style.overflowY = "hidden"
    dropdown.style.top = `${window.pageYOffset}px`
    dropdown.style.display = "flex"

})


closemenu.addEventListener('click', function(){
    dropdown.style.display = "none"
    body.style.overflowY = "auto"
    smoothscroll.paused(false)
})

