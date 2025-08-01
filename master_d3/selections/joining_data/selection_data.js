// selection.data(data, key)

let circlesSvg1 = d3.selectAll("#svg1 circle");
console.log(circlesSvg1);

const radSvg1 = [10, 20 , 30];

let cirSvg1Data = circlesSvg1.data(radSvg1);
console.log(cirSvg1Data);

circlesSvg1.select(function(d,i,n){
	console.log(d);
	console.log(i);
	console.log(n);
	console.log(this);
	console.log(n[i]);
});
// cirSvg1Data.attr("r", d => d);
cirSvg1Data.attr("r", function(d){
	return d;
});	

let circlesSvg2 = d3.selectAll("#svg2 circle");
let cirSvg2Data = circlesSvg2.data(radSvg1);
cirSvg2Data.attr("r", function(d){
	return d;
});	

const colors = ["red", "green", "blue"];

cirSvg2Data = circlesSvg2.data(colors);
console.log(cirSvg2Data);

cirSvg2Data.attr("fill", d => d);

let allCircles = d3.selectAll("svg").selectAll("circle");
console.log(allCircles);

const radSvg2 = [25, 35, 45]
allCircles = allCircles.data(radSvg2);
allCircles.attr("r", d =>d);
console.log(allCircles);

cirSvg2Data = circlesSvg2.data(function(d,i,n){
	console.log(d);
	console.log(i);
	console.log(n);
	return [20,30,40];
});
console.log(cirSvg2Data);

console.log(cirSvg1Data.data());
console.log(cirSvg2Data.data());