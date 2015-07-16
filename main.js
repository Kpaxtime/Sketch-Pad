$(document).ready(function () {

	blockSetup();

});


function blockSetup() {
$('option').on('click', function() {
	var size = $('option').data('dimension');
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

	for(var i = 0; i < size, i++) {
		$('#grid-holder').append('.data-block');
	}
}
});