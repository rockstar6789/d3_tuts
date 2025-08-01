// selection.join(enter, update, exit)

let svg = d3.select("svg");

const dataArray = [10,20,30];

let allCircles = svg.selectAll("circle")
	.data(dataArray)
	.join("circle")
	.attr("cx", function(d,i,n){
		return 150;
	})
	.attr("cy", function(d,i,n){
		return d + i * 50;
	})
	.attr("r", d=>d);
console.log(allCircles);

const dataArray1 = [5, 10, 15, 20];
allCircles = allCircles.data(dataArray1)
	.join("circle")
	.attr("cx", function(d,i,n){
		return 150;
	})
	.attr("cy", function(d,i,n){
		return d + i * 50;
	})
	.attr("r", d => d);
console.log(allCircles);

const dataArray2 = [30, 50];
allCircles = allCircles.data(dataArray2)
	.join("circle")
	.attr("cx", function(d,i,n){
		return 150;
	})
	.attr("cy", function(d,i,n){
		return  d + i * 50;
		})
	.attr("r", (d => d));
console.log(allCircles);

allCircles = allCircles.data(["red", "blue"])
	.join(
		enter => console.log(enter),
		// update => console.log(update),
		update => update.attr("fill", d => d),
		exit => console.log(exit)
		);
console.log(allCircles);