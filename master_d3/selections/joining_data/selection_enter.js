// selection.enter();

let svg = d3.select("svg");

svg.append("circle")
	.attr("cx", "150")
	.attr("cy", "50")
	.attr("r", "40");

svg.append("circle")
	.attr("cx", "150")
	.attr("cy", "150")
	.attr("r", "30");

let dataArray = [15, 15, 15];

let allCircles = d3.selectAll("circle")
	.data(dataArray)
	.attr("r", d => d);

console.log(allCircles);

let enter = allCircles.enter();
console.log(enter);

let svgAppend = svg.selectAll("circle")
	.data(dataArray)
	.enter()
	.append("circle")
	.attr("cx", "150")
	.attr("cy", "250")
	.attr("r", d => d);
console.log(svgAppend);