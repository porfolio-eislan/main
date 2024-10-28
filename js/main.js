(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();



   // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

let lastScrollTop = 0;
const element = document.getElementById("scrollElement");

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll ke bawah - elemen muncul
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
    } else {
        // Scroll ke atas - elemen menghilang
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Menghindari nilai negatif
});


document.getElementById('sendMessage').addEventListener('click', function() {
    // Ambil data dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=yusufeislan@gmail.com&su=${encodeURIComponent(subject)}&body=Halo,%20saya%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})%20(${encodeURIComponent(phone)})%20mempunyai%20pertanyaan:%0D%0A${encodeURIComponent(message)}`;

    window.open(mailtoLink, '_blank');
});


