define(function (require) {
    function GoTop(){
$ = require('../lib/jquery-3.2.0')
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
    }
    
    module.exports = GoTop;

})