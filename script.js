$(function() {
    var header = $(".homeHeading");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            header.removeClass('homeHeading').addClass("header-alt");
        } else {
            header.removeClass("header-alt").addClass('homeHeading');
        }

        //   if (scroll >= 50) {
        //     header.removeClass('textDivider').addClass("textDivider-alt");
        // } else {
        //     header.removeClass("textDivider-alt").addClass('textDivider');
        // }


    });
});