// selection.style(name, value)

let svg = d3.select("svg");
console.log(svg.style("background-color"));

svg.attr("width", "300");
svg.attr("height", "300");

let svgColor = svg.style("background-color", "lightgray");
console.log(svg.style("background-color"));
console.log(svgColor);

svg.style("background-color", null);

let ellipses = 	svg.selectChildren("ellipse");
console.log(ellipses);

ellipses.select(function (d, i){
	const ellipse = d3.select(this);
	// console.log(this);
	ellipse.attr("cx", `${i * 100 + 110}`)
		.attr("cy", `${i * 80 + 80}`)
		.attr("rx", `${i * 20 + 50}`)
		.attr("ry", `${i * 20 + 70}`);

	// ellipse.style("fill", `rgb(${Math.random()*120}, ${Math.random()*120}, ${Math.random()*120})`);
});

ellipses.style("fill", function(d, i){
	return `rgb(${Math.random()*120}, ${Math.random()*120}, ${Math.random()*120})`;
});

// svg.style("background-color", "red")
// svg.attr("width", "1000");