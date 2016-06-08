// editing image via css properties
function editImage() {
	// grayscale
	

	

	var greyscale_value= $("#greyscale").val();
	var blur_value= $("#blur").val();
	var brightness_value= $("#brightness").val();
	var contrast_value= $("#contrast").val();
	var sepia_value= $("#sepia").val();
	var huer_value= $("#huer").val();
	var opacity_value= $("#opacity").val();
	var inverse_value= $("#inverse").val();
	var saturate_value= $("#saturate").val();
	console.log(inverse_value);

$("#imageContainer img").css("-webkit-filter", 'grayscale(' + greyscale_value+'%)blur(' + blur_value+'px)contrast(' + contrast_value+'%)sepia(' + sepia_value+'%)hue-rotate(' + huer_value+'deg)opacity(' + opacity_value+'%)invert(' + inverse_value+'%)saturate(' + saturate_value+'%)');


// $("#imageContainer img").css("-webkit-filter", 'blur(' + blur_value+'px)');
// $("#imageContainer img").css("-webkit-filter", 'brightness(' + brightness_value+'%)');
// $("#imageContainer img").css("-webkit-filter", 'contrast(' + contrast_value+'%)');
// $("#imageContainer img").css("-webkit-filter", 'sepia(' + sepia_value+'%)');
// $("#imageContainer img").css("-webkit-filter", 'huer(' + huer_value+'%)');
// $("#imageContainer img").css("-webkit-filter", 'opacity(' + opacity_value+'%)');
// $("#imageContainer img").css("-webkit-filter", 'inverse(' + inverse_value+'%)');
// $("#imageContainer img").css("-webkit-filter", 'saturate(' + saturate_value+'%)');

}



//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').click('reset', function () {
	setTimeout(function() {			/* setTimeout 0 - run function instantly.*/
		editImage();
	},0);
});