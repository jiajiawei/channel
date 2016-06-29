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
        if (scrollBox.scrollLeft() >= w) {
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