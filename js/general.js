// JavaScript Document
// Created By Jose Nino Garcia

$(document).ready(function(){
	
	$("#leftFunc").click(function(){
		$(".imageShow ul li").hide();
		var id = $("ul.containerClad li div").index(this);
		$(".imageShow ul li:nth-child(" + (id + 1) + ")").fadeIn();
		
		var imageShow = $(".imageShow li");
	});	
	
	$(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 70;
		 if ($(window).scrollTop() > navHeight) {
			 $('.InsideBarTwo').addClass('fixed');
		 }
		 else {
			 $('.InsideBarTwo').removeClass('fixed');
		 }
	});
	
	$("#MYslider").AnySlider({
		bullets: true,
	});
	
	$("#imgDefault").click(function(){
		window.location = "index.html";	
	});	

		
	//Navigation Animation
	$(".BI_Navigation li").mouseenter(function(){
		var listWidth = $(".BI_Navigation li").width();
		var mainWidth = $(".BI_Navigation").width();
		var styleWidth = $(this).width();
		
		$(this).each(function(){
			var indexNUM = $(".BI_Navigation li").index(this);
			var myWidth = indexNUM * listWidth;
			$(".arrowPort").css("margin-left", myWidth);
			//$(".arrowPort").animate({
				//"margin-left": myWidth	
			//});
		});
	});	
	
	$(".BI_Navigation li").mouseleave(function(){ });
	
	$("ul.TBRightContainer li").mouseenter(function(){
		var listWidth = $("ul.TBRightContainer li").width();
		var mainWidth = $("ul.TBRightContainer").width();
		var styleWidth = $(this).width();
		
		$(this).each(function(){
			var indexNUM = $("ul.TBRightContainer li").index(this);
			var myWidth = indexNUM * (listWidth + 15);
			$(".arrowPortDown").css("margin-left", myWidth);
		});
	});
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	 });
	 
	 //CODE FOR THE SLIDER
	 //CREATED BY: JOSE NINO GARCIA
	 
	 var count = 1;
	 var countTwo = 1;
	 var containerWidth = $("ul.containerClad li").width();
	 var totalSliderWidth = $("ul.containerClad").width();
	 var sliderFirstLen = $("ul.containerClad li").length;
	 var relLen = (sliderFirstLen - 1) * containerWidth;

	 $("#rightPort").click(function(){
					
			var totalWidth =  (count++) * containerWidth;	
			
			if(totalWidth > relLen){
				$("ul.containerClad").animate({
					"margin-left": "0" 	
				});
				count = 1;
			}	else{
				$("ul.containerClad").animate({
					"margin-left": "-" + totalWidth 	
				});
			}
			console.log(totalWidth);

	 });
	 
	 $("#leftPort").click(function(){
	       var totalWidth =  (countTwo--) * containerWidth;
		   $("ul.containerClad").animate({
				"margin-left": "-" + totalWidth  	
		   });
	 });
	 
	 $("ul.containerClad li div").click(function(){
		$(".imageShow ul li").hide();
		var id = $("ul.containerClad li div").index(this);
		$(".imageShow ul li:nth-child(" + (id + 1) + ")").fadeIn();
	 });
	 
	 for(var p = 0; p <  $("ul.containerClad li div").length; p++){
		 
     }
	 
	 $("ul.containerClad li div").mouseenter(function(){
		 for(var i = 0; i <  $("ul.containerClad li div").length; i++){
		 
		 }
	 });
	 
	 function linkStart(linkf){
		window.location = linkf; 
	 }
	 
});