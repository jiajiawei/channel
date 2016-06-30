//秀场直击
function scroll(scrollBox) {
    var speed = 10;
    var MyMar = null;

    var w = 0;
    var aList = scrollBox.find('a');
    for(var i  = 0; i < aList.length; i++){
        w += aList.eq(i).width();
    }
    var abs = scrollBox.find('.abs-tab');
    abs.width(w*2).append(abs.html());

    function Marquee() {
        if (scrollBox.scrollLeft() > w) {
            scrollBox.scrollLeft(0);
        } else {
        	scrollBox.scrollLeft(scrollBox.scrollLeft() + 1);
        }
    }
    scrollBox.mouseenter(function() {
        clearInterval(MyMar);
        MyMar = setInterval(Marquee, speed);
    });
    scrollBox.mouseleave(function() {
        clearInterval(MyMar);
    });
}

$('.street-content').each(function(index, el) {
    scroll($(this));    
});

//秀后派对
$('.street-tab a').mouseenter(function(){
	$(this).find('p').fadeIn();
}).mouseleave(function(event) {
    $(this).find('p').fadeOut();
});

// var mySwiper = new Swiper('.runway .swiper-container', {
//     loop: true,
//     nextButton: '.runway .swiper-button-next',
//     prevButton: '.runway .swiper-button-prev'
//  }); 

var runwayContainer = $('.runway');
// var swiper = runwayContainer.find('.swiper-container').swiper({
//     speed: 500,
//     loop: true,
//     simulateTouch: false
// });

var swiper = new Swiper('.runway .swiper-container', {
    speed: 500,
    loop: true,
    simulateTouch: false
});

runwayContainer.find('.swiper-button-prev').on('click', function(e){
    e.preventDefault();
    swiper.swipePrev();
});

runwayContainer.find('.swiper-button-next').on('click', function(e){
    e.preventDefault();
    swiper.swipeNext();
});

var fitting = $('.fiting');
var mySwiper = new Swiper('.fiting .swiper-container',{
    initialSlide: 3,
    mode: 'vertical'
    // pagination: '.fiting .swiper-pagination',
    // paginationClickable: true
    // 2.0尚不支持此方法
    // paginationBulletRender: function (index, className) {
    //     console.log('paginationBulletRender');
    //     return '<span class="' + className + '">' + names[index] + '</span>';
    // }
});

fitting.find('.swiper-pagination-bullet').on('click', function(e){
    var index = fitting.find('.swiper-pagination-bullet').index(this);
    mySwiper.swipeTo(index);
    $(this).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');
});

fitting.find('.swiper-button-prev').on('click', function(e){
    e.preventDefault();
    mySwiper.swipePrev();
});

fitting.find('.swiper-button-next').on('click', function(e){
    e.preventDefault();
    mySwiper.swipeNext();
});


