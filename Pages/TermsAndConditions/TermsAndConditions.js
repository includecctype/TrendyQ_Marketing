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
        end: "bottom center",
        scrub: true,
    }
})

// details

const togglecause1 = document.querySelector('.details > div > div > :nth-child(3)')
const toggleeffect1 = document.querySelector('.details > div > div > :nth-child(4)')
const togglecause2 = document.querySelector('.details > div > div > :nth-child(5)')
const toggleeffect2 = document.querySelector('.details > div > div > :nth-child(6)')
const togglecause3 = document.querySelector('.details > div > div > :nth-child(7)')
const toggleeffect3 = document.querySelector('.details > div > div > :nth-child(8)')
const togglecause4 = document.querySelector('.details > div > div > :nth-child(9)')
const toggleeffect4 = document.querySelector('.details > div > div > :nth-child(10)')
const togglecause5 = document.querySelector('.details > div > div > :nth-child(11)')
const toggleeffect5 = document.querySelector('.details > div > div > :nth-child(12)')
const togglecause6 = document.querySelector('.details > div > div > :nth-child(13)')
const toggleeffect6 = document.querySelector('.details > div > div > :nth-child(14)')
const togglecause7 = document.querySelector('.details > div > div > :nth-child(15)')
const toggleeffect7 = document.querySelector('.details > div > div > :nth-child(16)')
const togglecause8 = document.querySelector('.details > div > div > :nth-child(17)')
const toggleeffect8 = document.querySelector('.details > div > div > :nth-child(18)')
const togglecause9 = document.querySelector('.details > div > div > :nth-child(19)')
const toggleeffect9 = document.querySelector('.details > div > div > :nth-child(20)')
const togglecause10 = document.querySelector('.details > div > div > :nth-child(21)')
const toggleeffect10 = document.querySelector('.details > div > div > :nth-child(22)')
const togglecause11 = document.querySelector('.details > div > div > :nth-child(23)')
const toggleeffect11 = document.querySelector('.details > div > div > :nth-child(24)')
const togglecause12 = document.querySelector('.details > div > div > :nth-child(25)')
const toggleeffect12 = document.querySelector('.details > div > div > :nth-child(26)')

const arrow1 = document.querySelector('.details > div > div > :nth-child(1) > svg')
const arrow2 = document.querySelector('.details > div > div > :nth-child(3) > svg')
const arrow3 = document.querySelector('.details > div > div > :nth-child(5) > svg')

let index1 = 0
let index2 = 0
let index3 = 0
let index4 = 0
let index5 = 0
let index6 = 0
let index7 = 0
let index8 = 0
let index9 = 0
let index10 = 0
let index11 = 0
let index12 = 0

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

togglecause4.onclick = function(){

    if(index4 == 0){

        index4++

        toggleeffect4.style.display = "flex"

    }else if(index4 == 1){

        index4--

        toggleeffect4.style.display = "none"

    }

}

togglecause5.onclick = function(){

    if(index5 == 0){

        index5++

        toggleeffect5.style.display = "flex"

    }else if(index5 == 1){

        index5--

        toggleeffect5.style.display = "none"

    }

}

togglecause6.onclick = function(){

    if(index6 == 0){

        index6++

        toggleeffect6.style.display = "flex"

    }else if(index6 == 1){

        index6--

        toggleeffect6.style.display = "none"

    }

}

togglecause7.onclick = function(){

    if(index7 == 0){

        index7++

        toggleeffect7.style.display = "flex"

    }else if(index7 == 1){

        index7--

        toggleeffect7.style.display = "none"

    }

}

togglecause8.onclick = function(){

    if(index8 == 0){

        index8++

        toggleeffect8.style.display = "flex"

    }else if(index8 == 1){

        index8--

        toggleeffect8.style.display = "none"

    }

}

togglecause9.onclick = function(){

    if(index9 == 0){

        index9++

        toggleeffect9.style.display = "flex"

    }else if(index9 == 1){

        index9--

        toggleeffect9.style.display = "none"

    }

}

togglecause10.onclick = function(){

    if(index10 == 0){

        index10++

        toggleeffect10.style.display = "flex"

    }else if(index10 == 1){

        index10--

        toggleeffect10.style.display = "none"

    }

}

togglecause11.onclick = function(){

    if(index11 == 0){

        index11++

        toggleeffect11.style.display = "flex"

    }else if(index11 == 1){

        index11--

        toggleeffect11.style.display = "none"

    }

}

togglecause12.onclick = function(){

    if(index12 == 0){

        index12++

        toggleeffect12.style.display = "flex"

    }else if(index12 == 1){

        index12--

        toggleeffect12.style.display = "none"

    }

}
