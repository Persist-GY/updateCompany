define(['../lib/jquery-3.2.0'], function ($) {
    function Lazy() {
        //about图片
        this.$aboutImg = $('.about-ul img')

        //team图片
        this.$teamImg = $('.team-ul img')
        var that = this
        $(window).on('scroll', function () {
            that.$aboutImg.each(function(){
             if (that.appear($(this))){
                $(this).attr('src', $(this).attr('data-src'))
               }
            })
            that.$teamImg.each(function(){
             if (that.appear($(this))){
                $(this).attr('src', $(this).attr('data-src'))
               }
            })
            
        })
    }
    Lazy.prototype.appear = function ($node) {
        var windowH = $(window).outerHeight(true)
        var $nodeOffY = $node.offset().top
        var $windowScrol = $(window).scrollTop()
        if ($windowScrol + windowH > $nodeOffY) {
            return true
        }
        return false
    }
    module.exports = Lazy
})