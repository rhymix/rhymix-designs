function rx_sr_ticker() {
	$('.rx_sr_list').each(function(){
		$('li:first-child').slideUp( function () {
			$(this).appendTo($(this).parent('.ticker01')).slideDown();
		});
	});
	
}
setInterval( function(){ rx_sr_ticker() }, 4500);