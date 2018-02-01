$(function(){
	var bodyWidth = document.documentElement.clientWidth;
	var bodyHeight = document.documentElement.clientHeight;
	$('body').css('background-size',bodyWidth+'px '+bodyHeight+'px');
	
	$('.list div').mouseover(function(){
		$(this).css('background-color','rgba(255, 255, 255, 1)');
		$(this).children('a').css('color','black');
	});
	$('.list div').mouseout(function(){
		$(this).css('background-color','rgba(0, 0, 0, 0.5)');
		$(this).children('a').css('color','white');
	});
	$('.list a').mouseover(function(){
		$(this).css('text-decoration','underline');
	});
	$('.list a').mouseout(function(){
		$(this).css('text-decoration','none');
	})
})
