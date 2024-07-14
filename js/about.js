document.addEventListener("DOMContentLoaded", function () {
    fetch('json/aboutdata.json')
        .then(response => response.json())
        .then(data => {
            const content = data.content;
            let currentIndex = 0; // Initialize current index

            // Function to update content
            function updateContent() {
                const currentItem = content[currentIndex];
                const images = currentItem.images;
                const texts = currentItem.texts;

                // Update images with fade-in animation
                const imageElements = document.querySelectorAll('.slide img');
                imageElements.forEach((imageElement, i) => {
                    imageElement.classList.remove('fade-in');
                    setTimeout(() => {
                        imageElement.src = images[i];
                        imageElement.classList.add('fade-in');
                    }, 100); // Adding a slight delay to ensure smooth transition
                });

                // Update text with fade-in animation
                const headingElement = document.getElementById('slbth');
                const paragraphElement = document.getElementById('slbtp');
                headingElement.classList.remove('fade-in');
                paragraphElement.classList.remove('fade-in');
                setTimeout(() => {
                    headingElement.textContent = texts.heading;
                    paragraphElement.textContent = texts.paragraph;
                    headingElement.classList.add('fade-in');
                    paragraphElement.classList.add('fade-in');
                }, 100); // Adding a slight delay to ensure smooth transition

                // Increment index or reset to 0 if reached end
                currentIndex = (currentIndex + 1) % content.length;
            }

            // Call updateContent initially
            updateContent();

            // Set interval to update content every 5 seconds (5000 milliseconds)
            setInterval(updateContent, 5000);
        })
        .catch(error => console.error('Error fetching JSON:', error));
});


/* js for our team */
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