$(document).ready(function () {

    // navigation-toggle
    $('.navbar-toggler').click(function () {
        $('.navbar-nav').slideToggle(500, 'linear');
        $('.navbar-nav').css({ 'display': 'flex !important' });
        return false;
    });


    //banner-slider 
    $('.carousel-inner').slick({
        dots: false,
        autoplay: true,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>'
    });

    //about-creativia menu toggle
    $('.toggle-button').click(function () {
        $header = $(this);
        $content = $header.next();
        $content.slideToggle(500, function () {
        });
        $(this).toggleClass('active');
        return;
    });


    // Price tabs
    $('#menu-tabs li').click(function () {
        var thisClass = this.className.slice(0, 3);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.t4').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#menu-tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();


    //our-clients-slider 
    $('.our-clients-slider').slick({
        dots: true,
        autoplay: true,
        arrows: false
    });


    // blog-block-slide-toggle
    $('.toggler').click(function () {
        $('.toggling').slideToggle(1000, 'linear');
        $('.toggling').css({ 'display': 'flex'});
        $(this).toggleClass('active');
        return false;
    });
});