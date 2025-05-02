// Unique function to loop through the images for card5
function slideshowCard5() {
    const images = document.querySelectorAll("#card5 .card__image");
    let currentIndex = 0;

    function changeImage() {
        // Remove the 'active' class from all images
        images.forEach((image) => image.classList.remove("active"));
        
        // Add the 'active' class to the current image
        images[currentIndex].classList.add("active");

        // Move to the next image, or loop back to the first one
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 3 seconds (adjust timing as needed)
    setInterval(changeImage, 3000);
}

// Call the function to start the slideshow for card5
slideshowCard5();
