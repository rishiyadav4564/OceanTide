gsap.from("#conright4", {
    opacity: 0,
    x: 150,
    duration: 2,
    delay: 2



})



gsap.from("#hrlines", {

    width: "0%",
    duration: 2,
    repeat: -1,
    yoyo: true,


    scrollTrigger: "#hrlines"


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

gsap.to("#hrlines", {

    width: "80%",
    duration: 2,
    repeat: -1,
    yoyo: true,


    scrollTrigger: "#hrlines"


})