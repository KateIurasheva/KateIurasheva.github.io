$(function() {
    var k = 0;  

    $('button').on('click', (function(){
        if (k===0) {
            for (var i = 1; i < 4; i++) {
                $('.box:nth-child(' + i + ')'+'> .field')
                .append($('<span>' + ($('.box:nth-child(' + i + ')').find('.inpt').attr('title')) + '</span>').addClass('tooltips'));
                };
            k++;
                } else {
                    $('span').remove();
                    k = 0;
                };
        //         $('span').animate({
        //     opacity: 1
        // }, 500)
        }));
    
    $('.field').hover(
        function() {
        $('span').remove();
        k=0;
        $(this).append($('<span>' + ($(this).find('.inpt').attr('title')) + '</span>').addClass('tooltips'));
        }, function() {
            $(this).find( 'span:last' ).remove();
        }

    );

});