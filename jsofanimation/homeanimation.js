gsap.registerPlugin(Draggable);

let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

// set initial state of items
gsap.set('.cards div', { xPercent: 400, opacity: 0, scale: 0 });

const spacing = 0.13, // spacing of the cards (stagger)
    snapTime = gsap.utils.snap(spacing), // we'll use this to snapTime the playhead on the seamlessLoop
    cards = gsap.utils.toArray('.cards div'),
    // this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced
    animateFunc = element => {
        const tl = gsap.timeline();
        tl.fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false })
            .fromTo(element, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0);
        return tl;
    },
    seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
    playhead = { offset: 0 }, // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
    wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
    scrub = gsap.to(playhead, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
        offset: 0,
        onUpdate() {
            seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
        },
        duration: 0.4,
        ease: "power3",
        paused: true
    });

// feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
function scrollToOffset(offset) { // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
    let snappedTime = snapTime(offset),
        progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
    scrub.vars.offset = (iteration + progress) * seamlessLoop.duration();
    scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
}

document.querySelector(".next").addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing));
document.querySelector(".prev").addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing));


function buildSeamlessLoop(items, spacing, animateFunc) {
    let rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
        seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
            paused: true,
            repeat: -1, // to accommodate infinite scrolling/looping
            onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                this._time === this._dur && (this._tTime += this._dur - 0.01);
            },
            onReverseComplete() {
                this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
            }
        }),
        cycleDuration = spacing * items.length,
        dur; // the duration of just one animateFunc() (we'll populate it in the .forEach() below...

    // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
    items.concat(items).concat(items).forEach((item, i) => {
        let anim = animateFunc(items[i % items.length]);
        rawSequence.add(anim, i * spacing);
        dur || (dur = anim.duration());
    });

    // animate the playhead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
    seamlessLoop.fromTo(rawSequence, {
        time: cycleDuration + dur / 2
    }, {
        time: "+=" + cycleDuration,
        duration: cycleDuration,
        ease: "none"
    });
    return seamlessLoop;
}



/* load animation home page */



gsap.from("#fh1", {
    opacity: 0,
    y: 40,
    duration: 2,
    delay: 1,
    scrollTrigger: "#fh1"


})
/*animation for home about section */
gsap.from(".habt #sleft", {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 2,


    scrollTrigger: {
        trigger: ".habt #sleft",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 50%",
        scrub: true
    }
})

gsap.from(".habt #sright", {
    opacity: 0,
    y: 200,
    duration: 2,


    scrollTrigger: {
        trigger: ".habt #sright",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 50%",
        scrub: true
    }
})

/*animation for home our services section */
gsap.from(".hservice #hsleft", {
    opacity: 0,
    y: 150,
    duration: 2,

    scrollTrigger: {
        trigger: ".hservice #hsleft",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})
gsap.from(".hservice #hsleftp", {
    opacity: 0,
    y: 100,
    duration: 1,

    scrollTrigger: {
        trigger: ".hservice #hsleftp",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})
gsap.from(".hservice #hslefti", {
    opacity: 0,
    y: 50,
    duration: 1,

    scrollTrigger: {
        trigger: ".hservice #hslefti",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})

gsap.from(".hservice #hsright", {
    opacity: 0,
    x: 100,



    scrollTrigger: {
        trigger: ".hservice #hsright",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",

        scrub: true
    }
})

/*animation for home our portfolio section */
gsap.from(".ourportfolio #hofleft", {
    opacity: 0,
    y: 150,
    duration: 2,

    scrollTrigger: {
        trigger: ".ourportfolio #hofleft",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})
gsap.from(".ourportfolio #hofleftp", {
    opacity: 0,
    y: 100,
    duration: 1,

    scrollTrigger: {
        trigger: ".ourportfolio #hofleftp",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})
gsap.from(".ourportfolio #hoflefti", {
    opacity: 0,
    y: 50,
    duration: 1,

    scrollTrigger: {
        trigger: ".ourportfolio #hoflefti",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 50%",
        scrub: true
    }
})

gsap.from(".ourportfolio #hofright", {
    opacity: 0,
    x: 100,



    scrollTrigger: {
        trigger: ".ourportfolio #hofright",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 60%",

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


/* animation for lines*/
gsap.from("#hrlines", {

    width: "0%",
    duration: 2,
    repeat: -1,
    yoyo: true,


    scrollTrigger: "#hrlines"


})
gsap.from(".tr-lines", {

    width: "0%",
    duration: 2,




    scrollTrigger: {
        trigger: ".tr-lines",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",

        scrub: true
    }


})

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