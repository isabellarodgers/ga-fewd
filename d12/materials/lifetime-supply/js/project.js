console.log("is this working?");

$("button").on("click", function() {

	var currentAge = $("#age").val();
	// console.log(currentAge)
	var maxAge = $("#max-age").val();
	// console.log(maxAge)
	var typeOfDrink = $("#item").val();
	// console.log(typeOfDrink)
	var howManyPerDay = $("#num-per-day").val ();

	var maxNumberOfDrinks = (maxAge - currentAge) * howManyPerDay * 365;
	$("#solution").text(maxNumberOfDrinks);
	$("#drink").text(typeOfDrink);
});
