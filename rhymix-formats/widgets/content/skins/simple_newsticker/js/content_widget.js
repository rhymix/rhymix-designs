function rx_sr_nt_ticker() {
	$('ul.rx_sr_nt_list').each(function(){
		if(!$(this).attr('data-height')) {
			$(this).css('height', $(this).height()).attr('data-height', $(this).height());
		}
		$(this).find('li:first-child').slideUp(400, function () {
			$(this).appendTo($(this).parent('.rx_sr_nt_list'));
		}).next().show(0);
	});
}
setInterval( function(){ rx_sr_nt_ticker() }, 4500);