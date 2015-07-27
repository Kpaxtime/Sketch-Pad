var numBoxes = 32;
var hasGrid = false;
var setWidth = 32;
var setHeight = 32;
var inputColor = "black";
var rotateColor = "#820BBB";
var currentColor = "white";
var numBoxes;

$(document).ready(function () {
	
	runDefault();
	draw();
	dropDownMenu();
	
	
	$('#draw').on('click', function() {
		draw();
	});

	$('#grid').on('click', function() {
		showGrid();
	});

	$("#clear").on('click', function() {
		resetStyle();
	});

	$('#choose-color').on('click', function() {
		chooseColor();
	});

	$('#customize').on('click', function() {
		setAttributes();
	});
});

function chooseColor() {
	currentColor = prompt("Enter a color.");
	drawColor = currentColor;
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
		$(this).animate({"opacity" : 1}, "slow");
	});
}

function randomColor() {

	$('.data-block').off('mouseenter');

	$('.data-block').on('mouseenter',function() {
		
		$(this).css('background-color', randomChange());
	});
}

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

function resetStyle() {
	$('#grid-holder').empty();
		addGrid();
		keepGrid();
		draw();
		menuTitle();
}

function setAttributes() {
	var inputHeight = prompt("Enter the height of the Sketch Pad (in pixels).");
	var inputWidth = prompt("Enter the width of the Sketch Pad (in pixels).");
	numBoxes = prompt("Enter the number of boxes per row.");
	inputColor = prompt("Enter the grid color.");

	setWidth = Math.floor(inputWidth/numBoxes);
	setHeight = Math.floor(inputHeight/numBoxes);

	if($('#grid').text() == "Hide Grid") {
		showGrid();
	}

	$("#grid-holder").css({"width": (setWidth * numBoxes), "height": (setHeight * numBoxes)});

	addGrid();
	draw();
	menuTitle();
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
	switch(rotateColor) {
		case "#FF0000":
			rotateColor = "#FF7519";
			break;
		case "#FF7519":
			rotateColor = "#FFFF00";
			break;
		case "#FFFF00":
			rotateColor = "#66FF33";
			break;
		case "#66FF33":
			rotateColor = "#0000FF";
			break;
		case "#0000FF":
			rotateColor = "#2E0854";
			break;
		case "#2E0854":
			rotateColor = "#820BBB";
			break;
		case "#820BBB":
			rotateColor = "#FF0000";
			break;	
		default:
			break;
		}
		
				
		$(this).css("background-color", rotateColor);		
	
	});
}

function trail() {

	$('.data-block').off('mouseenter');

	$('.data-block').on('mouseenter', function() {
		$(this).css("opacity", 1);
		$(this).animate({opacity: 0}, "slow");
	});

}

function draw() {
	$('.data-block').on('mouseenter', function() {
		$(this).css("background-color", currentColor);
	});
	
}

function dropDownMenu() {
	$('select').change(function() {
		if($(this).val() == 1) {
			gradient();
		}
		else if($(this).val() == 2) {
			trail();
		}
		else if($(this).val() == 3) {
			reverseTrail();
		}
		else if($(this).val() == 4) {
			randomColor();
		}
		else {
			rainbow();
		}
	});
}

function menuTitle() {
	var chosenOption = document.getElementById("#base2");
	chosenOption.selected = "selected";
}