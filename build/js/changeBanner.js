$(function () {
    var num = 0,
        imgCount = $('.banner').children().length,
        $li = $('.banner li');

    $li.hide();
    $li.eq(num).show();

    var timer = setInterval(right, 2000);

    function left() {
        //淡入隐藏当前图片
        $('.banner li').eq(num).stop(true).fadeOut();
        num--; //自减以达到上一张的目的
        if (num == -1) {
            //如果当前是第一张则跳转到最后一张
            num = imgCount - 1;
        }
        $('.banner li').eq(num).stop(true).fadeIn();
    }

    //右切换方法
    function right() {
        $('.banner li').eq(num).stop(true).fadeOut();
        num++;
        if (num == imgCount) {
            num = 0;
        }
        $('.banner li').eq(num).stop(true).fadeIn();
    }

    //绑定按键
    $('.bt-left').click(function () {
        left();
        clearInterval(timer);
        timer = setInterval(right, 2000);
    })

    $('.bt-right').click(function () {
        right();
        clearInterval(timer);
        timer = setInterval(right, 2000);
    })

    $('.banner').hover(() => {
        clearInterval(timer)
    }, () => {
        timer = setInterval(right, 2000);
    })
})