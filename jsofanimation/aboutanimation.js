/* load animation home page */



gsap.from(".abtfv h1 ", {
    opacity: 0,
    y: 40,
    duration: 2,
    delay: 1,
})
gsap.from(".abtfv h5 ", {
    opacity: 0,
    y: 40,
    duration: 2,
    delay: 1,
})



/*ourstory  animation about page */
gsap.from("#abt #abtslefth", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: "#abt #abtslefth",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 60%",
        scrub: true
    }
})

gsap.from("#abt #abtsleftp", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: "#abt #abtsleftp",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 70%",
        scrub: true
    }
})

gsap.from("#abt #abtsright", {
    opacity: 0,
    y: 200,
    duration: 2,


    scrollTrigger: {
        trigger: "#abt #abtsright",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 30%",
        scrub: true
    }
})

/*ourvision  animation about page */
gsap.from("#tabt #abttlefth", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: "#tabt #abttlefth",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 60%",
        scrub: true
    }
})

gsap.from("#tabt #abttleftp", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: "#tabt #abttleftp",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 70%",
        scrub: true
    }
})

gsap.from("#tabt #abttright", {
    rotate: -360,
    opacity: 0,

    scrollTrigger: {
        trigger: "#tabt #abttright",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 30%",
        scrub: true
    }
})


/*ourvision  animation about page */
gsap.from("#fabt #abtflefth", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: "#fabt #abtflefth",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 60%",
        scrub: true
    }
})

gsap.from("#fabt #abtfleftp", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: "#fabt #abtfleftp",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 70%",
        scrub: true
    }
})

gsap.from("#fabt #abtfright", {
    rotate: 360,
    opacity: 0,


    scrollTrigger: {
        trigger: "#fabt #abtfright",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 30%",
        scrub: true
    }
})

/*our values animation */

gsap.from(" #abtfov", {

    opacity: 0,
    y: 200,
    duration: 2,




    scrollTrigger: {
        trigger: " #abtfov",
        scroller: "body",
        markers: false,
        start: "top 99%",
        end: "top 98%",
        scrub: true
    }
})
/* our team line animation */
gsap.from(".hr-lines", {

    width: "0%",
    duration: 2,




    scrollTrigger: {
        trigger: ".hr-lines",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",

        scrub: true
    }


})
/*animation for cta*/

gsap.from(".homecta", {

    opacity: 0,
    y: 100,
    duration: 2,




    scrollTrigger: {
        trigger: ".homecta",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 50%",

        scrub: true
    }


})

gsap.from("#hrlines", {

    width: "0%",
    duration: 2,
    repeat: -1,
    yoyo: true,


    scrollTrigger: "#hrlines"


})