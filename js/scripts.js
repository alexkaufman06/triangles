var triangles = function(side1, side2, side3) {
	var side1 = parseInt(side1);
	var side2 = parseInt(side2);
	var side3 = parseInt(side3);

	if (side1 === side2 && side2 === side3 && side3 === side1) {
		return " an Equilateral";
	} else if ((side1 === side2 || side2 === side3 || side3 === side1) &&
						 !(side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2)) {
		return " an Isosceles";
	} else if ((side1 !== side2 && side2 !== side3 && side3 !== side1) &&
						 !(side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2)) {
		return " a Scalene";
	} else {
		return " NOT a";
	}

};

$(document).ready(function() {
	$("form#sides").submit(function(event) {
		var side1 = parseInt($("input#side1").val());
		var side2 = parseInt($("input#side2").val());
		var side3 = parseInt($("input#side3").val());
		var result = triangles(side1, side2, side3);

		$(".side1").text(side1);
		$(".side2").text(side2);
		$(".side3").text(side3);

		$(".triangle").text(result);

		$("#result").show();
		event.preventDefault();
	});
});
