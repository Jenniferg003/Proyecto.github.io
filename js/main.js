(function ($) {
    "use strict";
    
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    $(document).ready(function () {
    
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            margin: 30,
            dots: true,
            loop: true,
            items: 1
        });
    
        // Cargar comentarios desde localStorage
        function loadTestimonials() {
            const storedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
            storedTestimonials.forEach(testimonial => {
                const newTestimonial = `
                    <div class="position-relative">
                        <i class="fa fa-3x fa-quote-right text-primary position-absolute" style="top: -6px; right: 0;"></i>
                        <div class="d-flex align-items-center mb-3">
                            <img class="img-fluid rounded-circle" src="img/icono-comentario.png" style="width: 60px; height: 60px;" alt="">
                            <div class="ml-3">
                                <h6 class="text-uppercase">${testimonial.name}</h6>
                              
                            </div>
                        </div>
                        <p class="m-0">${testimonial.comment}</p>
                    </div>
                `;
                $(".testimonial-carousel").trigger('add.owl.carousel', [$(newTestimonial)]).trigger('refresh.owl.carousel');
            });
        }
    
        // Guardar comentarios en localStorage
        function saveTestimonialToLocalStorage(name, comment) {
            const storedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
            storedTestimonials.push({ name, comment });
            localStorage.setItem("testimonials", JSON.stringify(storedTestimonials));
        }
    
        // Mostrar/Ocultar el formulario al hacer clic en el botón
        $("#addTestimonialBtn").click(function () {
            $("#testimonialForm").slideToggle();
        });
    
        
        $("#newTestimonialForm").submit(function (e) {
            e.preventDefault();
    
            // Obtener datos del formulario
            const clientName = $("#clientName").val();
            const comment = $("#comment").val();
    
            // Crear nuevo elemento del comentario
            const newTestimonial = `
                <div class="position-relative">
                    <i class="fa fa-3x fa-quote-right text-primary position-absolute" style="top: -6px; right: 0;"></i>
                    <div class="d-flex align-items-center mb-3">
                        <img class="img-fluid rounded-circle" src="img/icono-comentario.png" style="width: 60px; height: 60px;" alt="">
                        <div class="ml-3">
                            <h6 class="text-uppercase">${clientName}</h6>
                        
                        </div>
                    </div>
                    <p class="m-0">${comment}</p>
                </div>
            `;
    
            // Añadir un nuevo comentario al carrusel
            $(".testimonial-carousel").trigger('add.owl.carousel', [$(newTestimonial)]).trigger('refresh.owl.carousel');
    
            // Guardar el comentario en localStorage
            saveTestimonialToLocalStorage(clientName, comment);
    
            // Limpiar formulario
            $("#newTestimonialForm")[0].reset();
    
            // Ocultar formulario
            $("#testimonialForm").slideUp();
        });
    
        // Cargar testimonios almacenados al cargar ña página
        loadTestimonials();

    });
    
    
})(jQuery);

