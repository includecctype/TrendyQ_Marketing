gsap.registerPlugin(ScrollTrigger , ScrollSmoother)

/* Scroll Smooth */

const smoothscroll = ScrollSmoother.create({
    smooth: 1.5,
    wrapper: ".wrap",
    content: ".content",
    ignoreMobileResize: false,
    smoothTouch: 0.5,
    smooth: 1,
    effects: true,
})

/* nav bar */

const navbar = document.querySelector(".navbar")
const logo = document.querySelector('.navbar > :nth-child(1)')
const wordlogo = document.querySelector('.navbar > :nth-child(2)')

logo.addEventListener('click', function(){

    window.location.href = "../../index.html"

})

wordlogo.addEventListener('click', function(){

    window.location.href = "../../index.html"

})

gsap.to(navbar, {
    scrollTrigger: {
        normalizeScroll: true,
        anticipatePin: 1,
        trigger: navbar,
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=1000"
    }
})

/* drop down */

const body = document.querySelector('body')
const dropdown = document.querySelector('.dropdown')
const openmenu = document.querySelector('.navbar > :nth-child(6)')
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

// title

const titlediv = document.querySelector('.title')
const title = document.querySelector('.title > h1')

gsap.to(titlediv, {
    scale: 0.2,
    height: "20vh",
    scrollTrigger: {
        trigger: titlediv,
        start: "center center",
        end: "center+=150 center",
        scrub: true,
    }
})

// details

const togglecause1 = document.querySelector('.details > div > div > :nth-child(1)')
const toggleeffect1 = document.querySelector('.details > div > div > :nth-child(2)')
const togglecause2 = document.querySelector('.details > div > div > :nth-child(3)')
const toggleeffect2 = document.querySelector('.details > div > div > :nth-child(4)')
const togglecause3 = document.querySelector('.details > div > div > :nth-child(5)')
const toggleeffect3 = document.querySelector('.details > div > div > :nth-child(6)')

const arrow1 = document.querySelector('.details > div > div > :nth-child(1) > svg')
const arrow2 = document.querySelector('.details > div > div > :nth-child(3) > svg')
const arrow3 = document.querySelector('.details > div > div > :nth-child(5) > svg')

let index1 = 0
let index2 = 0
let index3 = 0

togglecause1.onclick = function(){

    if(index1 == 0){

        index1++

        toggleeffect1.style.display = "flex"

    }else if(index1 == 1){

        index1--

        toggleeffect1.style.display = "none"

    }

}

togglecause2.onclick = function(){

    if(index2 == 0){

        index2++

        toggleeffect2.style.display = "flex"

    }else if(index2 == 1){

        index2--

        toggleeffect2.style.display = "none"

    }

}

togglecause3.onclick = function(){

    if(index3 == 0){

        index3++

        toggleeffect3.style.display = "flex"

    }else if(index3 == 1){

        index3--

        toggleeffect3.style.display = "none"

    }

}
