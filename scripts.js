document.addEventListener('DOMContentLoaded', function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
