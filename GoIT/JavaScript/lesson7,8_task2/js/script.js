$(function() {
    var showHint = false;  

    $('button').on('click', (function(){
        if (!showHint) {
            for (var i = 1; i < 4; i++) {
                $('.box:nth-child(' + i + ')'+'> .field')
                .append($('<span>' + ($('.box:nth-child(' + i + ')').find('.inpt').attr('title')) + '</span>').addClass('tooltips'));
                };

                showHint = true;

                $('span').animate({
                opacity: 1
                }, 500)

                } else {
                    $('span').remove();
                    showHint = false;
                };
        }));
    
    $('.field').hover(
        function() {
        $('span').remove();
        showHint = false;
        $(this).append($('<span>' + ($(this).find('.inpt').attr('title')) + '</span>').addClass('tooltips'));
        $('span').animate({
        opacity: 1
        }, 500)
        }, function() {
            $(this).find( 'span:last' ).remove();
        }

    );

});