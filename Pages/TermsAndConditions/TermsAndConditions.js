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

