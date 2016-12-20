$("button").on("click", function() {
	console.log("is the add items button working?");
	var city = $("input").val();
	console.log(city);
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&apikey=ca9e531b3cf0dba99ea7bbacc81cb4f1", function(data) {
		console.log(data);
  		$("h4.temperature").text(data["main"]["temp"]);	
  		$("img.icon").attr("src", "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");
	});
	//$(".icon").text(["main"]["temp"]);
});