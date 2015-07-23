var numBoxes = 32;
var hasGrid = false;
var setWidth = 32;
var setHeight = 32;
var inputColor = "black";
var currentColor = "#820BBB";
var numBoxes;

$(document).ready(function () {
	$('p').on('click', function() {
	$(this).addClass('newtext');

});
	runDefault();
	gradient();
	

	
	$('#gradient').on('click', function () {
		gradient();
	});
	

	$('#trail').on('click', function() {
		trail();
	});

	$('#reverse-trail').on('click', function() {
		reverseTrail();
	});


	$('#random-color').on('click', function() {
		randomColor();
	});

	  $('#rainbow').on('click', function() {
		rainbow();
	});
	

	$('#grid').on('click', function() {
		showGrid();
	});

	$("#clear").on('click', function() {
		resetStyle();
	});

	$('#customize').on('click', function() {
		setAttributes();
	});
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

function runDefault() {
	for(var i = 0; i <(32 * 32); i++) {
		$('#grid-holder').append('<div class="data-block"></div>');

	}
}

function gradient() {
		
	$('.data-block').off('mouseenter');

	$('.data-block').on('mouseenter', function() {
		var currentOpacity = $(this).css("opacity");
		$(this).css("opacity", currentOpacity - 0.30);
	});
}

function reverseTrail() {

	$('.data-block').off('mouseenter');

	$('.data-block').on('mouseenter', function() {
		$(this).css("opacity", 0);
		$(this).animate({opacity: 1}, "slow");
	});
}

function randomColor() {

	$('.data-block').off('mouseenter');

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
		 $("#grid-holder").css({"width": (setWidth * numBoxes + 2 * (+numBoxes)), "height": (setHeight * numBoxes + 2 * (+numBoxes))});
		 hasGrid = true;
	}
	else {
		$('.data-block').removeClass('show-grid');
		$("#grid").text("Show Grid");
		$("#grid-holder").css({"width": (setWidth * numBoxes), "height": (setHeight * numBoxes)});
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
		addGrid();
		keepGrid();
}

function setAttributes() {
	var inputHeight = prompt("Enter the height of the Sketch Pad (in pixels)");
	var inputWidth = prompt("Enter the width of the Sketch Pad (in pixels)");
	numBoxes = prompt("Enter the number of boxes per row");
	inputColor = prompt("Enter the grid color");

	setWidth = Math.floor(inputWidth/numBoxes);
	setHeight = Math.floor(inputHeight/numBoxes);

	$("#grid-holder").css({"width": (setWidth * numBoxes), "height": (setHeight * numBoxes)});

	addGrid();

	
}	

function addGrid() {
	for(var i = 0; i < (numBoxes * numBoxes); i++) {
		$('#grid-holder').append('<div class="data-block"</div>');
	}
	$('.data-block').css({"width" : setWidth, "height" : setHeight, "background-color" : inputColor});
}

function rainbow() {

	$('.data-block').off('mouseenter');

	$('.data-block').on('mouseenter',function() {
	switch(currentColor) {
		case "#FF0000":
			currentColor = "#FF7519";
			break;
		case "#FF7519":
			currentColor = 	"#FFFF00";
			break;
		case "#FFFF00":
			currentColor = "#66FF33";
			break;
		case "#66FF33":
			currentColor = 	"#0000FF";
			break;
		case "#0000FF":
			currentColor = "#2E0854";
			break;
		case "#2E0854":
			currentColor = "#820BBB";
			break;
		case "#820BBB":
			currentColor = "#FF0000";
			break;	
		default:
			break;
		}
		
				
		$(this).css("background-color", currentColor);		
	
	});
}

function trail() {

	$('.data-block').off('mouseenter');

	$('.data-block').on('mouseenter', function() {
		$(this).css("opacity", 1);
		$(this).animate({opacity: 0}, "slow");
	});

}