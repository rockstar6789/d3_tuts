let firstSvg = d3.select("svg").selectChildren();
console.log(firstSvg);

let secondSvg = d3.select("svg:nth-of-type(2)").selectChildren();
console.log(secondSvg);

let allSVG = d3.selectAll("svg").selectChildren();
console.log(allSVG);

d3.select("svg").selectChildren(function(c,i,cn){
	console.log(c);
	console.log(i);
	console.log(cn);
});

d3.selectAll("svg").selectChildren(function(c,i,cn){
	console.log(c);
	console.log(i);
	console.log(cn);
});
