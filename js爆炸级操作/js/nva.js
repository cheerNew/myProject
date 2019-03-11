$(function() {
	var directionValue = $("#direction").val();
	var left = $('.rightBtn');
	var bg = $('.bgDiv');
	var leftNav = $('.leftNav');
	showNav(left, leftNav, "left");
	function showNav(btn, navDiv, direction) {
		$(".itemChild").hide();
		btn.on('click', function() {
			bg.css({
				display: "block",
				transition: "opacity .5s"
			});
			if(direction == "left") {
				navDiv.css({
					left: "0px",
					transition: "left 1s"
				});
			} 
		});
	}
	$('.item').each(function() {
		var dom = $(this);
		var HEIGHT = dom.on('click', function() {
			skipToTarget(targetUrl);
			hideNav();
		});
	});
	bg.on('click', function() {
		hideNav();
	});
	function hideNav() {
		leftNav.css({
			left: "-60%",
			transition: "left .5s"
		});
		bg.css({
			display: "none",
			transition: "display 1s"
		});
	}
});

