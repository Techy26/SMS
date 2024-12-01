// Smooth Scroll for Navigation Links
$(document).ready(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // Get the target element's ID
        var target = $(this).attr("href");

        // Scroll to the target element smoothly
        $("html, body").animate({
            scrollTop: $(target).offset().top - 50
        }, 1000);
    });
});

// Scroll Animations: Animate elements when they appear on the screen
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.animate__animated');
    var windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        var elementTop = element.getBoundingClientRect().top;

        if (elementTop <= windowHeight - 100) {
            element.classList.add('animate__fadeIn');
        }
    });
});
