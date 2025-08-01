// selection.datum(value)

let allCircles = d3.selectAll("circle");

// let radius = 25;

// allCircles = allCircles.datum(radius);
// console.log(allCircles);

// console.log(allCircles.datum());

// allCircles = allCircles.datum(null);
// console.log(allCircles);

allCircles = allCircles.datum(function(d,i,n){
	// console.log(d);
	// console.log(i);
	// console.log(n);
	return (i+1) * 15;
});
// console.log(allCircles);

allCircles.attr('r', d=> d );

// allCircles.attr('r', radius);