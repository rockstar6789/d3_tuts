// selection.data(data, key)

let svg = d3.select("svg");

let dataArray = [10 , 15, 20];

let allCircles = svg.selectAll("circle")
	.data(dataArray, function(d){
		return d.toString();
	})
	.join("circle")
	.attr("cx", (d,i) =>d + i * 30)
	.attr("cy", "100")
	.attr("r", d=>d);
console.log(allCircles);

dataArray = [10, 20];

allCircles = svg.selectAll("circle")
	.data(dataArray, function(d){
		return d.toString();
	})
	.join("circle")
	// .attr("cx", (d,i) => d + i *30)
	// .attr("cy", "100")
	// .attr("r", d=>d);
console.log(allCircles);

dataArray = [5, 20];

allCircles = svg.selectAll("circle")
	.data(dataArray, function(d){
		return d.toString();
	})
	.join("circle")
	.attr("cy", (d,i) => d + i * 30)
	.attr("cy", "100")
	.attr("r", d=>d);
console.log(allCircles);