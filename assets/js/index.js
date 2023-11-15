$(function() {
    $('.open-close').each(function() {
        var item = $(this);
        var slide = item.find('.slide').css({
            'height': 130
        });
        var opener = item.find('.more');
        var isSlideOpen = false;
        var slideHeight = slide.find('.slide-content').innerHeight();
      
        opener.click(function(e) {
            e.preventDefault();
          
            if(isSlideOpen) {   
                slide.stop(true).animate({
                    height: 130
                }, function() {
                    isSlideOpen = false;
                    $('.view-more').css('display', 'block');
                    $('.view-less').css('display', 'none');
                }
                );
            } else {
                slide.stop(true).animate({
                    height: slideHeight + 80
                }, function() {
                    isSlideOpen = true;
                    $('.view-more').css('display', 'none');
                    $('.view-less').css('display', 'block');
                },
               );
            }
        });
    });
});