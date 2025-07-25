const h1 = d3.select('h1');
console.log(h1);

let firstSvg = d3.select("svg");
console.log(firstSvg);
firstSvg = d3.select("svg#circles");
console.log(firstSvg);
firstSvg = d3.select("#circles");
console.log(firstSvg);

let secondSvg = d3.select("#rects");
console.log(secondSvg);
secondSvg = d3.select("svg:nth-of-type(2)");
console.log(secondSvg);

let firstCircle = d3.select("circle");
console.log(firstCircle);

let secondCircle = d3.select("circle:nth-of-type(2)");
console.log(secondCircle);	

let firstRect = d3.select("rect:nth-of-type(1)");
console.log(firstRect);

let secondRect = d3.select("rect:nth-of-type(2)");
console.log(secondRect);

firstRect = secondSvg.select("rect");
console.log(firstRect);

secondSvg.select(function (d, i, n ) {
	console.log(d);
	console.log(i);
	console.log(n);
	console.log(n[i]);
	console.log(this);

	});