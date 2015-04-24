$(document).ready(function(){
	$('#nav').slicknav();
	
	
	var owl = $("#owl-demo");
 
	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev").click(function(){
	owl.trigger('owl.prev');
	});
	
	
	
	var owltwo = $("#owl-demo2");
 
	owltwo.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next2").click(function(){
	owltwo.trigger('owl.next');
	})
	$(".prev2").click(function(){
	owltwo.trigger('owl.prev');
	});
	
	var owlthree = $("#owl-demo3");
 
	owlthree.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next3").click(function(){
	owlthree.trigger('owl.next');
	})
	$(".prev3").click(function(){
	owlthree.trigger('owl.prev');
	});
	
	
	
	var owlfour = $("#owl-demo4");
 
	owlfour.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next4").click(function(){
	owlfour.trigger('owl.next');
	})
	$(".prev4").click(function(){
	owlfour.trigger('owl.prev');
	});
	
	
	
	var owlfive = $("#owl-demo5");
 
	owlfive.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next5").click(function(){
	owlfive.trigger('owl.next');
	})
	$(".prev5").click(function(){
	owlfive.trigger('owl.prev');
	});
	
	
	var owlsix = $("#owl-demo6");
 
	owlsix.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next6").click(function(){
	owlsix.trigger('owl.next');
	})
	$(".prev6").click(function(){
	owlsix.trigger('owl.prev');
	});
	
	
	var owlseven = $("#owl-demo7");
 
	owlseven.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next7").click(function(){
	owlseven.trigger('owl.next');
	})
	$(".prev7").click(function(){
	owlseven.trigger('owl.prev');
	});
	
	
	
	
	var owleight = $("#owl-demo8");
 
	owleight.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next8").click(function(){
	owleight.trigger('owl.next');
	})
	$(".prev8").click(function(){
	owleight.trigger('owl.prev');
	});
	
	
	
	var owlnine = $("#owl-demo9");
 
	owlnine.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});
	 
	// Custom Navigation Events
	$(".next9").click(function(){
	owlnine.trigger('owl.next');
	})
	$(".prev9").click(function(){
	owlnine.trigger('owl.prev');
	});
});

