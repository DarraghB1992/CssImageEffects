functionEditImage(){
	var greyscale_value=$("#greyscale").val();
	var blur_value=$("#blur").val();
	var brightness_value=$("#brightness").val();
	var contrast_value=$("#contrast").val();
	var sepia_value=$("#sepia").val();
	var hue_value=$("#hue").val();
	var opacity_value=$("#opacity").val();
	var inverse_value=$("inverse").val();
	var saturate_value=$("saturate").val();


$("#imgcontainer img").css("filter", "greyscale("+ greyscale_value+"%)");

}