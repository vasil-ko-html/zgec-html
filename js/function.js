$(function(){
	//hover on last item in nav
  $(".js-hover").hover(function(){
    $("#nav").toggleClass("active");
  });

  //slider content
  var slider = $('.js-slider-vnz'),
  		sliderUL = slider.children('ul'),
  		items = sliderUL.find('.item'),
  		itemW = 710,
  		itemsLen = items.length,
  		totalItemsW = itemW * itemsLen,
  		current = 1,
  		btns = $('.next, .prev', slider);
  btns.on('click', function(){
  	var direction = $(this).data('dir'),
  			position = itemW;
  	(direction === 'next') ? ++current : --current;
  	if(current === 0)
  	{
  		current = itemsLen;
  		direction = 'next';
  		position = totalItemsW - itemW;
  		items.animate({
  			opacity: 'toggle'
  		}, {duration: 0, queue: false}).animate({
  			opacity: 'toggle'
  		}, {duration: 1500, queue: false});
  	}
  	else if(current-1 === itemsLen)
  	{
  		current = 1;
  		position = 0;
  		items.animate({
  			opacity: 'toggle'
  		}, {duration: 0, queue: false}).animate({
  			opacity: 'toggle'
  		}, {duration: 1500, queue: false});
  	}
  	scrollContent(sliderUL, position, direction);
  });
  function scrollContent(container, position, direction) {
  	var sign; //-= +=
  	if(direction && position !== 0)
  	{
  		sign = (direction === 'next') ? '-=' : '+=';
  	}
  	container.animate({
  		marginLeft: sign ? (sign+position) : position
  	});
  }
});