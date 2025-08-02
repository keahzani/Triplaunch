document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        var logoImg = document.querySelector('header img');
        logoImg.src = 'drop.jpg'; // Replace 'your-image-url.jpg' with the URL of your image
        logoImg.alt = 'New Logo'; // Optional: Provide alternative text for the new image
    });
});
