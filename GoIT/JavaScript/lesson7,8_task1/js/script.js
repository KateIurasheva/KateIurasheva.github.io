 $(function(){

    $('.first').on('click', function(){
        active('.first_content', '.first', '.second_content', '.second', '.third_content', '.third');
    });

    $('.second').on('click', function(){
        active('.second_content','.second', '.first_content','.first', '.third_content', '.third');
    });

    $('.third').on('click', function(){
        active('.third_content', '.third', '.first_content','.first', '.second_content','.second');
    });

function active(contentActive, tabActive, contentNonActive1, tabNonActive1, contentNonActive2, tabNonActive2){
    
    $(contentActive).css("display", "block");
    $(tabActive).css({
        background: 'white'
    }); 

    $(contentNonActive1).css("display", "none");
    $(tabNonActive1).css({
        background: '#eeeeee'
    });

    $(contentNonActive2).css("display", "none");
    $(tabNonActive2).css({
        background: '#eeeeee'
    });
}
});