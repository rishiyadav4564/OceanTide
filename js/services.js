let count = 0;
const targets = document.querySelectorAll(".box");
gsap.set(targets, { xPercent: 100 });
gsap.set(targets[0], { xPercent: 0 });

let intervalId; // To hold the interval ID

// Function to start automatic scrolling
function startAutoScroll() {
    intervalId = setInterval(slideOneNext, 4000); // Change 3000 to your desired interval in milliseconds
}

// Function to stop automatic scrolling
function stopAutoScroll() {
    clearInterval(intervalId);
}

// Next button
function slideOneNext() {
    gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 });
    count = count < targets.length - 1 ? ++count : 0;
    gsap.fromTo(targets[count], { xPercent: 100, zIndex: 10 }, { duration: 1.2, xPercent: 0, zIndex: 0 });
}

// Previous button
function slideOnePrev() {
    gsap.fromTo(targets[count], { xPercent: 0, zIndex: 10 }, { xPercent: 0, zIndex: 0 });
    gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 });
    count = count > 0 ? --count : targets.length - 1; // Adjusted condition to handle negative count
}

// Event listeners for next and previous buttons
nextButton.addEventListener("click", function () {
    slideOneNext();
    stopAutoScroll(); // Stop automatic scrolling when user interacts
});

prevButton.addEventListener("click", function () {
    slideOnePrev();
    stopAutoScroll(); // Stop automatic scrolling when user interacts
});

// Start automatic scrolling when the page loads
startAutoScroll();

/* front view js end */

/*js for image slide on button click*/
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons for first scroll container
    document.getElementById('scrollLeft').addEventListener('click', function () {
        scrollImages('scrollContainer', -550);
    });

    document.getElementById('scrollRight').addEventListener('click', function () {
        scrollImages('scrollContainer', 550);
    });

    // Add event listeners to buttons for second scroll container
    document.getElementById('scrollLeft1').addEventListener('click', function () {
        scrollImages('scrollContainer1', -550);
    });

    document.getElementById('scrollRight1').addEventListener('click', function () {
        scrollImages('scrollContainer1', 550);
    });
    document.getElementById('scrollLeft2').addEventListener('click', function () {
        scrollImages('scrollContainer2', -550);
    });

    document.getElementById('scrollRight2').addEventListener('click', function () {
        scrollImages('scrollContainer2', 550);
    });
    document.getElementById('scrollLeft3').addEventListener('click', function () {
        scrollImages('scrollContainer3', -550);
    });

    document.getElementById('scrollRight3').addEventListener('click', function () {
        scrollImages('scrollContainer3', 550);
    });
});

// Function to scroll images
function scrollImages(containerId, offset) {
    var container = document.getElementById(containerId);
    container.scrollLeft += offset;
}
