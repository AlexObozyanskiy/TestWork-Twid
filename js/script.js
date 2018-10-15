$(window).scroll(function(){
    if ($(window).scrollTop() > 430) {
        $('.fixed-container').addClass('display-block');
        $('.header').addClass('fixed-header');
    }
    else {
        $('.fixed-container').removeClass('display-block');
        $('.header').removeClass('fixed-header');
    }
});

$(document).ready(function(){
 $('.donation-block.mobile .donation-list ul').readmore({
    speed: 700,
    maxHeight: 112,
    moreLink: '<p class="read-more">Смотреть еще <span>36</span></p>',
    lessLink: '<p class="read-more">Скрыть</p>'
  });
});