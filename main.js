var boxSize;
var hasGrid = false;

$(document).ready(function () {
	$('p').on('click', function() {
	$(this).addClass('newtext');

});
	initialize();
	gradient();
	

	
	$('#gradient').on('click', function () {
		gradient();
	});
	

	$('#trail').on('click', function() {
		trail();
	});

	$('#rainbow').on('click', function() {
		randomColor();
	});

	 /* $('#rapid-change').on('click', function() {
		clearRandomChange();
	});
	*/

	$('#grid').on('click', function() {
		showGrid();
	})
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
		
	resetStyle();

	$('.data-block').on('mouseenter', function() {
		var currentOpacity = $(this).css("opacity");
		$(this).css("opacity", currentOpacity - 0.30);
	});
}

function trail() {

	resetStyle();

	$('.data-block').on('mouseenter', function() {
		$(this).css("opacity", 0);
		$(this).animate({opacity: 1}, "slow");
	});
}

function randomColor() {

	resetStyle();

	$('.data-block').on('mouseenter',function() {
		
		$(this).css('background-color', randomChange());
	});
}

/* function clearGridGradient() {
	$('button').on('click', function() {
		$('#grid-holder').empty();
		initialize();
		gradient();
	});
}

function clearGridTrail() {
	$('button').on('click', function() {
		resetStyle();
		trail();
	});
}

function clearGridRandom() {
	$('button').on('click', function() {
		$('#grid-holder').empty();
		initialize();
		randomColor();
	});
}		

 function rapidChange() {
	$('button').on('click', function() {
		while(true)	{
			$('.data-block').animate({background-color : randomChange() }, "slow");
		}
	});
}
*/

function randomChange() {
		var maxNum = 16777215;

		var newColor = Math.ceil((maxNum * Math.random())).toString(16);
		var colorLength  = 6 - newColor.length;

		for(var i = 0; i < colorLength; i++) {
			newColor = "0" + newColor;
		}
		newColor = "#" + newColor;
		return newColor;
}
/* function clearRandomChange() {
		$('#grid-holder').empty();
		initialize();
		rapidChange();
}
*/
function showGrid() {
	if($('#grid').text() == "Show Grid") {
		$('.data-block').addClass('show-grid');
		 $("#grid").text("Hide Grid");
		 hasGrid = true;
	}
	else {
		$('.data-block').removeClass('show-grid');
		$("#grid").text("Show Grid");
		hasGrid = false;
	}
}

function keepGrid() {
	if(hasGrid) {
		$('.data-block').addClass('show-grid');
	}
	else {
		$('.data-block').removeClass('show-grid');
	}
}

/* function gridText() {
	 if($('#grid').innerHTML == "Show Grid") {
	 	$('#grid').innerHTML("Hide Grid"); 
	 }
	 else {
	 	$('#grid').innerHTML("Show Grid");
	 }
}
*/
function resetStyle() {
	$('#grid-holder').empty();
		initialize();
		keepGrid();
}	