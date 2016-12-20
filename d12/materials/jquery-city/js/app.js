// 1. Create .on("click", function() {}) handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

console.log("is this working?")

$("#first").on("click", function() {
	console.log("first image clicked");
	$("figure img").attr("src", "img/1.jpg");
})

$("#second").on("click", function(){
	console.log("second image clicked");
	$("figure img").attr("src", "img/2.jpg");
})

$("#third").on("click", function(){
	console.log("third image clicked");
	$("figure img").attr("src", "img/3.jpg");
})

$("#fourth").on("click", function(){
	console.log("fourth image clicked");
	$("figure img").attr("src", "img/4.jpg");
})


