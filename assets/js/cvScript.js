// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const cvLink = document.getElementById("cvLink");
    const cvSection = document.getElementById("cvSection");
    const cvImage = document.getElementById("cvImage");

    // Event listener to handle clicking the 'My CV' link
    cvLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent link default behavior
        const imageUrl = 'https://kedbin.ca/images/kedbin.jpg'; // Set image URL

        // Set the image source and display the section
        cvImage.src = imageUrl;
        cvSection.style.display = "block"; // Show the section containing the image
    });
});
