$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 800;
	const wghtmin = 400;

	//standard sliders
	$('#dimmer').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		$('.dilate').css("--wght", value);

		let ratio = (value-wghtmin)/(wghtmax-wghtmin);
		// console.log(ratio);

		let opacityValue = 80*ratio;
		// console.log(opacityValue);

		$('.blacklayer').css('opacity', opacityValue+'%');

	});

});


