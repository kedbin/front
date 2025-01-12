document.addEventListener("DOMContentLoaded", function() {
    const cvLink = document.getElementById("cvLink");
    const cvSection = document.getElementById("cvSection");
    const cvImage = document.getElementById("cvImage");

    // Handle the CV link click
    cvLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Set the image source (make sure the path is correct)
        const imageUrl = 'https://kedbin.ca/images/kedbin.jpg'; // Update this path if necessary
        cvImage.src = imageUrl;

        // Show the CV section with the same effect as _show in main.js
        $main._show('cvSection'); // Assuming 'cvSection' is treated as an article
    });

    // Optionally, you can handle closing the CV section similarly to other articles
    $(document).on('click', function(event) {
        if ($(event.target).closest('#cvSection').length === 0) {
            // If clicked outside the CV section, hide it
            $main._hide();
        }
    });

    // Close functionality for the CV section (like the other articles)
    $('#cvSection .close').on('click', function() {
        $main._hide();
    });
});
