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
	$('.close').click(function(){ 
//		if(typeof($('.main').attr('id'))=='undefined'){
//			$('.main').attr('id','container2');
//		}
//		console.log($('.main').attr('id'));
		if($('.container').css('display')=='none'){
			$('.main').attr('id','container2');
			$('.main').css('height','44%');
			$('.close').children('img').attr('src','img/up.png');
			$('.container').show();
		}else{
			$('.main').attr('id','container1');
			$('.main').css('height','5%');
			$('.close').children('img').attr('src','img/down.png');
			$('.container').hide();
		}
	})
})
