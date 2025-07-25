// selection.insert(type, before)

let svg1 = d3.select("#svg1");

let text1 = svg1.insert("text")
	.text("Inserted with text method")
	.attr("x", "5")
	.attr("y", "40");
console.log(text1);

let text2 = svg1.insert("text", "text")
	.text("Inserted with text method using before selector")
	.attr("x", "5")
	.attr("y", "20");
console.log(text2);

let text3 = svg1.insert("text")
	.text("Inserted with text as last child")
	.attr("x", "5")
	.attr("y", "60");
console.log(text3);

let svg2 = d3.select("#svg2");

for (let i=0; i < 2; i++){
	svg2.insert(function(){
		return document.createElementNS("http://www.w3.org/2000/svg", "text");
	}, function () {
		console.log(this.firstElementChild);
		return this.firstElementChild;
	})
	.text(`${i}`)
	.attr("x", "5")
	.attr("y", `${i * 20+20}`);
}