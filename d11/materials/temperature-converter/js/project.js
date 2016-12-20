console.log("is this working?");

$("button").on("click", function() {
	var fahrTempAsString = $("#temperature").val();
	var fahrTemp = parseFloat (fahrTempAsString);
	var celsiusTemp = (fahrTemp * 1.8) + 32;
	$("#converted").text(celsiusTemp);
});