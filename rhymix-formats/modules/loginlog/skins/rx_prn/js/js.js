/**
 * @brief Check touchable device or not.
 * @author misol <misol.kr@gmail.com>
 **/
function isRxPrnTouchable() {
	var el = document.createElement('div');
	el.setAttribute('ontouchstart', 'return;'); // or try "ontouchstart"
	return typeof el.ontouchstart === "function";
}

$(document).ready(function() {
	if(isRxPrnTouchable()) {
		$(".rx_prn_loginlog div.rx_prn_tab ul.rx_prn_tab").css('white-space', 'nowrap');
		try
		{
			$(".rx_prn_loginlog div.rx_prn_tab ul.rx_prn_tab").animate({
				scrollLeft: $(".rx_prn_loginlog div.rx_prn_tab ul.rx_prn_tab li.active").offset().left
			}, 300);
		} catch (e) {
		}
	}
});