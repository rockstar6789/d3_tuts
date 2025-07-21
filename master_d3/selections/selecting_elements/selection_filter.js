let allCircles = d3.selectAll("circle");
console.log(allCircles);

let allCirclesOdd	= allCircles.filter(":nth-child(odd)");
console.log(allCirclesOdd);

let allCirclesEven = allCircles.filter(":nth-child(even)");
console.log(allCirclesEven);

allCirclesOdd = allCircles.filter(".odd");
console.log(allCirclesOdd);

allCirclesEven = allCircles.filter(".even");
console.log(allCirclesEven);

let circlesFN = allCircles.filter(function(d,i,n){
	// console.log(d);
	// console.log(i);
	// console.log(n);
	// console.log(n[i]);
	// console.log(this);
	// this.style.fill = 'dodgerblue';
	i%2==0?this.style.fill = "orange" :this.style.fill = "pink";
});
console.log(circlesFN);