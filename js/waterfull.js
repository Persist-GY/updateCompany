define(['jquery'], function ($) {
    var page = 1;
    var loading = false;
    var listArr = [0, 0, 0, 0]

    $('.portfolio-ul>button').on('click', function(){
        loadNews();
    })
    //jsonp回调函数
    function func(obj) {
        console.log(obj)
        for (var i = 0; i < obj.data.length; i++) {
            var object = obj.data[i]
            //创建li
            var $li = getNode(object)
            //监听图片下载完成，然后设置高度
            //这个是领写的函数，直接写会莫名其妙的问题,就是append只拼接了一个
            //for循环里有回调函数，都是坑  还是多用each，用另一个函数包裹
            water($li)
        }

        //成功以后，设置继续可以请求数据
        loading = false;
        //页数加一
        page++;
    }
    function getNode(object) {
        return $('<li>\
                    <a href='+ object.url + '><img src=' + object.img_url + '></a>\
                    <h3>'+ object.short_name + '</h3>\
                    <p>'+ object.name + '</p>\
                </li>')
    }
    //重点 折腾了好长时间
    function water($li) {
        $li.find('img').on('load', function () {
            $('.portfolio-ul>ul').append($li)

            //以下等append以后才再取值，否则娶不到 $li.outerHeight(true)
            // console.log($li)
            var minValue = Math.min.apply(null, listArr)
            var minIndex = listArr.indexOf(minValue);
            //  console.log(111,listArr)
            $li.css({ left: minIndex * $li.outerWidth(true), top: minValue })
            listArr[minIndex] = $li.outerHeight(true) + minValue;

            //算出父容器高度，把p标签弄下去
            $('.portfolio-ul>ul').height(Math.max.apply(null, listArr));
            $('.portfolio-ul>button').css('display', 'inline-block')
            console.log(listArr, listArr[minIndex], $li.outerHeight(true))
        })
    }

    //第一次请求数据
    loadNews();


    function createScript(fn) {
        $.get({
            async:false,
            url: 'http://platform.sina.com.cn/slide/album_tech',
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                app_key:1271687855,
                page: page,
                num: 12
            },
            success: function(res){
                fn(res)
            }
        });
    }

///窗口滚动时
// $(window).on('scroll', function () {
//     if(isShowP($('.contain>p'))){
//        loadNews();
//     }

// })

//请求数据
function loadNews() {
    // console.log(loading)
    if (loading === true) return;
    loading = true;
    // if(isShowP($('.contain>p'))){

    createScript(function(res){
        func(res)
    })
    //  loadNews();
    // }

}
function isShowP($node) {
    var scroTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var offsetT = $node.offset().top;
    var pHeight = $node.height();
    if (scroTop > offsetT - windowHeight) {
        return true;
    }
    return false;

}
})