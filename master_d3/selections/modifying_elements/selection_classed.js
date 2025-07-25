// selection.classed(name,value)

let line1 = d3.selectAll("line").classed("gray");
console.log(line1);

let lines = d3.selectAll("line").classed("gray", true);
console.log(lines);

lines = d3.selectAll("line").classed("gray");
console.log(lines);

lines = d3.selectAll("line").classed("gray", false);
d3.selectAll("line").attr('class', null);

lines = d3.selectAll("line").classed("stroke-width stroke-opacity", true);

lines.classed("dasharray", function (d, i, n) {
		// console.log(d);
		// console.log(i);
		// console.log(n);
	return i % 2 === 0 ? true : false;
});