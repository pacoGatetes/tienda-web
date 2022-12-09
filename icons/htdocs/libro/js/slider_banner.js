function animacion(){
	var slides_size = $('#slideshow ul li').size();
	var slides_width = $('#slideshow ul li').width();
	var ul_width = slides_size * parseInt(slides_width);
	var ul_left = parseInt($('#slideshow ul').css('left'));
	var max_left = slides_width - ul_width;

	$('#slideshow ul').animate({left: '+='+(-slides_width)+'px'}, 2000, function(){
		var ul_left = parseInt($('#slideshow ul').css('left'));
		$('#slideshow ul li:first').clone().appendTo('#slideshow ul');
		$('#slideshow ul li:first').remove();
		$('#slideshow ul').css({left: '0px'});
	});
};
		
$(document).ready(function(){

	slides_size = $('#slideshow ul li').size();
	slides_width = $('#slideshow ul li').css('width');
	ul_width = slides_size * parseInt(slides_width);
	ul_left = parseInt($('#slideshow ul').css('left'));
	max_left = slides_width - ul_width;
	
	$('#slideshow ul').css('width', ul_width + 'px');
	
	function initTimer(){
		timer = setInterval('animacion()', 4000);
	};
	
	initTimer();
	
	$('#slider').append('<a  class="prev" href="javascript:;">&nbsp;</a>');
	$('#slider').append('<a  class="next" href="javascript:;">&nbsp;</a>');
	
	$('.prev').click(function(e){
		clearInterval(timer);
		var slides_width = $('#slideshow ul li').width();
		$('#slideshow ul li:last').clone().prependTo('#slideshow ul');
		$('#slideshow ul').css({left: -slides_width+'px'});
		$('#slideshow ul').animate({left: '+='+parseInt(slides_width)+'px'}, 500, function(){
			$('#slideshow ul li:last').remove();
		});
		
	});
	$('.next').click(function(e){
		clearInterval(timer);
		$('#slideshow ul').animate({left: '+='+parseInt(slides_width)*(-1)+'px'}, 500, function(){
			$('#slideshow ul li:first').clone().appendTo('#slideshow ul');
			$('#slideshow ul li:first').remove();
			$('#slideshow ul').css({left: '0px'});
			initTimer();
		});
		e.preventDefault;

	});
	

});

