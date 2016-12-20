console.log("is this working?");

$("a").on("click", function() {
var red = $("input#red").val();
console.log(red);
var green = $("input#green").val();
console.log(green);
var blue = $("input#blue").val();
console.log(blue);

var rgb = "rgb(" + red + " , " + green + " , " + blue + ")";
console.log(rgb);

$("#wrapper").css("background-color", rgb);
$("p#colorful-text").text(rgb);
});

  // console.log("")