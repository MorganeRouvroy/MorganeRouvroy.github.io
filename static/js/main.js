(function($){
	$(document).ready(function(){
		//Empty space. Fill this with your site specific JS code
		$('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });
	});
})(jQuery);
