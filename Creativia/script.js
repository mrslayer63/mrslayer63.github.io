$(function() {
	var tab = $('.tab');
	tab.on('click', function(event) {
		$('')
		$('.contant').removeClass('contant__active');
		$('.contant[data-tab='+$(this).attr('data-tab')+']').toggleClass('contant__active');
		$('title').toggleClass('title__active');
	});
});