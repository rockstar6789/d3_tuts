// selection.sort(compare)

d3.selectAll("p")
	.datum(function(){
		return this.innerText;
	});

console.log(d3.selectAll("p"));

d3.selectAll("p")
	.datum(function () {
		return this.innerText;
	})
	.sort((a, b) => b - a) //descending
	.sort((a, b) => a - b) //ascending

let sortCircles = d3.selectAll("circle")
	.datum(function (){
		return d3.select(this).attr("r")
	})
	.sort((a, b) => b - a)
	.attr("cx", function(d, i){
		return 50 + (i * 80);
	})
	.sort((a , b) => a - b)
	.attr("cx", function(d, i){
		return 20 + (i * 80)
	})
	console.log(sortCircles);