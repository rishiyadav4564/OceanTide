function navheight() {
    var div = document.querySelector('.rightnav2');
    var checkbox = document.getElementById('check')
    if (checkbox.checked) {
        div.style.display = 'grid';
    }
    else {
        div.style.display = 'none';
    }
}



gsap.to("#ologo", {

    duration: 2,
    rotate: 360,
    repeat: -1,
    yoyo: true
})

/*var tl = gsap.timeline();

tl.to("#ologo", {
    duration: 2,
    top: -200,
    x: 100
})*/


