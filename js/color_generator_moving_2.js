const $colorCode = 
	['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
	'a', 'b', 'c', 'd', 'e', 'f'];
// a function for generating random digit
function getRandomDigit () {
	let $randomDigitFloat = Math.random()*15;
	let $randomDigit = Math.round($randomDigitFloat);
	let $hexDigit = $colorCode[$randomDigit];
	return $hexDigit;
}

const $colorCircle_first = 
		`<span>
			<svg width = "80" height = "80" >
				<circle cx="40" cy="40" r="30" fill="`;
const $colorCircle_second =`" class = "number`
const $colorCircle_third = `" /> </svg></span>`;
const $colorBtn = $('.btn');

let $n = 0;

// add an eventlistener for click event
$colorBtn.on('click', () => {
	// create hex digits
		// and add them to random color
	// and get the value of numberX
	let $randomColor = '#'
	for (let i = 0; i < 6; i++) {
		let $hexDigit = getRandomDigit();
		$randomColor += $hexDigit;
	}
	let $nClass = $n.toString();
	
	const $randomColorCircle =
		$colorCircle_first + $randomColor + 
		$colorCircle_second + $nClass + 
		$colorCircle_third;

	// append element
	$('.colorDisplay').append($randomColorCircle);
	
// drag and drop element
	// get cursor value
	let $mouseX = '';
	let $mouseY = '';
	$('svg').on("mousemove", function(e) {
	  $mouseX = e.pageX;
	  $mouseY = e.pageY;
	  return $mouseX;
	  return $mouseY;
	});

	// element events
	$('.number' + $nClass).on({
		mousedown: function () {
			$(this).parent().parent().addClass('floating');
			
			// $(this).parent().insertBefore($('.colorDisplay').children().first());
		}, mouseleave: function ($mouseX) {
			$(this).parent().parent().attr('left', $mouseX + 'px');
		}, mouseup: function () {
			// let positionSvg = $('.number' + $nClass).parent().position();
			// if ($mouseX < positionSvg.left < ($mouseX + 80) &&
			// 	$mouseY < positionSvg.top < ($mouseY + 80)) {

			// }
			$(this).parent().parent().removeClass('floating');
			$(this).parent().parent().removeAttr('left');
			// $(this).parent().removeClass('moveCircle');
			// $(this).attr('margin-left', 'positionX').attr('margin-top', 'positionY');	
		}
	});

	// for next numberClass
	$n += 1;
});


// $(this).parent().addClass('moveCircle');

// drag and drop function 
// function dragElement () {
// 	getCursorPosition 
// 	let positionX = 
// 	let positionY = 
// 	// make it float
// 	$('.number' + $nClass).parent().addClass('moveCircle');
// 	// make it the topest element
// 	$('.number' + $nClass).insertAfter();
// 	// set new position equal to crusor's position
// 	$('.number' + $nClass).position();
// }








