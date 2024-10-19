gsap.registerPlugin(ScrollTrigger , ScrollSmoother)

/* Scroll Smooth */

const smoothscroll = ScrollSmoother.create({
    smooth: 1.5,
    wrapper: ".wrap",
    content: ".content",
    normalizeScroll: true,
})

/* Standard match media */

const phonewidth = window.matchMedia('(max-width: 600px)')
const tabletwidth = window.matchMedia('(min-width: 600px) and (max-width: 1100px)')
const phoneandtabletwidth = window.matchMedia('(max-width: 1100px)')
const laptopwidth = window.matchMedia('(min-width: 1100px)')

/* Nav Bar */

const topbar = document.querySelector('.navbar > :nth-child(1)')
const topbarheight = parseFloat(getComputedStyle(topbar).height)
const navbarnotop = document.querySelector('.navbar > :nth-child(2)')
const navbar = document.querySelector(".navbar")

if(laptopwidth.matches){

    window.addEventListener('scroll', function(){

        if(this.window.scrollY >= 1900){

            gsap.to(navbarnotop, {

                duration: 0.5,
                y: -topbarheight/2,
                onComplete: function(){

                    topbar.style.display = "none"

                }

            })

        }

        if(this.window.scrollY <= 1900){

            topbar.style.display = "flex"

            gsap.to(navbarnotop, {

                duration: 0.5,
                y: 0,

            })

        }

    })

}

if(phoneandtabletwidth.matches){

    window.addEventListener('scroll', function(){

        if(this.window.scrollY >= 1800){

            gsap.to(navbarnotop, {

                duration: 0.5,
                y: -topbarheight/2,
                onComplete: function(){

                    topbar.style.display = "none"

                }

            })

        }

        if(this.window.scrollY <= 1800){

            topbar.style.display = "flex"

            gsap.to(navbarnotop, {

                duration: 0.5,
                y: 0,

            })

        }

    })

}

gsap.to(navbar, {
    scrollTrigger: {
        trigger: navbar,
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=4500"
    }
})

// Mission Spacing

/*
const missionspacing = document.querySelector(".missionspacing")
const navbarheight = parseFloat(getComputedStyle(navbar).height)

missionspacing.style.height = `${navbarheight}px`
*/

// drop down

const body = document.querySelector('body')
const dropdown = document.querySelector('.dropdown')
const opendropdown = document.querySelector('.navbar > div:nth-child(2) > svg:nth-child(8)')
const closedropdown = document.querySelector('.dropdown > svg:nth-child(1)')

opendropdown.onclick = function(){
    dropdown.style.top = `${window.scrollY}px`
    dropdown.style.display = "flex"
    smoothscroll.paused(true)
    body.style.overflowY = "hidden"
}

closedropdown.onclick = function(){
    dropdown.style.display = "none"
    body.style.overflowY = "auto"
    smoothscroll.paused(false)
}

/*
gsap.to(dropdown, {
    scrollTrigger: {
        trigger: dropdown,
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=4000"
    }
})
*/

// Slide Show

const arrowleft = document.querySelector('.slideshow > div > :nth-child(1) > :nth-child(1)')
const arrowright = document.querySelector('.slideshow > div > :nth-child(1) > :nth-child(2)')
const arrowleftcolor = document.querySelector('.slideshow > div > :nth-child(1) > :nth-child(1) > g > :nth-child(2)')
const arrowrightcolor = document.querySelector('.slideshow > div > :nth-child(1) > :nth-child(2) > g > :nth-child(2)')
const slideshow = document.querySelector('.slideshow > div > :nth-child(2)')

let slideindex = 1

setInterval(function(){

    slideindex++

    if(slideindex == 5){

        slideindex = 1

        slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) + 400}%`

    }

    slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) - 100}%`

}, 10000)

arrowright.onclick = function(){

    arrowrightcolor.style.animation = "arrowcolorchange 1s ease"
    
    setTimeout(function(){
        arrowrightcolor.style.animation = ""
    }, 1000)

    slideindex++

    if(slideindex == 5){

        slideindex = 1

        slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) + 400}%`

    }

    slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) - 100}%`

}

arrowleft.onclick = function(){

    arrowleftcolor.style.animation = "arrowcolorchange 1s ease"

    setTimeout(function(){
        arrowleftcolor.style.animation = ""
    }, 1000)

    slideindex--

    if(slideindex == 0){

        slideindex = 4

        slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) - 400}%`

    }

    slideshow.style.left = `${(parseFloat(slideshow.style.left) || 0) + 100}%`
}

// Discover

const discoverbtn = document.querySelectorAll(':is(.discover > div) > div > div:nth-child(2) > a')
const discoverspan = document.querySelectorAll(':is(.discover > div) > div > div:nth-child(2) > a > span')

for(let i = 0; i < 4; i++){

    discoverbtn[i].addEventListener("mouseover", function(cursor){

        const x1 = cursor.clientX
        const y1 = cursor.clientY

        const x2 = discoverbtn[i].getBoundingClientRect().left
        const y2 = discoverbtn[i].getBoundingClientRect().top

        discoverbtn[i].appendChild(discoverspan[i])

        discoverspan[i].style.left = `${x1-x2}px`
        discoverspan[i].style.top = `${y1-y2}px`

        gsap.to(discoverspan[i], {
            duration: 1,
            scale: 100,
        })

    })

    discoverbtn[i].addEventListener("mouseleave", function(){
        gsap.to(discoverspan[i], {
            duration: 1,
            scale: 0
        })
    })

}

// Top pick phone

        /* New Images, create index for word and image swap */

const toppickimg1 = document.querySelector('.toppickphone > img:nth-child(1)')
const toppickimg2 = document.querySelector('.toppickphone > img:nth-child(2)')

function toppickimg1function(){
    gsap.to(toppickimg1, {
        duration: 1,
        x: 450,
        rotation: 720,
        yoyo: false,
        onStart: function(){
            toppickimg2.removeEventListener("click", toppickimg2function)

            setTimeout(function(){
                toppickimg2.addEventListener("click", toppickimg2function)
            }, 1100)
        },
        onComplete: function(){
            toppickimg2.style.zIndex = "1"
            toppickimg1.style.zIndex = "0"

            gsap.to(toppickimg1, {
                duration: 0,
                x: 0,
                rotation: 0,
                yoyo: false,
            })
        }
    })
}

function toppickimg2function(){
    gsap.to(toppickimg2, {
        duration: 1,
        x: 450,
        rotation: 720,
        yoyo: false,
        onStart: function(){
            toppickimg1.removeEventListener("click", toppickimg1function)

            setTimeout(function(){
                toppickimg1.addEventListener("click", toppickimg1function)
            }, 1100)
        },
        onComplete: function(){
            toppickimg1.style.zIndex = "1"
            toppickimg2.style.zIndex = "0"

            gsap.to(toppickimg2, {
                duration: 0,
                x: 0,
                rotation: 0,
                yoyo: false,
            })
        }
    })
}

toppickimg1.addEventListener("click", toppickimg1function)
toppickimg2.addEventListener("click", toppickimg2function)

/*

Their Awards section goes here

*/

/*

    Payment options section here

*/


