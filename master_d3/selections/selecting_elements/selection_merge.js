// selection1.merge(selection2)

let allCSvg1 = d3.selectAll("#svg1 circle");
console.log(allCSvg1);

let allCSvg2 = d3.selectAll("#svg2 circle");
console.log(allCSvg2);

let allCsvg1Odd = allCSvg1.select(function(d,i,n){
	// console.log(d);
	// console.log(i);
	// console.log(n);
	// console.log(n[i]);
	// console.log(this);
	if(i%2==0) {
		this.style.fill = "indianred";
		return this
	} else{
		return null;
	}
});
console.log(allCsvg1Odd);

let allCsvg1Even = allCSvg1.select(function(d,i,n){
	// console.log(d);
	// console.log(i);
	// console.log(n);
	// console.log(n[i]);
	// console.log(this);
	if(i%2==0) {
		return null;
	} else {
		this.style.fill = "pink";
		return this
	}
});
console.log(allCsvg1Even);

let allCsvg1OddEven = allCsvg1Odd.merge(allCsvg1Even);
console.log(allCsvg1OddEven);

let allCsvg = allCSvg1.merge(allCSvg2);
console.log(allCsvg);
// 
let allCsvg2Odd = allCSvg2.select(function(d,i,n){
	// console.log(d);
	// console.log(i);
	// console.log(n);
	// console.log(n[i]);
	// console.log(this);
	if(i%2==0) {
		this.style.fill = "blue";
		return this
	} else {
		return null;
	}
});
console.log(allCsvg2Odd);

let allCsvg2Even = allCSvg2.select(function(d,i,n){
	// console.log(d);
	// console.log(i);
	// console.log(n);
	// console.log(n[i]);
	// console.log(this);
	if(i%2==0) {
		return null;
	} else {
		this.style.fill = "green";
		return this
	}
});
console.log(allCsvg2Even);

let svg1Msvg1 = allCsvg2Even.merge(allCsvg1Odd);
console.log(svg1Msvg1);
