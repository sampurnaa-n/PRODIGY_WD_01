window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#ffff00'; // Change to yellow when scrolled
    } else {
        navbar.style.backgroundColor = '#ffb6c1'; // Change back to baby pink
    }
});