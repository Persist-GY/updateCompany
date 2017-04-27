
define(function (require) {
    function Title() {
$ = require('../lib/jquery-3.2.0')
    //判断p(加载数据)是否一出现在可视范围
    function isVisible($node) {
        var windowHeight = $(window).outerHeight(true);
        var scrollTop = $(window).scrollTop();
        var nodeHeight = $node.outerHeight(true);
        var offsetHeight = $node.offset().top;
        if ((scrollTop > offsetHeight - windowHeight) && (scrollTop < offsetHeight + nodeHeight)) {
            return true;
        } else {
            return false;
        }
    }

    var $service = $('#services')
    var $portfolio = $('#portfolio')
    var $about = $('#about')
    var $team = $('#team')
    var $contact = $('#contact')

    var $servicet = $('.ser')
    var $portfoliot = $('.por')
    var $aboutt = $('.abo')
    var $teamt = $('.tea')
    var $contactt = $('.con')
    var $titles = $('.small-title>a')

    $(window).on('scroll', function () {
        
        $titles.removeClass('active')
        if (isVisible($service)) {
            $servicet.addClass('active')
        } else if (isVisible($portfolio)) {
            $portfoliot.addClass('active')
        } else if (isVisible($about)) {
            $aboutt.addClass('active')
        } else if (isVisible($team)) {
            $teamt.addClass('active')
        } else if (isVisible($contact)) {
            $contactt.addClass('active')
        }

    })
    }
    module.exports = Title;
})