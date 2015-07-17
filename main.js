$(document).ready(function () {
	var boxSize;
	$('p').on('click', function() {
	$(this).addClass('newtext');

});
	initialize();
	gradient();
	
});


function blockSetup() {
$('#grid-holder').on('click', function() {
	var size = 32;
	if(size === 8) {
		$('.data-block').addClass('.size8');
	}
	else if(size === 16) {
		$('.data-block').addClass('.size16');
	}
	else if(size === 32) {
		$('.data-block').addClass('.size32');
	}
	else {
		$('.data-block').addClass('.size64');
	}

	for(var i = 0; i < size; i++) {
		$('#grid-holder').append('<div class="data-block"</div>');
	}
});
}

function initialize() {
	boxSize = 32;
	for(var i = 0; i <(boxSize * boxSize); i++) {
		$('#grid-holder').append('<div class="data-block"></div>');

	}
}

function gradient() {

	$('.data-block').on('mouseenter', function() {
		var currentOpacity = $(this).css("opacity");
		$(this).css("opacity", currentOpacity - 0.30);
	});
}