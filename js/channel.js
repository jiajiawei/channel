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
        if (scrollBox.scrollLeft() > 0) {
            scrollBox.scrollLeft(scrollBox.scrollLeft() - 1);
        } else {
            scrollBox.scrollLeft(w);
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


