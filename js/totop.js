define(['jquery'], function ($) {
    var $top = $('.totop')
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 1000) {
            $top.fadeIn(300,function(){

            })
        }else{
            $top.fadeOut(300,function(){
                
            })
        }
        
    })

})