define(function (require) {
    $ = require('../lib/jquery-3.2.0')
    function Cycle() {
        var $cycle = $('.head-img');
        var $btnNext = $('.btn.next');
        var $btnPre = $('.btn.pre');
        var $pageCon = $('.foot-img');
        var currentPage = 0;
        var continueP = true;
        var timer;
        var clearTimer;
        var windowW = $(window).outerWidth(true)
        console.log(windowW)
        //开始计时
        setIn();
        //点击下一张
        $btnNext.on('click', function (e) {
            e.preventDefault()
            playNext();
            clearIn();
            
        })

        //点击上一张
        $btnPre.on('click', function () {
            playPre();
            clearIn();
        })

        //点击page跳到相对应图片
        $('.foot-img>li').on('click', function () {
            var index = $(this).index();
            playPage(index);
        })


        function playPage(index) {
            continueP = false;
            $cycle.animate({ left: -(index + 1) * windowW }, function () {
                currentPage = index;
                continueP = true;
                pageControll();
                if (clearTimer === timer) {
                    setIn();
                }
            })
        }

        function playNext(n) {
            if (!continueP) {
                return;
            };
            continueP = false;
            $cycle.animate({ left: '-='+windowW }, function () {
                
                currentPage++;
                if (currentPage === $cycle.children().length - 2) {
                    $cycle.css('left', '-'+windowW+'px');
                    currentPage = 0;
                }
                continueP = true;
                pageControll();
                if (clearTimer === timer) {
                    setIn();
                }
            })


        }


        function playPre(n) {
            if (!continueP) {
                return;
            };
            continueP = false;
            $cycle.animate({ left: '+='+windowW }, function () {
                currentPage--;
                if (currentPage === -1) {
                    $cycle.css('left', -($cycle.children().length - 2) * windowW);
                    currentPage = 4;
                }
                continueP = true;
                pageControll();
                if (clearTimer === timer) {
                    setIn();
                }
            })

        }

         function pageControll() {
            $pageCon.children()
                .removeClass('active')
                .eq(currentPage)
                .addClass('active');
        }
        function setIn() {
            timer = setInterval(function () {
                playNext();
            }, 3000);
        }
        function clearIn() {
            clearTimer = timer;
            clearInterval(timer)
        }
    }
    module.exports = Cycle;

})