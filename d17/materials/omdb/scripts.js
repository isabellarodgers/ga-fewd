$("button").on("click", function() {
	console.log("is the button working?")
	var movie = $("input").val();
	$.getJSON("http://www.omdbapi.com/?t=" + movie , function(data) {
		var title = data["Title"]
		var rating = data["Rated"]
		var year = data["Year"]
		var plot = data["Plot"]
		$("h1.title").text(title + " (" + rating +")");
		$("h4.year").text(year);
		$("img.poster").attr("src", data["Poster"]);
		$("p.plot").text(plot);
	});
});