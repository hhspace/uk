$(window).ready(function() {
    $('.home header').removeClass('bg-white');
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.home header').addClass('bg-white');
    }
    else {
        $('.home header').removeClass('bg-white');
    }
});