$(document).ready(function(){
	$("#first-page").click(function(e) {
	  e.preventDefault();
	  $(".main-page").fadeOut("slow");
	  setTimeout(
		  function() 
		  {
		    $(".factory-page").fadeIn("slow");
		  }, 500);
	});
	$("#history-more").click(function(e) {
		e.preventDefault();
		$("#history-more-container").slideDown(800);
		$("#history-more").hide();

	});
	$("#history-more-sec").click(function(e) {
		e.preventDefault();
		$("#history-more-container-sec").slideDown(800);
		$("#history-more-sec").hide();

	});
	$('.carousel').carousel({
		interval: 3000
	});
	$(".close-button").click(function() {
		$("#history-more-container").slideUp(800);
		$("#history-more").show();
	});
	$(".close-button-sec").click(function() {
		$("#history-more-container-sec").slideUp(800);
		$("#history-more-sec").show();
	});
	$(".play-button").click(function() {
		$("#video-container").html('<iframe class="video-iframe" width="566px" height="555px" src="https://www.youtube.com/embed/WYNkHN7V6lE?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	});

});