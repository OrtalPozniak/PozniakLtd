let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("myRecommand");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        /*mobile navigation*/
        $('#mobile-nav-icon').click(function() {
            $('#navbar-tontent').slideToggle(350);
    
            if($('#mobile-nav-icon i').hasClass('ion-navicon-round')){
                $('#mobile-nav-icon i').removeClass('ion-navicon-round');
                $('#mobile-nav-icon i').addClass('ion-ios7-close-outline');
                $('.navbar-all').css('height', '350px'); /*how far the window opens with the click of a button */
            } else {
                $('#mobile-nav-icon i').removeClass('ion-ios7-close-outline');
                $('#mobile-nav-icon i').addClass('ion-navicon-round');
                if($('.navbar-all').hasClass('sticky-nav')){
                    $('.navbar-all').css('height', '70px');
                } else {
                    $('.navbar-all').css('height', '33px');/*To what size will the window repeat by pressing the button again */
                }
            }
        })
