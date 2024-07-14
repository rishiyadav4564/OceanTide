


/* js for our services
var items = document.querySelectorAll('.hsersdata');

items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        items.forEach(function (otherItem) {
            otherItem.classList.remove('active');
        });
        item.classList.add('active');
    });
    item.addEventListener('mouseleave', function () {
        item.classList.remove('active');
    });
});*/

/* js for scroller in our portfolio*/
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    // Fetch data from JSON file
    fetch("json/data.json")
        .then(response => response.json())
        .then(data => {
            // Initialize with initial data
            updateText(data, 0);

            // Add event listener to scroll container
            document.getElementById('scrollContainer').addEventListener('scroll', function () {
                updateText(data);
            });

            // Add event listener to buttons
            document.getElementById('scrollLeft').addEventListener('click', function () {
                scrollImages(-550);
                updateText(data);
            });

            document.getElementById('scrollRight').addEventListener('click', function () {
                scrollImages(550);
                updateText(data);
            });
        })
        .catch(error => {
            console.error("Error loading JSON:", error);
        });

    // Function to update text content with data
    function updateText(data) {
        const container = document.getElementById('scrollContainer');
        const currentIndex = Math.round(container.scrollLeft / container.offsetWidth);
        const currentData = data[currentIndex];

        // Update text content
        titleElement.textContent = currentData.title;
        descriptionElement.textContent = currentData.description;
    }

    // Function to scroll images
    function scrollImages(offset) {
        var container = document.getElementById('scrollContainer');
        container.scrollLeft += offset;
    }
});


/*js for our services hover effect*/
const images = document.querySelectorAll('.hsersdata');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        images.forEach(img => {
            if (img !== image) {
                img.classList.remove('active');
            }
        });
        image.classList.add('active');
    });
});
